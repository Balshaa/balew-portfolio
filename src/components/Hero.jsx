export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-73px)] items-center"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[1.3fr_0.7fr] md:items-center">
        
        <div>
<p className="mb-5 flex items-center text-xl font-semibold uppercase tracking-[0.3em] text-blue-600">
  <span className="typing-title">
    Application Management Specialist
  </span>

  <span className="typing-cursor"></span>
</p>
<h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white">
  Hi all, I'm{" "}
  
  <span className="text-blue-600">
    Balew Derseh
    <img
  alt="👋"
  draggable={false}
  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
  className="inline-block h-[1em] w-[1em] ml-2 align-[-0.1em] waving-hand"
/>
  </span>
</h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I work at the intersection of banking technology, application
            management, automation, and software development — building
            practical solutions that make business processes more reliable
            and efficient.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 dark:bg-white dark:text-zinc-900 dark:hover:bg-blue-500 dark:hover:text-white"
            >
              View my work →
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-blue-600 hover:text-blue-600 dark:border-zinc-700 dark:text-zinc-200"
            >
              Contact me
            </a>
          </div>

          <div className="mt-10 flex gap-6">
            <a
              href="https://github.com/Balshaa"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900 dark:hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/balew-derseh/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-500 transition hover:text-blue-600"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

<div className="hidden justify-end md:flex">
  <div className="relative">

    {/* Main developer card */}
    <div className="flex h-72 w-72 items-center justify-center rounded-3xl border border-zinc-300 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900">

      <div className="w-60">

        {/* Developer icon */}
<div className="mb-4 text-center text-9xl animate-developer">
  👨‍💻
</div>

<p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 animate-typing">
  <span className="text-green-500">$</span> npm run deploy
  <span className="ml-1 animate-cursor">|</span>
</p>

<p className="mt-2 text-xs font-semibold text-green-600 dark:text-green-400 animate-success-completed">
  ✓ Successfully completed
</p>



        {/* Mini terminal */}
        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-950">

          {/* Terminal dots */}
          <div className="mb-3 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
            <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
            <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
          </div>

          {/* Code */}
          <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <span className="text-green-500">$</span>{" "}
            npm run deploy
            <span className="ml-1 animate-pulse">|</span>
          </p>

        </div>

      </div>

    </div>

    {/* Floating information card */}
    <div className="absolute -bottom-5 -left-5 rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

      <p className="text-xs text-blue-600 font-bold">
        Focused on
      </p>

      <p className="mt-1 font-semibold text-zinc-900 dark:text-white">
        Banking Technology
      </p>

    </div>

  </div>
</div>

      </div>
    </section>
  );
}