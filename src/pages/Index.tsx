import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <TitleSlide />;
      case 1:
        return <FinancialOverviewSlide />;
      case 2:
        return <RentalDetailsSlide />;
      case 3:
        return <SalesDetailsSlide />;
      case 4:
        return <ExpensesSlide />;
      case 5:
        return <MarketOverviewSlide />;
      case 6:
        return <StrengthsSlide />;
      case 7:
        return <Vision2026Slide />;
      case 8:
        return <StrategySlide />;
      case 9:
        return <FinalSlide />;
      default:
        return <TitleSlide />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDZjMy4zMSAwIDYgMi42OSA2IDZzLTIuNjkgNi02IDYtNi0yLjY5LTYtNiAyLjY5LTYgNi02eiIgZmlsbD0iIzFmMjkzNyIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="relative z-10 h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-7xl animate-fade-in">
            {renderSlide()}
          </div>
        </div>

        <div className="pb-8 px-8 flex items-center justify-between">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="ghost"
            className="text-white hover:bg-white/10"
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>

          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            variant="ghost"
            className="text-white hover:bg-white/10"
          >
            <Icon name="ChevronRight" size={24} />
          </Button>
        </div>

        <div className="absolute bottom-24 right-8 text-sm text-white/50">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </div>
  );
};

const TitleSlide = () => (
  <div className="text-center space-y-8">
    <div className="space-y-4">
      <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        Финансовый итог
      </h1>
      <h2 className="text-5xl font-semibold text-white/90">10 месяцев 2025</h2>
    </div>
    <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
    <p className="text-2xl text-white/70 mt-12">Стратегическая сессия</p>
  </div>
);

const FinancialOverviewSlide = () => (
  <div className="space-y-8">
    <h2 className="text-5xl font-bold mb-12 text-center">Финансовый обзор</h2>
    <div className="grid grid-cols-3 gap-8">
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-blue-400">АРЕНДА</h3>
            <Icon name="TrendingDown" size={32} className="text-orange-500" />
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white/70">Выполнение плана</span>
                <span className="text-3xl font-bold">70%</span>
              </div>
              <Progress value={70} className="h-3" />
            </div>
            <div className="text-orange-400 text-xl font-semibold">
              ↓ 7% к 2024 году
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-blue-400">ПРОДАЖА</h3>
            <Icon name="TrendingDown" size={32} className="text-orange-500" />
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white/70">Выполнение плана</span>
                <span className="text-3xl font-bold">62%</span>
              </div>
              <Progress value={62} className="h-3" />
            </div>
            <div className="text-orange-400 text-xl font-semibold">
              ↓ 11% к 2024 году
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-blue-400">ДОСТАВКА</h3>
            <Icon name="TrendingUp" size={32} className="text-green-500" />
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white/70">Выполнение плана</span>
                <span className="text-3xl font-bold">103%</span>
              </div>
              <Progress value={103} className="h-3" />
            </div>
            <div className="text-green-400 text-xl font-semibold">
              ↑ 41% к 2024 году
            </div>
          </div>
        </div>
      </Card>
    </div>

    <Card className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/30 backdrop-blur-sm p-6 mt-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Icon name="TrendingUp" size={40} className="text-green-400" />
          <div>
            <p className="text-white/70 text-lg">Маржинальность продаж</p>
            <p className="text-3xl font-bold">↑ 13%</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-white/60">2024: 20,06%</p>
          <p className="text-2xl font-bold text-green-400">2025: 22,73%</p>
        </div>
      </div>
    </Card>
  </div>
);

