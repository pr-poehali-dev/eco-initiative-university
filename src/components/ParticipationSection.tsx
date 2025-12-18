import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ParticipationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/55c1dd41-6688-487b-8564-8428c37e2a99', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: '✅ Заявка отправлена!',
          description: 'Спасибо за интерес! Мы свяжемся с вами в ближайшее время.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast({
          title: '❌ Ошибка',
          description: data.error || 'Не удалось отправить заявку. Попробуйте позже.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: '❌ Ошибка сети',
        description: 'Проверьте подключение к интернету и попробуйте снова.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/55c1dd41-6688-487b-8564-8428c37e2a99', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: '✅ Сообщение отправлено!',
          description: 'Мы ответим в течение 24 часов.',
        });
        setContactData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: '❌ Ошибка',
          description: data.error || 'Не удалось отправить сообщение. Попробуйте позже.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: '❌ Ошибка сети',
        description: 'Проверьте подключение к интернету и попробуйте снова.',
        variant: 'destructive',
      });
    } finally {
      setIsContactSubmitting(false);
    }
  };

  return (
    <>
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
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    <Icon name="Send" size={18} className="mr-2" />
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
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
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input
                      id="contact-name"
                      placeholder="Ваше имя"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-message">Сообщение</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Ваше сообщение..."
                    rows={5}
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isContactSubmitting}>
                  <Icon name="Mail" size={18} className="mr-2" />
                  {isContactSubmitting ? 'Отправка...' : 'Отправить сообщение'}
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
    </>
  );
};

export default ParticipationSection;