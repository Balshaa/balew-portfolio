import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
      <a href="/" className="logo">
  <span className="grey-color">&lt;</span>
  <span className="logo-name text-zinc-60">Balew Derseh</span>
  <span className="grey-color">/&gt;</span>
</a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="rounded-full border border-zinc-200 px-3 py-2 text-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">

          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="rounded-full border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="rounded-lg border border-zinc-200 px-3 py-2 dark:border-zinc-700"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-zinc-200 bg-white px-6 py-5 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <div className="flex flex-col gap-5">

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-zinc-700 transition hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}