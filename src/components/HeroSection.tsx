import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-slate-600 to-slate-700 flex items-center justify-center shadow-2xl">
            <Icon name="Shield" size={80} className="text-sky-400" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-montserrat">
          Тимур З.
        </h1>

        {/* Subtitle */}
        <div className="text-xl md:text-2xl text-slate-300 mb-8 space-y-2">
          <p className="flex items-center justify-center gap-2">
            <Icon name="Eye" size={20} className="text-sky-400" />
            Специалист по информационной безопасности
          </p>
          <p className="text-slate-400 text-lg">
            Федеральная служба • Конфиденциальные операции
          </p>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-400 mb-2">2+</div>
            <div className="text-slate-300">Года в деле</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-400 mb-2">15+</div>
            <div className="text-slate-300">Операций</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-400 mb-2">100%</div>
            <div className="text-slate-300">Легенда прикрытия</div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 text-lg font-medium"
        >
          <Icon name="FileText" size={20} className="mr-2" />
          Узнать больше
        </Button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-2 h-20 bg-sky-400/30"></div>
      <div className="absolute bottom-10 right-10 w-20 h-2 bg-sky-400/30"></div>
    </section>
  );
};

export default HeroSection;
