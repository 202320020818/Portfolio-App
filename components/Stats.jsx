"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of Experience",
  },
  {
    num: 18,
    text: "Projects Completed",
  },
  {
    num: 25,
    text: "Technologies Worked",
  },
  {
    num: 350,
    text: "Code contributions",
  },
];

const Stats = () => {
  return (
    <section className="bg-primary text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:text-accent hover:scale-105"
            >
              <CountUp
                end={item.num}
                duration={4}
                delay={1}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              {/* Horizontal line */}

              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
