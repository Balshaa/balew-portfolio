export default function About() {
  return (
    <section
      id="about"
      className="border-t border-zinc-200 py-24 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              About me
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Technology with a business focus.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <p>
              I am an Application Management Specialist with a background in
              Computer Science and hands-on experience working with business
              applications and banking technology.
            </p>

            <p>
              My interests include application support, system integration,
              process automation, backend development, databases, and building
              tools that reduce repetitive manual work.
            </p>

            <p>
              I enjoy understanding how a system works from both the technical
              and business sides, then turning problems into practical
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}