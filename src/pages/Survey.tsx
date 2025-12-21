import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Survey = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [surveyData, setSurveyData] = useState({
    status: '',
    faculty: '',
    campusFrequency: '',
    ecoRating: '',
    topProblems: [] as string[],
    usesRecycling: '',
    supportedInitiatives: [] as string[],
    participation: {
      lectures: '',
      cleanup: '',
      volunteer: '',
      bicycle: '',
      sorting: ''
    },
    ideas: '',
    joinWorkGroup: false,
    email: ''
  });

  const handleCheckboxChange = (field: 'topProblems' | 'supportedInitiatives', value: string) => {
    setSurveyData(prev => {
      const current = prev[field];
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter(v => v !== value) };
      } else {
        return { ...prev, [field]: [...current, value] };
      }
    });
  };

  const handleParticipationChange = (key: string, value: string) => {
    setSurveyData(prev => ({
      ...prev,
      participation: { ...prev.participation, [key]: value }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: '✅ Спасибо за участие!',
      description: 'Ваши ответы помогут нам сделать университет лучше.',
    });

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <Badge className="mb-4">Опрос об экологических инициативах</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Помогите сделать наш университет экологичнее
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Ваше мнение крайне важно для нас, чтобы понять текущую ситуацию и определить наиболее приоритетные направления для работы. Опрос анонимный и займет не более 7-10 минут.
          </p>
          <div className="flex justify-center gap-2 mb-8">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-2 w-16 rounded-full transition-colors ${
                  i + 1 <= currentStep ? 'bg-primary' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="User" size={24} />
                  Часть 1: Общая информация
                </CardTitle>
                <CardDescription>Расскажите о себе</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-semibold mb-3 block">1. Ваш статус в университете:</Label>
                  <RadioGroup value={surveyData.status} onValueChange={(value) => setSurveyData({ ...surveyData, status: value })}>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bachelor" id="bachelor" />
                        <Label htmlFor="bachelor" className="font-normal">Студент бакалавриата</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="master" id="master" />
                        <Label htmlFor="master" className="font-normal">Студент магистратуры/аспирантуры</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="teacher" id="teacher" />
                        <Label htmlFor="teacher" className="font-normal">Преподаватель</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="admin" id="admin" />
                        <Label htmlFor="admin" className="font-normal">Сотрудник администрации</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="font-normal">Другое</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="faculty" className="text-base font-semibold">2. Ваш факультет/институт:</Label>
                  <Input
                    id="faculty"
                    placeholder="Например: Факультет биологии"
                    value={surveyData.faculty}
                    onChange={(e) => setSurveyData({ ...surveyData, faculty: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">3. Как часто вы находитесь в университетском кампусе?</Label>
                  <RadioGroup value={surveyData.campusFrequency} onValueChange={(value) => setSurveyData({ ...surveyData, campusFrequency: value })}>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="daily" id="daily" />
                        <Label htmlFor="daily" className="font-normal">Ежедневно</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weekly" id="weekly" />
                        <Label htmlFor="weekly" className="font-normal">Несколько раз в неделю</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="font-normal">Несколько раз в месяц</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="rarely" id="rarely" />
                        <Label htmlFor="rarely" className="font-normal">Редко</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart" size={24} />
                  Часть 2: Оценка текущей экологической ситуации
                </CardTitle>
                <CardDescription>Ваше мнение о текущем состоянии</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    4. Как вы оцениваете общий уровень экологической культуры и практик в нашем университете?
                  </Label>
                  <RadioGroup value={surveyData.ecoRating} onValueChange={(value) => setSurveyData({ ...surveyData, ecoRating: value })}>
                    <div className="flex gap-4 justify-center py-4">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <div key={rating} className="flex flex-col items-center gap-2">
                          <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} className="w-6 h-6" />
                          <Label htmlFor={`rating-${rating}`} className="font-normal text-sm">{rating}</Label>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 text-center">1 - очень низкий, 5 - очень высокий</p>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    5. Какие из следующих экологических проблем в кампусе вы считаете наиболее актуальными? (Выберите не более 3-х)
                  </Label>
                  <div className="space-y-3">
                    {[
                      { id: 'energy', label: 'Высокое потребление энергии (свет, отопление)' },
                      { id: 'waste', label: 'Большое количество мусора, неорганизованные урны' },
                      { id: 'recycling', label: 'Отсутствие или неэффективная система раздельного сбора отходов' },
                      { id: 'plastic', label: 'Пластиковое загрязнение (одноразовая посуда в столовых, бутилированная вода)' },
                      { id: 'water', label: 'Неэкономное использование воды' },
                      { id: 'green', label: 'Проблема озеленения территории (мало деревьев, газонов)' },
                      { id: 'transport', label: 'Отсутствие велоинфраструктуры и удобных пешеходных маршрутов' },
                      { id: 'awareness', label: 'Низкая осведомленность студентов и сотрудников об экологических вопросах' }
                    ].map((problem) => (
                      <div key={problem.id} className="flex items-start space-x-2">
                        <Checkbox
                          id={problem.id}
                          checked={surveyData.topProblems.includes(problem.id)}
                          onCheckedChange={() => handleCheckboxChange('topProblems', problem.id)}
                          disabled={surveyData.topProblems.length >= 3 && !surveyData.topProblems.includes(problem.id)}
                        />
                        <Label htmlFor={problem.id} className="font-normal leading-relaxed">
                          {problem.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    6. Пользуетесь ли вы системами раздельного сбора отходов, если они есть в университете?
                  </Label>
                  <RadioGroup value={surveyData.usesRecycling} onValueChange={(value) => setSurveyData({ ...surveyData, usesRecycling: value })}>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="regularly" id="regularly" />
                        <Label htmlFor="regularly" className="font-normal">Да, регулярно</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sometimes" id="sometimes" />
                        <Label htmlFor="sometimes" className="font-normal">Да, иногда</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-sense" id="no-sense" />
                        <Label htmlFor="no-sense" className="font-normal">Нет, не вижу в этом смысла</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-knowledge" id="no-knowledge" />
                        <Label htmlFor="no-knowledge" className="font-normal">Нет, потому что не знаю, как правильно сортировать</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-access" id="no-access" />
                        <Label htmlFor="no-access" className="font-normal">Нет, потому что контейнеры неудобно расположены/их нет рядом</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" size={24} />
                  Часть 3: Отношение к потенциальным инициативам
                </CardTitle>
                <CardDescription>Какие идеи вас вдохновляют?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    7. Какие из перечисленных инициатив вы бы поддержали в нашем университете? (Отметьте все подходящие)
                  </Label>
                  <div className="space-y-3">
                    {[
                      { id: 'water-stations', label: 'Установка станций для питьевой воды для заправки многоразовых бутылок' },
                      { id: 'reusable-dishes', label: 'Стимулирование использования многоразовой посуды (скидки в столовой)' },
                      { id: 'recycling-system', label: 'Улучшение и расширение системы раздельного сбора отходов' },
                      { id: 'composting', label: 'Создание программы компостирования пищевых отходов из столовых' },
                      { id: 'bicycle', label: 'Развитие велоинфраструктуры (велопарковки, велопрокат, ремонтные станции)' },
                      { id: 'green-rooms', label: '"Зеленые" аудитории с энергосберегающим освещением и датчиками движения' },
                      { id: 'eco-events', label: 'Проведение регулярных эко-мероприятий (фестивали, лекции, акции по уборке)' },
                      { id: 'eco-map', label: 'Создание эко-карты кампуса с отметками пунктов РСО, велопарковок, питьевых фонтанчиков' },
                      { id: 'discounts', label: 'Внедрение системы скидок в столовой при отказе от одноразовых приборов' }
                    ].map((initiative) => (
                      <div key={initiative.id} className="flex items-start space-x-2">
                        <Checkbox
                          id={initiative.id}
                          checked={surveyData.supportedInitiatives.includes(initiative.id)}
                          onCheckedChange={() => handleCheckboxChange('supportedInitiatives', initiative.id)}
                        />
                        <Label htmlFor={initiative.id} className="font-normal leading-relaxed">
                          {initiative.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    8. Готовы ли вы лично принять участие в следующих активностях?
                  </Label>
                  <div className="space-y-4">
                    {[
                      { id: 'lectures', label: 'Посещать эко-лекции и мастер-классы' },
                      { id: 'cleanup', label: 'Участвовать в субботниках на территории кампуса' },
                      { id: 'volunteer', label: 'Стать волонтером в эко-проектах (напр., сортировка отходов)' },
                      { id: 'bicycle', label: 'Использовать велосипед/самокат вместо авто для поездок в универ' },
                      { id: 'sorting', label: 'Сортировать отходы дома и приносить вторсырье в пункты приема в универе' }
                    ].map((activity) => (
                      <div key={activity.id} className="border rounded-lg p-4">
                        <Label className="font-normal mb-3 block">{activity.label}</Label>
                        <RadioGroup
                          value={surveyData.participation[activity.id as keyof typeof surveyData.participation]}
                          onValueChange={(value) => handleParticipationChange(activity.id, value)}
                        >
                          <div className="flex gap-4 flex-wrap">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id={`${activity.id}-yes`} />
                              <Label htmlFor={`${activity.id}-yes`} className="font-normal">Да, с удовольствием</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="maybe" id={`${activity.id}-maybe`} />
                              <Label htmlFor={`${activity.id}-maybe`} className="font-normal">Возможно</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="unlikely" id={`${activity.id}-unlikely`} />
                              <Label htmlFor={`${activity.id}-unlikely`} className="font-normal">Вряд ли</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id={`${activity.id}-no`} />
                              <Label htmlFor={`${activity.id}-no`} className="font-normal">Нет</Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Lightbulb" size={24} />
                  Часть 4: Ваши идеи
                </CardTitle>
                <CardDescription>Поделитесь своими мыслями</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="ideas" className="text-base font-semibold mb-3 block">
                    9. Есть ли у вас конкретные идеи или предложения, как сделать наш университет более экологичным?
                  </Label>
                  <Textarea
                    id="ideas"
                    placeholder="Поделитесь своими мыслями и предложениями..."
                    value={surveyData.ideas}
                    onChange={(e) => setSurveyData({ ...surveyData, ideas: e.target.value })}
                    rows={6}
                    className="mt-2"
                  />
                </div>

                <div className="border rounded-lg p-4 bg-green-50">
                  <Label className="text-base font-semibold mb-3 block">
                    10. Хотели бы вы присоединиться к рабочей группе по развитию эко-инициатив в университете?
                  </Label>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="joinWorkGroup"
                        checked={surveyData.joinWorkGroup}
                        onCheckedChange={(checked) => setSurveyData({ ...surveyData, joinWorkGroup: checked as boolean })}
                      />
                      <Label htmlFor="joinWorkGroup" className="font-normal">
                        Да, мне интересно присоединиться к рабочей группе
                      </Label>
                    </div>
                    {surveyData.joinWorkGroup && (
                      <div>
                        <Label htmlFor="email">Ваш email для связи:</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="example@university.edu"
                          value={surveyData.email}
                          onChange={(e) => setSurveyData({ ...surveyData, email: e.target.value })}
                          className="mt-2"
                          required
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <Icon name="Heart" size={32} className="mx-auto mb-3 text-primary" />
                  <h3 className="font-bold text-lg mb-2">Благодарим вас за участие!</h3>
                  <p className="text-gray-600">
                    Ваши ответы помогут нам выстроить эффективную работу и сделать наш университет лучше.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <Icon name="ChevronLeft" size={18} />
              Назад
            </Button>
            
            {currentStep < totalSteps ? (
              <Button type="button" onClick={nextStep} className="gap-2">
                Далее
                <Icon name="ChevronRight" size={18} />
              </Button>
            ) : (
              <Button type="submit" className="gap-2">
                <Icon name="Send" size={18} />
                Отправить опрос
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Survey;
