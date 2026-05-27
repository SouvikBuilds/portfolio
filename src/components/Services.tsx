"use client";

import React, { useState, useRef, useEffect } from "react";
import { LaptopMinimalIcon, ChartPie, Code2 } from "lucide-react";

const cardDetails = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "I build responsive and interactive user interfaces with modern frontend technologies like React, Next.js, TypeScript, and Tailwind CSS, focusing on performance and seamless user experiences",
    icon: <LaptopMinimalIcon className="w-6 h-6 text-orange-500" />,
    delay: "delay-[0ms]",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "I develop scalable and efficient backend systems using modern technologies like Node.js, Express, MongoDB, PostgreSQL, and REST APIs to power secure and reliable applications.",
    icon: <Code2 className="w-6 h-6 text-orange-500" />,
    delay: "delay-[150ms]",
  },
  {
    id: 3,
    title: "Landing Page Design",
    description:
      "I design modern and conversion-focused landing pages with clean layouts, responsive designs, and engaging user experiences that help businesses showcase their products effectively.",
    icon: <ChartPie className="w-6 h-6 text-orange-500" />,
    delay: "delay-[300ms]",
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div ref={containerRef} className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-orange-500 tracking-widest uppercase mb-3 in">
            What I do
          </p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white in">
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cardDetails.map((card) => (
            <article
              key={card.id}
              className={`
                card-h group cursor-pointer rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800
                transition-all duration-600 ease-in-out
                ${card.delay}
                hover:-translate-y-3 hover:duration-200 hover:ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6.5"}
                ${card.id === 2 ? "dark:bg-[#28282B] bg-[#1A1A1D] hover:border-orange-500 -translate-y-7" : "dark:bg-zinc-900 bg-[#FFFEFF]"}
              `}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center ${card.id === 2 ? "bg-[#414047]" : "dark:bg-[#29292C] bg-[#FEF5ED]"} rounded-xl mb-6 group-hover:bg-orange-500/10 transition-colors `}
              >
                {card.icon}
              </div>
              <h3
                className={`font-display font-bold text-xl ${card.id === 2 ? "text-white" : "text-[#1A1A1D] dark:text-white"} mb-3`}
              >
                {card.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
