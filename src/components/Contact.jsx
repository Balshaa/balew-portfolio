import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-zinc-200 py-24 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="text-center">
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
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          {/* Left side */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Quick outreach
            </h3>

            <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
              You can also connect with me through LinkedIn or explore my
              projects and technical work on GitHub.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
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

          {/* Contact form */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            {status === "success" ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl text-green-600 dark:bg-green-900/30">
                  ✓
                </div>

                <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-white">
                  Message sent!
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Thank you for reaching out. I will get back to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium text-blue-600 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Required by Netlify for React */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Email notification subject */}
                <input
                  type="hidden"
                  name="subject"
                  data-remove-prefix
                  value="New message from Balew Derseh Portfolio"
                />

                {/* Spam protection */}
                <div className="hidden">
                  <label>
                    Don't fill this out if you're human:
                    <input name="bot-field" />
                  </label>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-zinc-800 dark:text-zinc-200"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-600 dark:border-zinc-700 dark:text-white"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-zinc-800 dark:text-zinc-200"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-600 dark:border-zinc-700 dark:text-white"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-zinc-800 dark:text-zinc-200"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-600 dark:border-zinc-700 dark:text-white"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                    Something went wrong. Please try again or contact me
                    through LinkedIn.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}