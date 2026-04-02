"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Front-End Development",
    description:
      "Building responsive and interactive user interfaces using modern web technologies like React, HTML, and CSS.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Designing user-friendly and visually appealing interfaces with a focus on usability and user experience.",
    href: "",
  },
  {
    num: "03",
    title: "Back-End Web Development",
    description:
      "Developing secure and scalable server-side applications, APIs, and database systems.",
    href: "",
  },
  {
    num: "04",
    title: "Web Development",
    description:
      "Creating complete web applications from front-end to back-end with modern frameworks and tools.",
    href: "",
  },
  {
    num: "05",
    title: "Project Management",
    description:
      "Planning, organizing, and managing projects efficiently to deliver results on time.",
    href: "",
  },
  {
    num: "06",
    title: "Full-Stack Development",
    description:
      "Handling both front-end and back-end development to build fully functional web applications.",
    href: "",
  },
  {
    num: "07",
    title: "Software Engineering",
    description:
      "Applying engineering principles to design, develop, and maintain high-quality software systems.",
    href: "",
  },
  {
    num: "08",
    title: "IT Related",
    description:
      "General IT skills including troubleshooting, system management, and technology solutions.",
    href: "",
  },
  {
    num: "09",
    title: "Mobile App Development",
    description:
      "Developing user-friendly and efficient mobile applications using modern technologies like Kotlin and Android.",
    href: "",
  },
  {
    num: "10",
    title: "Data Science",
    description:
      "Analyzing data to extract insights and build predictive models using tools like Python, R, and machine learning techniques.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.6 },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-10 xl:gap-14"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-5 p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-accent transition-all duration-500 group bg-white/5 backdrop-blur-sm hover:shadow-lg"
            >
              {/* top */}
              <div className="flex justify-between items-center">
                <div className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>

                <Link
                  href={service.href}
                  className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] xl:w-[65px] xl:h-[65px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-xl sm:text-2xl" />
                </Link>
              </div>

              {/* title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-[34px] font-bold leading-snug text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              {/* description */}
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                {service.description}
              </p>

              {/* border */}
              <div className="border-b border-white/10 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;