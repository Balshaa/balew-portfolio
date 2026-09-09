export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-zinc-200 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Experience
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Professional journey
        </h2>

        <div className="mt-12 max-w-3xl border-l border-zinc-300 pl-8 dark:border-zinc-700">
          {/* Current Role */}
          <div className="relative">
            <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-zinc-50 dark:ring-zinc-900" />

            <p className="text-sm font-medium text-blue-600">
              Current role
            </p>

            <h3 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
              Application Management Officer
            </h3>

            <p className="mt-1 text-base font-medium text-zinc-700 dark:text-zinc-300">
              Abay Bank
            </p>

            <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
              Supporting business applications and banking technology,
              troubleshooting application issues, working with systems and
              databases, developing APIs, and building automation solutions
              to improve operational processes and system reliability.
            </p>
          </div>

          {/* Previous Role */}
          <div className="relative mt-14">
            <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-zinc-50 dark:ring-zinc-900" />

            <p className="text-sm font-medium text-blue-600">
              Previous role
            </p>

            <h3 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
              Network Administrator
            </h3>

            <p className="mt-1 text-base font-medium text-zinc-700 dark:text-zinc-300">
              Ethiopian Electric Utility
            </p>

            <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
              Maintained, secured, and troubleshot organizational computer
              networks, monitored network performance, resolved connectivity
              issues, and helped keep communication and IT services running
              efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}