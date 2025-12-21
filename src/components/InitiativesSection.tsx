import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const InitiativesSection = () => {
  const initiatives = [
    {
      icon: 'Lightbulb',
      title: 'Час "Выключи свет" в пустых аудиториях',
      description: 'Еженедельная акция по мониторингу и выключению света в пустых аудиториях. Команды студентов соревнуются за максимальную экономию энергии с еженедельными отчётами',
      impact: 'Экономия энергии и формирование привычки'
    },
    {
      icon: 'MessageCircle',
      title: 'Карта "Бесплатные вещи" в Telegram',
      description: 'Telegram-бот для обмена ненужными вещами между студентами. Цифровая карта университета показывает, где можно забрать или оставить вещи даром',
      impact: 'Быстрое перераспределение и осознанное потребление'
    },
    {
      icon: 'ClipboardList',
      title: 'Доска эко-объявлений "Отдам даром"',
      description: 'Физическая доска в главном корпусе для объявлений об обмене и дарении вещей. Простое и наглядное решение, создающее место для спонтанного общения',
      impact: 'Долгосрочная работа без вмешательства'
    },
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

  return (
    <section id="initiatives" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4">Наши решения</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Что мы предлагаем
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Семь ключевых инициатив для создания экологичного кампуса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default InitiativesSection;