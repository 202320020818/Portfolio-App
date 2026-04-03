"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 761 541 638",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "harshanaeshan2002@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "No 2, Elpitiya Road, Patabedimulla, Ambalangoda",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  // Submit opens the user's default mail client with a prefilled email (mailto:)
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("");
    setStatusType("");

    // Determine recipient from contact info fallback
    const recipient =
      info.find((i) => i.title === "Email")?.description ||
      "harshanaeshan2002@gmail.com";

    const subject = `${formData.firstname || ""} ${
      formData.lastname || ""
    } — ${formData.service || "Contact"}`.trim();

    const bodyLines = [
      `Name: ${formData.firstname || ""} ${formData.lastname || ""}`.trim(),
      `Email: ${formData.email || ""}`,
      `Phone: ${formData.phone || ""}`,
      `Service: ${formData.service || ""}`,
      "",
      "Message:",
      formData.message || "",
    ];

    const body = bodyLines.join("\n");

    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    // Open the default mail client
    window.location.href = mailto;

    setStatusType("success");
    setStatusMessage("Opening your mail app...");
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col xl:flex-row gap-10"
        >
          {/* FORM */}
          <div className="w-full xl:w-[60%]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-6 sm:p-8 bg-[#27272c] rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl sm:text-3xl xl:text-4xl text-accent font-semibold">
                Let's work together
              </h3>

              <p className="text-sm sm:text-base text-white/60">
                I am available for freelance and full-time work.
              </p>

              {statusMessage ? (
                <div
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    statusType === "success"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                      : "border-red-500/30 bg-red-500/10 text-red-200"
                  }`}
                >
                  {statusMessage}
                </div>
              ) : null}

              {/* INPUTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Input
                  name="firstname"
                  value={formData.firstname}
                  placeholder="Firstname"
                  onChange={handleChange}
                  required
                />
                <Input
                  name="lastname"
                  value={formData.lastname}
                  placeholder="Lastname"
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  placeholder="Phone number"
                  onChange={handleChange}
                />
              </div>

              {/* SELECT */}
              <Select
                onValueChange={handleSelectChange}
                value={formData.service}
              >
                <SelectTrigger className="h-[48px] w-full bg-primary border border-white/10 text-white/60">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent className="bg-primary text-white/60 border border-white/10">
                  <SelectGroup>
                    <SelectLabel className="text-white/60">
                      Services
                    </SelectLabel>
                    <SelectItem value="Front-End Development">
                      Front-End Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Back-End Development">
                      Back-End Development
                    </SelectItem>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Project Management ">
                      Project Management
                    </SelectItem>
                    <SelectItem value="Full-Stack Development">
                      Full-Stack Development
                    </SelectItem>
                    <SelectItem value="Software Engineering ">
                      Software Engineering
                    </SelectItem>
                    <SelectItem value="IT Related ">IT Related</SelectItem>
                    <SelectItem value="Mobile Apps ">Mobile Apps</SelectItem>
                    <SelectItem value="Power BI ">Power BI</SelectItem>
                    <SelectItem value="Data Science Related">
                      Data Science Related
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* TEXTAREA */}
              <Textarea
                name="message"
                value={formData.message}
                className="h-[150px] sm:h-[180px]"
                placeholder="Type your message..."
                onChange={handleChange}
                required
              />

              {/* BUTTON */}
              <Button
                type="submit"
                className="w-full sm:w-[180px] bg-accent text-primary hover:bg-accent-hover"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="w-full xl:w-[40%] flex flex-col justify-center gap-8">
            {info.map((item, index) => (
              <div key={index} className="flex items-center gap-4 sm:gap-6">
                <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#27272c] rounded-xl flex items-center justify-center text-accent text-xl">
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm text-white/60">{item.title}</p>
                  <h3 className="text-base sm:text-lg">{item.description}</h3>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
