"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.6, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative mx-auto h-[200px] w-[200px] mix-blend-lighten xl:h-[300px] xl:w-[300px] 2xl:h-[400px] 2xl:w-[400px]"
        >
          <Image
            src="/assets/Eshana.png"
            priority
            quality={100}
            fill
            alt="Eshan Harshana"
            className="object-cover object-center rounded-full"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className="absolute top-0 left-1/2 h-[210px] w-[210px] -translate-x-1/2 xl:h-[310px] xl:w-[310px] 2xl:h-[410px] 2xl:w-[410px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="240"
            stroke="#38b497"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 128 25 25", "16 25 92 72", "4 258 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
