"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { DottedGlowBackground } from "./ui/dotted-glow-background";

const testimonials = [
  {
    quote:
      "Working with Souvik was an excellent experience from start to finish. He understood the project requirements quickly and transformed ideas into a clean, responsive, and modern interface. Communication throughout the development process was smooth, and the final result exceeded expectations in both design and performance.",
    name: "Rahul Sharma",
    title: "Founder, TechVerse",
  },
  {
    quote:
      "The attention to detail and frontend development skills were impressive. Every section of the website felt polished and well optimized across devices. The project was delivered on time with a professional approach and several thoughtful improvements beyond the initial requirements.",
    name: "Priya Mehta",
    title: "UI/UX Designer",
  },
  {
    quote:
      "Souvik delivered a fast and user-friendly web application with excellent responsiveness and functionality. The overall user experience was smooth, and the implementation of modern technologies made the project feel reliable and scalable for future improvements.",
    name: "Arjun Patel",
    title: "Startup Founder",
  },
  {
    quote:
      "I was impressed by the development quality and problem-solving ability shown throughout the project. Features were implemented efficiently, performance was optimized properly, and the final product looked modern and professional while maintaining great usability.",
    name: "Sneha Roy",
    title: "Product Manager",
  },
  {
    quote:
      "Great developer to work with. Very responsive, easy to communicate with, and focused on delivering quality work. The final project not only matched the original vision but also included improvements that enhanced the overall experience significantly.",
    name: "Aman Verma",
    title: "Business Owner",
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="h-160 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mb-14">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
      <p className="reveal text-xs font-medium text-orange-500 tracking-widest uppercase mb-3 in">
        Social proof
      </p>
      <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl mb-2 text-zinc-900 dark:text-white in">
        What clients say
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default Testimonials;
