import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const SurveySection = () => {
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

  return (
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
  );
};

export default SurveySection;
