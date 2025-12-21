import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const SurveySection = () => {
  const surveyData = [
    { problem: 'Большое количество мусора', percentage: 37 },
    { problem: 'Отсутствие раздельного сбора', percentage: 24.1 },
    { problem: 'Высокое потребление энергии', percentage: 15.5 },
    { problem: 'Проблема озеленения', percentage: 12.1 },
    { problem: 'Низкая экологическая осведомлённость', percentage: 8.6 }
  ];

  const habits = [
    { habit: 'Уровень экокультуры: Высокий/Очень высокий', percentage: 46.7 },
    { habit: 'Уровень экокультуры: Средний', percentage: 50 },
    { habit: 'Пользуются общественным транспортом', percentage: 68.8 },
    { habit: 'Экономят энергию и воду', percentage: 71.9 },
    { habit: 'Готовность участвовать в субботниках', percentage: 56.3 }
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
            Мы опросили 30 студентов, чтобы понять главные экологические проблемы кампуса. Большинство респондентов — студенты бакалавриата ФВТ
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
                <span className="text-gray-700"><strong>Приоритеты:</strong> Установка станций с водой (41,9%), улучшение раздельного сбора (19,4%), озеленение территории (14,3%)</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Мотивация:</strong> Удобная инфраструктура (26,9%), материальные стимулы (38,5%), личный пример (26,9%)</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Готовность к участию:</strong> 73,3% готовы участвовать в экологических активностях, 56,3% — в субботниках</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Поведение:</strong> 46,7% сортируют отходы иногда/регулярно, 40% не пользуются из-за неудобного расположения контейнеров</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Ключевой вывод:</strong> Студенты проявляют пассивную готовность, необходимы низкопороговые возможности для вовлечения</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SurveySection;