const RentalDetailsSlide = () => (
  <div className="space-y-8">
    <h2 className="text-5xl font-bold mb-12">Направление АРЕНДА</h2>
    <div className="grid grid-cols-2 gap-6">
      <Card className="bg-orange-500/10 border-orange-500/30 p-6">
        <div className="flex items-center gap-3 mb-3">
          <Icon name="ArrowDown" className="text-orange-400" size={24} />
          <h3 className="text-xl font-semibold">Леса, вышки туры</h3>
        </div>
        <p className="text-4xl font-bold text-orange-400">-13%</p>
      </Card>

      <Card className="bg-orange-500/10 border-orange-500/30 p-6">
        <div className="flex items-center gap-3 mb-3">
          <Icon name="ArrowDown" className="text-orange-400" size={24} />
          <h3 className="text-xl font-semibold">Бытовки</h3>
        </div>
        <p className="text-4xl font-bold text-orange-400">-16%</p>
      </Card>

      <Card className="bg-orange-500/10 border-orange-500/30 p-6">
        <div className="flex items-center gap-3 mb-3">
          <Icon name="ArrowDown" className="text-orange-400" size={24} />
          <h3 className="text-xl font-semibold">Подъемники</h3>
        </div>
        <p className="text-4xl font-bold text-orange-400">-4%</p>
      </Card>

      <Card className="bg-orange-500/10 border-orange-500/30 p-6">
        <div className="flex items-center gap-3 mb-3">
          <Icon name="ArrowDown" className="text-orange-400" size={24} />
          <h3 className="text-xl font-semibold">Опалубка</h3>
        </div>
        <p className="text-4xl font-bold text-orange-400">-32%</p>
      </Card>

      <Card className="bg-green-500/10 border-green-500/30 p-6 col-span-2">
        <div className="flex items-center gap-3 mb-3">
          <Icon name="ArrowUp" className="text-green-400" size={32} />
          <h3 className="text-2xl font-semibold">Проф леса</h3>
        </div>
        <p className="text-5xl font-bold text-green-400">+67%</p>
      </Card>
    </div>
  </div>
);

const SalesDetailsSlide = () => (
  <div className="space-y-8">
    <h2 className="text-5xl font-bold mb-12">Направление ПРОДАЖА</h2>
    <div className="grid grid-cols-2 gap-6">
      <Card className="bg-orange-500/10 border-orange-500/30 p-6">
        <div className="flex items-center gap-3 mb-3">
          <Icon name="ArrowDown" className="text-orange-400" size={24} />
          <h3 className="text-xl font-semibold">Леса рамные, вышки туры</h3>
        </div>
        <p className="text-4xl font-bold text-orange-400">-14%</p>
      </Card>

      <Card className="bg-green-500/10 border-green-500/30 p-6">
        <div className="flex items-center gap-3 mb-3">
          <Icon name="ArrowUp" className="text-green-400" size={24} />
          <h3 className="text-xl font-semibold">Проф леса</h3>
        </div>
        <p className="text-4xl font-bold text-green-400">+11%</p>
      </Card>

      <Card className="bg-green-500/10 border-green-500/30 p-6 col-span-2">
        <div className="flex items-center gap-3 mb-3">
          <Icon name="TrendingUp" className="text-green-400" size={32} />
          <h3 className="text-2xl font-semibold">Опалубка</h3>
        </div>
        <div className="flex items-baseline gap-3">
          <p className="text-5xl font-bold text-green-400">×5</p>
          <p className="text-lg text-white/60">(эффект низкой базы)</p>
        </div>
      </Card>
    </div>
  </div>
);

