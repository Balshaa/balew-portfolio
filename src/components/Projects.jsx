const projects = [
  {
    title: "Banking User Registration Automation",
    description:
      "An automation workflow for registering and assigning users and branches in a banking application, with Excel-based input and failure handling.",
    tags: ["Python", "Selenium", "Pandas", "Excel"],
  },
  {
    title: "Automated Sales Tracking & Reporting",
    description:
      "A Google Workspace automation solution that collects sales information and generates structured tracking and daily reporting workflows.",
    tags: ["Google Forms", "Google Sheets", "Apps Script"],
  },
  {
    title: "Payment Integration Projects",
    description:
      "Backend integration work involving payment services and API-based communication between systems.",
    tags: ["Node.js", "REST API", "PostgreSQL"],
  },
  {
    title: "Fuel Consumption Prediction System",
    description:
      "A machine-learning project focused on predicting fuel consumption from relevant input data.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-zinc-200 py-24 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Selected work
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Projects
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-2xl border   border-zinc-500 p-7 transition hover:-translate-y-3 hover:shadow-lg dark:border-zinc-800 hover:shadow-zinc-900/40 dark:hover:shadow-white/40 "
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-400">
                  0{index + 1}
                </span>

                <span className="text-sm text-blue-600 opacity-0 transition group-hover:opacity-100">
                  Project
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold text-zinc-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}