import Icon from "@/components/ui/icon";

const ExperienceSection = () => {
  const experiences = [
    {
      period: "2023 - Настоящее время",
      position: "Агент под прикрытием",
      organization: "Спецслужбы • Школьная операция [ЗАСЕКРЕЧЕНО]",
      description:
        "Работа в глубоком прикрытии среди сверстников. Сбор информации о потенциальных угрозах в молодежной среде. Мониторинг социальных сетей.",
      achievements: [
        "12+ успешных заданий",
        "Раскрыта сеть кибербуллинга",
        "Идеальное поддержание легенды",
      ],
      classification: "Секретно",
    },
    {
      period: "2022 - 2023",
      position: "Стажер-аналитик",
      organization: "Центр подготовки молодых кадров",
      description:
        "Интенсивная подготовка по оперативной работе. Изучение психологии подростков. Освоение современных технологий слежения.",
      achievements: [
        "Лучший результат на курсе",
        "Освоено 8 языков программирования",
        "Рекомендация к полевой работе",
      ],
      classification: "Ограниченного доступа",
    },
    {
      period: "2021 - 2022",
      position: "Кандидат в агенты",
      organization: "Академия юных разведчиков",
      description:
        "Первоначальная подготовка и отбор. Физическая и психологическая подготовка. Базовые навыки конспирации.",
      achievements: [
        "Прошел жесткий отбор (1 из 100)",
        "Отличные оценки по всем предметам",
        "Допуск к секретным материалам",
      ],
      classification: "Служебного пользования",
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Служебный опыт
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Карьерный путь в структурах обеспечения национальной безопасности
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sky-400/30 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row gap-8"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-sky-400 rounded-full border-4 border-slate-900"></div>

                {/* Period */}
                <div className="md:w-48 flex-shrink-0 md:text-right">
                  <div className="inline-block md:block bg-sky-600/20 px-4 py-2 rounded-lg">
                    <span className="text-sky-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 md:ml-8">
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {exp.position}
                        </h3>
                        <p className="text-slate-300 font-medium mb-2">
                          {exp.organization}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 bg-red-900/30 px-3 py-1 rounded-full">
                        <Icon
                          name="Shield"
                          size={16}
                          className="text-red-400"
                        />
                        <span className="text-red-400 text-sm font-medium">
                          {exp.classification}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-400 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                        <Icon name="Award" size={16} className="text-sky-400" />
                        Ключевые достижения
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-center gap-2 text-slate-300"
                          >
                            <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
