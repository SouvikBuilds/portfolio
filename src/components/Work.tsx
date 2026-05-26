"use client";

import Link from "next/link";
import React from "react";
import Button from "./ui/Button";
import { MoveRightIcon } from "lucide-react";

const myProjects = [
  {
    title: "Imagify, Text to Image Generator",
    description:
      "A full-stack MERN application that transforms text prompts into stunning AI-generated images using the ClipDrop API. The platform allows users to generate creative visuals instantly through a smooth and interactive interface designed for performance and usability. It features secure authentication, optimized image processing, responsive design, and a seamless user experience that makes AI-powered content generation accessible and engaging.",
    image:
      "https://plus.unsplash.com/premium_photo-1726079248086-ad6bec853f36?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGV4dCUyMHRvJTIwaW1hZ2UlMjBnZW5lcmF0b3J8ZW58MHx8MHx8fDA%3D",
    tags: ["React", "Node.js", "MongoDB", "Express Js", "SaaS"],
    link: "https://imagify.souvik.space",
  },

  {
    title: "PyRun, An Online Interpreter Of Python",
    description:
      "A browser-based Python interpreter built using React, and Node.js that enables users to execute Python code directly in the browser without any installation. The application provides a clean coding environment with real-time execution, responsive performance, and an intuitive interface. It creates an efficient and accessible learning experience for students and developers who want to write, test, and experiment with Python instantly.",
    image:
      "https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?w=900&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFB5dGhvbiUyMGludGVycHJldGVyfGVufDB8fDB8fHww",
    tags: ["React", "Node.js", "Pyodide", "JavaScript"],
    link: "https://pycompiler.souvik.space/",
  },

  {
    title: "Discord Bot",
    description:
      "A feature-rich Discord bot developed with JavaScript and Discord.js to improve server interactions and automate repetitive tasks. The bot includes moderation tools, music playback, fun commands, and server management features designed to enhance community engagement. Built with scalability and performance in mind, it delivers a smooth and efficient experience while handling multiple activities across different servers.",
    image:
      "https://images.unsplash.com/photo-1683029096295-7680306aa37d?w=900&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGlzY29yZHxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["JavaScript", "Discord.js", "Node.js", "Groq AI"],
    link: "https://github.com/SouvikBuilds/discord-bot-through-node-js",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="reveal text-xs font-medium text-orange-500 tracking-widest uppercase mb-3 in">
              portfolio
            </p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white in">
              Selected work
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {myProjects.map((project, index) => (
            <article
              key={index}
              className="card-h reveal d1 group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-orange-500 md:row-span-2 in flex flex-col hover:-translate-y-3 hover:duration-200 hover:ease-out"
            >
              <div className="overflow-clip bg-[#d4d4d8] w-full h-64 md:h-80">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="p-7 flex flex-col h-full mt-5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full ${
                        i === 0
                          ? "bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700"
                          : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Button
                    text="View Project"
                    className="bg-[#FF6B2B] hidden md:flex px-6 py-2 gap-2"
                    comp={<MoveRightIcon className="text-white" size={20} />}
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
