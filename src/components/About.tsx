"use client";
import React from "react";

const skills = [
  "HTML/CSS",
  "Javascript",
  "Tailwind Css",
  "React Js",
  "Node Js",
  "MONGO DB",
  "SQL",
  "NEXT JS",
  "Python",
  "FastApi",
  "Django",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal order-2 md:order-1 in">
            <div className="border border-orange-500 p-2 w-full aspect-square max-w-sm mx-auto rounded-3xl">
              <img
                src="https://souvikbuilds2k06.netlify.app/assets/myImage3-CXx8uSaU.PNG"
                alt="SouvikBuilds"
                loading="eager"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="reveal text-xs font-medium text-orange-500 tracking-widest uppercase mb-3 in">
              About me
            </p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-6 in">
              A bit about
              <br />
              who I am
            </h2>
            <p className="reveal d2 text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 in">
              I'm Souvik, a Bakcend Developer and frontend developer based in
              India with 2 years of experience. Currently Studying Btech in
              Information technology. I thrive at the intersection of great
              design and clean code.
            </p>
            <p className="reveal d3 text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 in">
              I believe great interfaces are invisible — they get out of the
              user's way. My work is fast, accessible and built to last. When
              I'm not coding, you'll find me gaming or seeing movies.
            </p>
            <div className="reveal d4 in">
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">
                Stack &amp; tools
              </p>
              <div
                className="flex flex-wrap gap-2"
                role="list"
                aria-label="Skills"
              >
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    role="listitem"
                    className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
