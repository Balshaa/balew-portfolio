export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-200 py-24 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Let's build something useful.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Interested in application management, automation, banking
          technology, or software development? Feel free to connect with me.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">

          <a
            href="https://www.linkedin.com/in/balew-derseh/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 dark:bg-white dark:text-zinc-900 dark:hover:bg-blue-500 dark:hover:text-white"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/Balshaa"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-blue-600 hover:text-blue-600 dark:border-zinc-700 dark:text-zinc-200"
          >
            GitHub ↗
          </a>

        </div>
      </div>
    </section>
  );
}