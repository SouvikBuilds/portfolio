"use client";
import React from "react";
import Link from "next/link";
import { ChevronDown, Contact } from "lucide-react";
import Button from "./ui/Button";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full"
    >
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="orange"
      />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="reveal text-sm font-mdeium  tracking-widest uppercase mb-4 in text-orange-500">
            Available for work
          </p>
          <h1 className="reveal d1 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-zinc-900 dark:text-white mb-6 in">
            Hi, I'm <span className="text-orange-500">Souvik</span>
          </h1>
          <p className="reveal d2 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md mb-10 in">
            Freelance{" "}
            <strong className="font-medium text-zinc-700 dark:text-zinc-300">
              Backend Developer &amp; Frontend Developer
            </strong>
            . I design and build digital products that people love to use —
            fast, clean, and accessible.
          </p>
          <div className="reveal d3 flex flex-wrap gap-4 in">
            <Link href="#work">
              <Button
                className="px-10 py-3 bg-white text-black rounded-full cursor-pointer gap-1"
                text="View my work"
                comp={<ChevronDown className="w-4 h-4" />}
              />
            </Link>
            <Link href="#contact">
              <Button
                className="px-10 py-3 bg-black text-white border border-white rounded-full cursor-pointer gap-1"
                text="Get in Touch"
              />
            </Link>
          </div>
          <div className="reveal d4 flex gap-8 mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900 in">
            <div>
              <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                5+
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Projects done
              </p>
            </div>
            <div>
              <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                2+
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Hackathons Won
              </p>
            </div>
            <div>
              <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                2y
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Experience
              </p>
            </div>
          </div>
        </div>

        <div className="reveal d2 flex justify-center md:justify-end in">
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="overflow-hidden border border-orange-400 w-full h-full rounded-3xl z-10">
              <img
                src="https://souvikbuilds2k06.netlify.app/assets/myImage3-CXx8uSaU.PNG"
                alt="SouvikBuilds"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white font-display font-bold text-sm px-4 py-2.5 rounded-2xl shadow-lg">
              Open to projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
