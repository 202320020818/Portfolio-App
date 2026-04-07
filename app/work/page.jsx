"use client";

import { motion } from "framer-motion";

const journey = [
  {
    period: "2023 - Present",
    title: "Family Business Support",
    type: "Practical Experience",
    description:
      "Contributing to day-to-day business operations in my father's business while growing my sense of responsibility, consistency, and communication.",
    points: [
      "Supported business activities and routine coordination work",
      "Helped manage practical tasks with reliability and discipline",
      "Improved communication, time management, and problem-solving through real responsibilities",
    ],
  },
  {
    period: "2023 - Present",
    title: "Personal Software Projects",
    type: "Independent Builder",
    description:
      "Developing personal and academic software projects to strengthen my full-stack, UI, and mobile development skills.",
    points: [
      "Built portfolio and project-based applications using modern web technologies",
      "Practiced CRUD operations, authentication flows, REST APIs, and responsive design",
      "Focused on writing cleaner code and turning ideas into usable digital products",
    ],
  },
  {
    period: "Now",
    title: "Seeking Internship Opportunity",
    type: "Career Goal",
    description:
      "Actively looking for an internship where I can learn from a professional team, contribute meaningfully, and prepare for a long-term permanent role.",
    points: [
      "Ready to learn quickly and adapt to team workflows",
      "Interested in frontend, backend, and full-stack development roles",
      "Aiming to grow from internship experience into a permanent software career",
    ],
  },
];

const strengths = [
  "Responsible and disciplined in real working environments",
  "Comfortable learning new tools and technologies quickly",
  "Interested in building practical and user-friendly software",
  "Looking for an internship first, then a permanent job path",
];

const focusAreas = [
  {
    title: "What I Bring",
    items: ["Consistency", "Ownership", "Fast learning", "Team mindset"],
  },
  {
    title: "What I Am Building",
    items: [
      "Portfolio projects",
      "Full-stack skills",
      "Mobile app skills",
      "Professional confidence",
    ],
  },
  {
    title: "What I Am Looking For",
    items: [
      "Internship",
      "Mentorship",
      "Industry exposure",
      "Permanent growth path",
    ],
  },
];

const Work = () => {
  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,180,151,0.22),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_22%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-[36px] border border-white/10 bg-[#10131a]/85 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8"
        >
          <div className="grid gap-8 border-b border-white/10 pb-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-accent/80">
                Experience Journey
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Building experience through
                <span className="block text-accent">
                  real responsibility and projects
                </span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
                I am not from a formal company background yet. My experience
                comes from supporting my family business, building personal
                software projects, and preparing myself for an internship that
                can grow into a permanent role.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                  Current Status
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Internship Seeker
                </p>
                <p className="mt-2 text-sm leading-7 text-white/65">
                  Looking for a place to learn, contribute, and grow into a
                  long-term software role.
                </p>
              </div>

              <div className="rounded-[28px] border border-accent/25 bg-accent/10 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/90">
                  Career Direction
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Internship to Permanent Job
                </p>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  Focused on turning practical learning and projects into a
                  strong professional path.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_380px]">
            <div className="space-y-5">
              {journey.map((item, index) => (
                <motion.article
                  key={`${item.title}-${item.period}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.45 }}
                  className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-6"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-transparent" />

                  <div className="pl-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                          {item.type}
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                          {item.title}
                        </h2>
                      </div>

                      <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/75">
                        {item.period}
                      </div>
                    </div>

                    <p className="mt-5 text-base leading-8 text-white/72">
                      {item.description}
                    </p>

                    <div className="mt-6 grid gap-3">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-white/10 bg-[#0b0d12] px-4 py-3 text-sm leading-7 text-white/72"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="space-y-5">
              <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-accent/18 via-white/5 to-transparent p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/85">
                  Honest Positioning
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Real experience, clearly presented
                </h3>
                <p className="mt-4 text-sm leading-8 text-white/72">
                  Instead of claiming company experience, this page presents the
                  work I have genuinely done: family-business responsibility,
                  self-driven software projects, and a clear commitment to
                  starting my professional journey through an internship.
                </p>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                  Strengths
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {strengths.map((item) => (
                    <span
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-medium text-white/82"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-[30px] border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                    {area.title}
                  </p>
                  <div className="mt-5 grid gap-3">
                    {area.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/74"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
