import json
import os
import psycopg2
from typing import Dict, Any
from pydantic import BaseModel, Field, EmailStr, ValidationError


class UserSubmission(BaseModel):
    '''Модель данных формы регистрации участника'''
    name: str = Field(..., min_length=1, max_length=255)
    email: EmailStr
    phone: str = Field(default='', max_length=50)
    message: str = Field(default='', max_length=5000)


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Сохраняет заявку участника эко-инициативы в базу данных
    Args: event - объект с httpMethod, body, headers
          context - объект с request_id и другими атрибутами
    Returns: HTTP response с результатом сохранения
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Обработка CORS preflight запроса
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    # Парсинг и валидация данных
    try:
        body_data = json.loads(event.get('body', '{}'))
        submission = UserSubmission(**body_data)
    except ValidationError as e:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Validation error', 'details': e.errors()}),
            'isBase64Encoded': False
        }
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Invalid JSON'}),
            'isBase64Encoded': False
        }
    
    # Подключение к базе данных
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Database configuration error'}),
            'isBase64Encoded': False
        }
    
    # Сохранение в БД
    try:
        conn = psycopg2.connect(database_url)
        cur = conn.cursor()
        
        # Вставка данных
        cur.execute(
            "INSERT INTO users (name, email, phone, message) VALUES (%s, %s, %s, %s) RETURNING id",
            (submission.name, submission.email, submission.phone, submission.message)
        )
        
        user_id = cur.fetchone()[0]
        conn.commit()
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 201,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена!',
                'user_id': user_id
            }),
            'isBase64Encoded': False
        }
        
    except psycopg2.IntegrityError:
        return {
            'statusCode': 409,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': 'Пользователь с таким email уже зарегистрирован'
            }),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': 'Database error',
                'details': str(e)
            }),
            'isBase64Encoded': False
        }
