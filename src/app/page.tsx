import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import React from "react";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
