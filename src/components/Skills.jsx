const skillGroups = [
  {
    title: "Application & Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "PHP",
      "REST APIs",
      "JWT",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      "PostgreSQL",
      "Oracle",
      "Git",
      "Docker",
      "Swagger",
      "Linux",
    ],
  },
  {
    title: "Automation",
    skills: [
      "Python",
      "Selenium",
      "Pandas",
      "Google Apps Script",
      "Google Sheets",
      "Excel Automation",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-zinc-200 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Technologies I work with
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}