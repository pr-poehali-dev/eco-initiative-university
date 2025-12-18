CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at);

COMMENT ON TABLE users IS 'Таблица аккаунтов пользователей эко-инициативы';
COMMENT ON COLUMN users.id IS 'Уникальный идентификатор пользователя';
COMMENT ON COLUMN users.name IS 'Полное имя пользователя';
COMMENT ON COLUMN users.email IS 'Email для связи (уникальный)';
COMMENT ON COLUMN users.phone IS 'Телефон (опционально)';
COMMENT ON COLUMN users.message IS 'Сообщение от пользователя о желании помочь';
COMMENT ON COLUMN users.created_at IS 'Дата регистрации';
COMMENT ON COLUMN users.updated_at IS 'Дата последнего обновления';
