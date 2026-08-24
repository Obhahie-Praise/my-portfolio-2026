import Feats from "@/sections/Feats";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import Reachout from "@/sections/Reachout";
import Thoughts from "@/sections/Thoughts";
import React from "react";

const page = () => {
  return (
    <div className="md:cursor-none">
      <Navbar />
      <div className="space-y-[100px] pb-[100px] md:space-y-[200px] md:pb-[200px] lg:space-y-[300px] lg:pb-[300px] overflow-x-hidden">
        <Hero />
        <Projects />
        <Feats />
        <Thoughts />
        <Reachout />
      </div>

      <Footer />
    </div>
  );
};

export default page;
