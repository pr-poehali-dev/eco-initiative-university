import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [participantCount, setParticipantCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const animateCounter = () => {
      const target = 245;
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setParticipantCount(target);
          clearInterval(timer);
        } else {
          setParticipantCount(Math.floor(current));
        }
      }, 30);
    };
    animateCounter();
  }, []);

  const initiatives = [
    {
      icon: 'Droplets',
      title: 'Станции питьевой воды',
      description: 'Установка питьевых фонтанчиков в каждом корпусе университета для сокращения использования пластиковых бутылок',
      impact: 'Снижение потребления пластика на 60%'
    },
    {
      icon: 'Recycle',
      title: 'Раздельный сбор отходов',
      description: 'Современная система контейнеров для пластика, бумаги, стекла и органических отходов',
      impact: 'Переработка 75% отходов университета'
    },
    {
      icon: 'Coffee',
      title: 'Многоразовая посуда',
      description: 'Программа поощрения студентов и сотрудников, использующих собственные стаканы и контейнеры',
      impact: 'Скидки 10% в кафе университета'
    },
    {
      icon: 'Sprout',
      title: 'Зелёные аудитории',
      description: 'Озеленение учебных пространств живыми растениями для улучшения качества воздуха',
      impact: 'Улучшение микроклимата на 40%'
    }
  ];

  const surveyData = [
    { problem: 'Отсутствие раздельного сбора', percentage: 78 },
    { problem: 'Много одноразового пластика', percentage: 65 },
    { problem: 'Недостаток урн', percentage: 52 },
    { problem: 'Нет информации об экологии', percentage: 43 }
  ];

  const habits = [
    { habit: 'Готовы сортировать отходы', percentage: 82 },
    { habit: 'Используют многоразовые бутылки', percentage: 68 },
    { habit: 'Интересуются экологией', percentage: 71 },
    { habit: 'Хотят участвовать', percentage: 89 }
  ];

  const faqs = [
    {
      question: 'Как я могу присоединиться к эко-инициативе?',
      answer: 'Заполните форму участия на этой странице, и мы свяжемся с вами в течение 2-3 дней. Вы можете участвовать как волонтёр, предлагать идеи или помогать в организации мероприятий.'
    },
    {
      question: 'Нужны ли какие-то специальные знания?',
      answer: 'Нет, специальных знаний не требуется! Мы предоставляем все необходимые материалы и проводим обучающие мероприятия для участников.'
    },
    {
      question: 'Сколько времени нужно уделять?',
      answer: 'Вы сами выбираете уровень вовлечённости — от участия в разовых акциях (2-3 часа) до регулярной волонтёрской деятельности.'
    },
    {
      question: 'Какие мероприятия вы проводите?',
      answer: 'Мы организуем эко-субботники, лекции об устойчивом развитии, мастер-классы по апсайклингу, акции по посадке деревьев и многое другое.'
    },
    {
      question: 'Будут ли какие-то бонусы для участников?',
      answer: 'Да! Активные участники получают волонтёрские часы, сертификаты, скидки в партнёрских кафе и возможность включить опыт в портфолио.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за интерес! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Leaf" className="text-primary" size={28} />
            <span className="text-xl font-bold text-primary">Эко-Университет</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
            <a href="#survey" className="text-sm font-medium hover:text-primary transition-colors">Исследование</a>
            <a href="#initiatives" className="text-sm font-medium hover:text-primary transition-colors">Инициативы</a>
            <a href="#participate" className="text-sm font-medium hover:text-primary transition-colors">Участвовать</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">Присоединиться</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center fade-in">
            <Badge className="mb-4 text-sm px-4 py-1">🌱 Движение за устойчивое будущее</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
              Сделаем университет <span className="text-primary">экологичнее</span> вместе
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Присоединяйтесь к студенческой инициативе по созданию комфортной и экологичной среды в нашем университете
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 hover-lift">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Стать участником
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
            <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg">
              <Icon name="Users" className="text-primary" size={32} />
              <div className="text-left">
                <p className="text-sm text-gray-500">Уже присоединились</p>
                <p className="text-3xl font-bold text-gray-900">{participantCount}+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <Badge className="mb-4">О нас</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Почему это важно?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Наш университет — это дом для тысяч студентов и преподавателей. Каждый день здесь образуется огромное количество отходов, потребляется вода и электричество.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Мы верим, что небольшие изменения в повседневных привычках могут привести к значительному экологическому эффекту. Наша цель — создать устойчивую экосистему кампуса, где каждый осознанно подходит к потреблению ресурсов.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-3xl font-bold text-primary mb-1">-60%</p>
                  <p className="text-sm text-gray-600">Пластика</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-3xl font-bold text-secondary mb-1">+75%</p>
                  <p className="text-sm text-gray-600">Переработки</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-3xl font-bold text-primary mb-1">100%</p>
                  <p className="text-sm text-gray-600">Вовлечение</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 h-[500px] flex items-center justify-center">
                <Icon name="Leaf" size={200} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="survey" className="py-20 px-4 bg-green-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Результаты исследования</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Экологическая ситуация в университете
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы опросили 500+ студентов, чтобы понять главные экологические проблемы кампуса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="AlertCircle" className="text-red-500" />
                  Главные проблемы
                </CardTitle>
                <CardDescription>Что беспокоит студентов больше всего</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {surveyData.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{item.problem}</span>
                        <span className="text-sm font-bold text-primary">{item.percentage}%</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-red-400 to-red-500 transition-all duration-1000"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-primary" />
                  Готовность к изменениям
                </CardTitle>
                <CardDescription>Экологические привычки студентов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {habits.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{item.habit}</span>
                        <span className="text-sm font-bold text-primary">{item.percentage}%</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white border-2 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Lightbulb" className="text-yellow-500" />
                Выводы анализа
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700"><strong>89% студентов</strong> готовы активно участвовать в экологических инициативах</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700"><strong>Основная проблема</strong> — отсутствие инфраструктуры для раздельного сбора отходов (78%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700"><strong>Высокий потенциал</strong> — 82% готовы сортировать отходы при наличии удобных контейнеров</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700"><strong>Ключевая мотивация</strong> — улучшение экологической обстановки и личный вклад в будущее планеты</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="initiatives" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши решения</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Что мы предлагаем
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Четыре ключевые инициативы для создания экологичного кампуса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="hover-lift border-2 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={initiative.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{initiative.title}</CardTitle>
                  <CardDescription className="text-base">{initiative.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Icon name="Target" size={18} />
                    <span>{initiative.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 border-none">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Cog" className="text-primary" />
                Как это будет работать?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">1</div>
                  <h4 className="font-semibold mb-2">Пилотный запуск</h4>
                  <p className="text-sm text-gray-600">Тестирование инициатив в одном корпусе</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">2</div>
                  <h4 className="font-semibold mb-2">Сбор обратной связи</h4>
                  <p className="text-sm text-gray-600">Анализ результатов и доработка системы</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">3</div>
                  <h4 className="font-semibold mb-2">Масштабирование</h4>
                  <p className="text-sm text-gray-600">Внедрение во всём университете</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="participate" className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Присоединяйтесь</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Готовы участвовать?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Заполните форму, и мы расскажем, как вы можете внести свой вклад
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Форма регистрации</CardTitle>
                <CardDescription>Оставьте свои контакты, и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя и фамилия</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Чем хотите помочь?</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о своих идеях и интересах..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Heart" className="text-red-500" />
                    Как вы можете помочь
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Icon name="Users" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="block text-gray-900">Волонтёрство</strong>
                        <span className="text-sm text-gray-600">Участие в акциях и мероприятиях</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Lightbulb" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="block text-gray-900">Предложение идей</strong>
                        <span className="text-sm text-gray-600">Ваши инновационные решения</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Share2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="block text-gray-900">Распространение информации</strong>
                        <span className="text-sm text-gray-600">Расскажите друзьям о нашей инициативе</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Camera" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="block text-gray-900">Контент-создание</strong>
                        <span className="text-sm text-gray-600">Фото, видео, статьи о наших проектах</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white border-none">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="Gift" className="text-white" />
                    Бонусы для участников
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={16} />
                      Волонтёрские часы и сертификаты
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={16} />
                      Скидки 10% в кафе университета
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={16} />
                      Опыт для портфолио
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={16} />
                      Нетворкинг с единомышленниками
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Часто задаваемые вопросы
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-gray-50">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-green-50 to-primary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">
              Есть вопросы или предложения? Мы всегда на связи!
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Форма обратной связи</CardTitle>
              <CardDescription>Напишите нам, и мы ответим в течение 24 часов</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-message">Сообщение</Label>
                  <Textarea id="contact-message" placeholder="Ваше сообщение..." rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  <Icon name="Mail" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:eco@university.edu" className="text-primary hover:underline">
                        eco@university.edu
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MessageCircle" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Соцсети</p>
                      <div className="flex gap-3 mt-1">
                        <a href="#" className="text-primary hover:text-secondary">VK</a>
                        <a href="#" className="text-primary hover:text-secondary">Telegram</a>
                        <a href="#" className="text-primary hover:text-secondary">Instagram</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Leaf" className="text-primary" size={24} />
                <span className="text-lg font-bold">Эко-Университет</span>
              </div>
              <p className="text-gray-400 text-sm">
                Студенческая инициатива за устойчивое развитие и экологичный кампус
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#survey" className="hover:text-primary transition-colors">Исследование</a></li>
                <li><a href="#initiatives" className="hover:text-primary transition-colors">Инициативы</a></li>
                <li><a href="#participate" className="hover:text-primary transition-colors">Участвовать</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>eco@university.edu</li>
                <li>+7 (999) 123-45-67</li>
                <li>Корпус А, ауд. 101</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="MessageCircle" size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Send" size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Camera" size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Эко-инициатива Университета. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
