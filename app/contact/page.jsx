"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
      <section className="space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            Contact
          </p>
          <h1 className="h1">Let’s build something together.</h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            Have a project, question, or collaboration idea? Send me a message
            and I’ll get back to you soon.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr]">
          <form
            className="space-y-6 rounded-3xl border border-accent/30 bg-slate-900/95 p-8 shadow-xl backdrop-blur-xl"
            action="mailto:harshanaeshan2002@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Name
                </span>
                <Input name="name" placeholder="Your name" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Email
                </span>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="space-y-2">
              <span className="text-sm font-medium text-muted-foreground">
                Subject
              </span>
              <Input name="subject" placeholder="What is this about?" />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-muted-foreground">
                Message
              </span>
              <Textarea
                name="message"
                placeholder="Write your message here..."
                rows={6}
              />
            </label>

            <Button type="submit" className="w-full justify-center">
              Send message
            </Button>
          </form>

          <aside className="space-y-6 rounded-3xl border border-slate-600 bg-slate-800/95 p-8 shadow-xl backdrop-blur-xl">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Email
              </p>
              <h2 className="h3">Reach out directly</h2>
              <p className="text-base leading-7 text-muted-foreground">
                You can also contact me at:
              </p>
              <a
                href="mailto:harshanaeshan2002@gmail.com"
                className="break-all text-accent hover:underline"
              >
                harshanaeshan2002@gmail.com
              </a>
            </div>

            <div className="space-y-3">
              <h2 className="h3">What to include</h2>
              <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                <li>• Brief description of your project or question</li>
                <li>• Your preferred timeline</li>
                <li>• Any links or references</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Contact;