const ExpensesSlide = () => (
  <div className="space-y-8">
    <h2 className="text-5xl font-bold mb-12">Статьи затрат</h2>
    <div className="space-y-6">
      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold">Реклама</h3>
          <Icon name="TrendingUp" size={28} className="text-orange-400" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-white/60 mb-1">2024</p>
            <p className="text-2xl font-bold">10 991 т.р.</p>
            <p className="text-blue-400">2,65% от продаж</p>
          </div>
          <div>
            <p className="text-white/60 mb-1">2025</p>
            <p className="text-2xl font-bold">14 452 т.р.</p>
            <p className="text-blue-400">3,77% от продаж</p>
          </div>
          <div>
            <p className="text-orange-400 text-xl font-semibold">+31%</p>
            <p className="text-white/60">фактически</p>
            <p className="text-orange-400 text-xl font-semibold">+42%</p>
            <p className="text-white/60">относительно</p>
          </div>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold">ФОТ</h3>
          <Icon name="TrendingUp" size={28} className="text-red-400" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-white/60 mb-1">2024</p>
            <p className="text-2xl font-bold">48 604 т.р.</p>
            <p className="text-blue-400">11,7% от продаж</p>
          </div>
          <div>
            <p className="text-white/60 mb-1">2025</p>
            <p className="text-2xl font-bold">72 894 т.р.</p>
            <p className="text-blue-400">19% от продаж</p>
          </div>
          <div>
            <p className="text-red-400 text-xl font-semibold">+50%</p>
            <p className="text-white/60">фактически</p>
            <p className="text-red-400 text-xl font-semibold">+63%</p>
            <p className="text-white/60">относительно</p>
          </div>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold">Налоги</h3>
          <Icon name="TrendingUp" size={28} className="text-red-500" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-white/60 mb-1">2024</p>
            <p className="text-2xl font-bold">12 788 т.р.</p>
            <p className="text-blue-400">3,1% от продаж</p>
          </div>
          <div>
            <p className="text-white/60 mb-1">2025</p>
            <p className="text-2xl font-bold">21 710 т.р.</p>
            <p className="text-blue-400">5,7% от продаж</p>
          </div>
          <div>
            <p className="text-red-500 text-xl font-semibold">+70%</p>
            <p className="text-white/60">фактически</p>
            <p className="text-red-500 text-xl font-semibold">+84%</p>
            <p className="text-white/60">относительно</p>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

const MarketOverviewSlide = () => (
  <div className="space-y-8">
    <h2 className="text-5xl font-bold mb-12">Обзор рынка</h2>
    
    <Card className="bg-orange-500/10 border-orange-500/30 p-8 mb-8">
      <p className="text-2xl text-center">
        Рынок аренды и продажи строительных лесов просел.
        <br />
        <span className="text-orange-400 font-semibold">
          Сужение рынка проходит пропорционально и по продаже, и по аренде
        </span>
      </p>
    </Card>

    <div className="grid grid-cols-2 gap-8">
      <Card className="bg-white/5 border-white/10 p-6">
        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Средний чек ПРОДАЖА</h3>
        <div className="space-y-4">
          <div>
            <p className="text-white/60">2024</p>
            <p className="text-3xl font-bold">42 026 ₽</p>
          </div>
          <div>
            <p className="text-white/60">2025</p>
            <p className="text-3xl font-bold">39 020 ₽</p>
          </div>
          <div className="pt-2 border-t border-white/20">
            <p className="text-orange-400 text-2xl font-semibold">↓ 7%</p>
          </div>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6">
        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Средний чек АРЕНДА</h3>
        <div className="space-y-4">
          <div>
            <p className="text-white/60">2024</p>
            <p className="text-3xl font-bold">19 943 ₽</p>
          </div>
          <div>
            <p className="text-white/60">2025</p>
            <p className="text-3xl font-bold">19 972 ₽</p>
          </div>
          <div className="pt-2 border-t border-white/20">
            <p className="text-blue-400 text-2xl font-semibold">≈ 0%</p>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

const StrengthsSlide = () => (
  <div className="space-y-8">
    <h2 className="text-5xl font-bold mb-12">Что мы умеем делать хорошо</h2>
    
    <Card className="bg-green-500/10 border-green-500/30 p-8 mb-6">
      <div className="flex items-start gap-4">
        <Icon name="CheckCircle" size={32} className="text-green-400 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-green-400">С позиции продавцов</h3>
          <p className="text-xl text-white/90">
            Продавать и сдавать в аренду строительные леса, вышки туры.
            <br />
            Работа по проф лесам — <span className="font-semibold text-green-400">хороший и уверенный вектор развития</span>
          </p>
        </div>
      </div>
    </Card>

    <Card className="bg-blue-500/10 border-blue-500/30 p-8 mb-6">
      <div className="flex items-start gap-4">
        <Icon name="CheckCircle" size={32} className="text-blue-400 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-blue-400">Организационная структура</h3>
          <p className="text-xl text-white/90">
            Мы хорошо можем решать вопросы в <span className="font-semibold">зоне своей ответственности</span>
          </p>
        </div>
      </div>
    </Card>

    <Card className="bg-orange-500/10 border-orange-500/30 p-8">
      <div className="flex items-start gap-4">
        <Icon name="AlertCircle" size={32} className="text-orange-400 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-orange-400">Зона роста</h3>
          <p className="text-xl text-white/90">
            Мы плохо понимаем и координируемся с зонами ответственности других членов команды.
            <br />
            <span className="italic text-white/70 mt-2 block">
              Парадигма: "Если я что-то не понимаю — это задача другого мне объяснить"
            </span>
          </p>
        </div>
      </div>
    </Card>
  </div>
);

const Vision2026Slide = () => (
  <div className="space-y-8">
    <h2 className="text-5xl font-bold mb-12">Видение 2026</h2>
    <div className="grid grid-cols-2 gap-6">
      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-start gap-3">
          <Icon name="TrendingDown" className="text-orange-400 flex-shrink-0 mt-1" size={24} />
          <p className="text-lg">Экономический застой или небольшой рост</p>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-start gap-3">
          <Icon name="Users" className="text-orange-400 flex-shrink-0 mt-1" size={24} />
          <p className="text-lg">Увеличение конкуренции, борьба за клиентов</p>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-start gap-3">
          <Icon name="AlertTriangle" className="text-orange-400 flex-shrink-0 mt-1" size={24} />
          <p className="text-lg">Непредсказуемое поведение заводов</p>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-start gap-3">
          <Icon name="Truck" className="text-orange-400 flex-shrink-0 mt-1" size={24} />
          <p className="text-lg">Серьезные качания в сегменте аренды подъемников</p>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-start gap-3">
          <Icon name="UserMinus" className="text-red-400 flex-shrink-0 mt-1" size={24} />
          <p className="text-lg">Сокращение рабочих мест, рост безработицы</p>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-start gap-3">
          <Icon name="DollarSign" className="text-red-400 flex-shrink-0 mt-1" size={24} />
          <p className="text-lg">Увеличение налоговой нагрузки</p>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6 col-span-2">
        <div className="flex items-start gap-3">
          <Icon name="TrendingUp" className="text-red-400 flex-shrink-0 mt-1" size={24} />
          <p className="text-lg">Рост операционных расходов</p>
        </div>
      </Card>
    </div>
  </div>
);

const StrategySlide = () => (
  <div className="space-y-8">
    <h2 className="text-5xl font-bold mb-12">Стратегические рамки 2026</h2>
    
    <div className="space-y-6">
      <Card className="bg-blue-500/10 border-blue-500/30 p-6">
        <div className="flex items-center gap-4">
          <Icon name="Target" size={32} className="text-blue-400" />
          <p className="text-2xl font-semibold">Фокус на рентабельности продаж и процессов</p>
        </div>
      </Card>

      <Card className="bg-blue-500/10 border-blue-500/30 p-6">
        <div className="flex items-center gap-4">
          <Icon name="Package" size={32} className="text-blue-400" />
          <p className="text-2xl font-semibold">Увеличение загрузки парка аренды</p>
        </div>
      </Card>

      <Card className="bg-blue-500/10 border-blue-500/30 p-6">
        <div className="flex items-center gap-4">
          <Icon name="GitMerge" size={32} className="text-blue-400" />
          <p className="text-2xl font-semibold">Единая система работы во всех филиалах</p>
        </div>
      </Card>
    </div>

    <div className="mt-12">
      <h3 className="text-3xl font-bold mb-6 text-red-400">Красные линии</h3>
      <div className="space-y-4">
        <Card className="bg-red-500/10 border-red-500/30 p-6">
          <div className="flex items-center gap-4">
            <Icon name="XCircle" size={28} className="text-red-400" />
            <p className="text-xl">Увеличение объемов складов без согласования</p>
          </div>
        </Card>

        <Card className="bg-red-500/10 border-red-500/30 p-6">
          <div className="flex items-center gap-4">
            <Icon name="XCircle" size={28} className="text-red-400" />
            <p className="text-xl">Коммуникация на эмоциях, а не на фактах. Искажение фактов</p>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

const FinalSlide = () => (
  <div className="space-y-12">
    <h2 className="text-5xl font-bold mb-12 text-center">Результат страт сессии</h2>
    
    <div className="space-y-6">
      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-start gap-4">
          <Icon name="CheckSquare" size={28} className="text-blue-400 flex-shrink-0 mt-1" />
          <p className="text-xl">Согласованная стратегическая рамка 2026</p>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-start gap-4">
          <Icon name="CheckSquare" size={28} className="text-blue-400 flex-shrink-0 mt-1" />
          <p className="text-xl">Общее видение и понимание бюджета</p>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-start gap-4">
          <Icon name="CheckSquare" size={28} className="text-blue-400 flex-shrink-0 mt-1" />
          <p className="text-xl">Правила коммуникации между головным офисом и регионами</p>
        </div>
      </Card>

      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-start gap-4">
          <Icon name="CheckSquare" size={28} className="text-blue-400 flex-shrink-0 mt-1" />
          <p className="text-xl">Четкие метрики, по которым мы ориентируемся и отвечаем</p>
        </div>
      </Card>
    </div>

    <Card className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 border-blue-500/50 p-10 mt-16">
      <p className="text-3xl font-bold text-center leading-relaxed">
        СЕЙЧАС НАМ ВАЖНА НЕ ГАРМОНИЯ МНЕНИЙ,
        <br />
        <span className="text-blue-400">А СИНХРОННОСТЬ ШАГОВ!</span>
      </p>
    </Card>
  </div>
);

export default Index;
