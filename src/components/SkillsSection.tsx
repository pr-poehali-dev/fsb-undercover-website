import Icon from "@/components/ui/icon";

const SkillsSection = () => {
  const skills = [
    {
      icon: "Shield",
      title: "Контрразведка",
      description:
        "Выявление и нейтрализация угроз информационной безопасности",
      level: 78,
    },
    {
      icon: "Search",
      title: "Оперативный анализ",
      description: "Глубокий анализ данных и выявление скрытых закономерностей",
      level: 82,
    },
    {
      icon: "Lock",
      title: "Криптография",
      description: "Защита конфиденциальной информации методами шифрования",
      level: 71,
    },
    {
      icon: "Radar",
      title: "Техническая разведка",
      description: "Сбор и обработка информации техническими средствами",
      level: 75,
    },
    {
      icon: "Users",
      title: "Агентурная работа",
      description: "Координация и управление оперативными источниками",
      level: 87,
    },
    {
      icon: "Globe",
      title: "Международные операции",
      description: "Работа в составе международных групп безопасности",
      level: 85,
    },
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Области экспертизы
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Многолетний опыт в критически важных областях национальной
            безопасности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-sky-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-sky-600/20 rounded-lg">
                  <Icon name={skill.icon} size={24} className="text-sky-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Skill level bar */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-400">
                    Уровень экспертизы
                  </span>
                  <span className="text-sm text-sky-400 font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-sky-600 to-sky-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
