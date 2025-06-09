import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const secureChannels = [
    {
      icon: "Phone",
      label: "Защищенная связь",
      value: "+7 (***) ***-**-42",
      description: "Только для служебных целей",
    },
    {
      icon: "Mail",
      label: "Шифрованная почта",
      value: "a.n@secure.fsb.ru",
      description: "PGP ключ доступен по запросу",
    },
    {
      icon: "MessageSquare",
      label: "Secure Messenger",
      value: "@AlexN_FSB",
      description: "Signal, проверенный контакт",
    },
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Защищенные каналы связи
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Для служебных вопросов и официального взаимодействия
          </p>
        </div>

        {/* Warning notice */}
        <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <Icon
              name="AlertTriangle"
              size={24}
              className="text-red-400 flex-shrink-0 mt-1"
            />
            <div>
              <h3 className="text-red-400 font-semibold mb-2">Внимание!</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Все коммуникации фиксируются и подлежат анализу службой
                безопасности. Используйте только для официальных целей.
                Несанкционированный доступ преследуется по закону.
              </p>
            </div>
          </div>
        </div>

        {/* Contact methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {secureChannels.map((channel, index) => (
            <div
              key={index}
              className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 text-center"
            >
              <div className="w-16 h-16 bg-sky-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={channel.icon} size={24} className="text-sky-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{channel.label}</h3>
              <p className="text-sky-400 font-mono text-lg mb-2">
                {channel.value}
              </p>
              <p className="text-slate-400 text-sm">{channel.description}</p>
            </div>
          ))}
        </div>

        {/* Security clearance */}
        <div className="bg-slate-900/80 p-8 rounded-lg border border-slate-600 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Icon name="Shield" size={32} className="text-sky-400" />
            <div>
              <h3 className="text-2xl font-bold text-white">Уровень допуска</h3>
              <p className="text-sky-400 font-medium">Совершенно секретно</p>
            </div>
          </div>

          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Для взаимодействия необходим соответствующий уровень допуска к
            государственной тайне. Все запросы проходят предварительную
            проверку.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-sky-600 hover:bg-sky-700 text-white"
            >
              <Icon name="FileCheck" size={20} className="mr-2" />
              Подать запрос на встречу
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать форму допуска
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
