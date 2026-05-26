"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-black dark:border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">
          © <span id="year"></span> SouvikBuilds. All rights reserved. <br />
          Developed by{" "}
          <Link
            href="https://www.linkedin.com/in/souvikbuilds04/"
            target="_blank"
            className="font-bold"
          >
            Souvik Chatterjee
          </Link>{" "}
        </p>
        <p className="text-xs text-zinc-500">
          Built with{" "}
          <Link
            href="https://tailwindcss.com"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-orange-500 transition-colors"
          >
            Tailwind CSS
          </Link>{" "}
          &amp;{" "}
          <Link
            href="https://nextjs.org/"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-orange-500 transition-colors"
          >
            NEXT.JS
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
