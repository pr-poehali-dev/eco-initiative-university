import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const [participantCount, setParticipantCount] = useState(0);

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

  return (
    <>
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
          <Button 
            className="hidden md:inline-flex"
            onClick={() => document.getElementById('participate')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Присоединиться
          </Button>
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
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 hover-lift"
                onClick={() => document.getElementById('participate')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="UserPlus" size={20} className="mr-2" />
                Стать участником
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
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
    </>
  );
};

export default HeroSection;