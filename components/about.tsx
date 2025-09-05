"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-6">
  <p className="mb-3">
    I’m <span className="font-bold">Abres Siddique</span>, a passionate <span className="font-bold">Project Manager & Full-Stack Developer</span> with a love for technology that started in <span className="font-bold">10th grade</span>. 
    I completed my <span className="font-bold">BSc in IT</span> at Mahendra Pratap Sharada Prasad Singh College, ranking <span className="font-bold">1st in my class</span>, and specialized in <span className="font-bold">MERN stack development</span>. 
    To advance my expertise, I earned an <span className="font-bold">MCA</span> from LATE BHAUSAHEB HIRAY S.S. Trust’s Institute of Computer Application. 
    Currently, I’m pursuing a <span className="font-bold">PhD in Multi-Agent AI Systems</span>, exploring cutting-edge AI solutions for real-world projects.
  </p>

  <p className="mb-3">
    With <span className="font-bold">6+ years of experience</span>, I’ve led full-stack development and end-to-end projects across e-commerce, business systems, and technology platforms. 
    My <span className="font-bold">core tech stack</span> includes <span className="font-bold">MERN, Next.js, Python</span>, and I also engage with <span className="font-bold">DevOps and AI</span>. 
    Ranked in the <span className="font-bold">Top 1K globally on LeetCode</span> with <span className="font-bold">2206+ problems solved</span>, I bring strong analytical and problem-solving skills to project execution and team leadership.
  </p>

  <p className="mb-3">
    I’ve authored <span className="font-bold">peer-reviewed research papers</span> on <span className="font-bold">Quantum Computing</span> and the impact of <span className="font-bold">AI/ML in IT</span>, combining academic insight with practical technology strategy.
  </p>

  <p className="mb-3">
    Beyond tech, I’m the <span className="font-bold">co-founder of</span>  
    <a href="https://www.instagram.com/abresstore" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-500 hover:underline"> @AbresStore</a>, 
    a women’s clothing brand with <span className="font-bold">pan-India operations and Middle East exports</span>. 
    I’ve led <span className="font-bold">all tech, project management, and operational initiatives</span>, ensuring efficient execution, growth, and strong online presence.
  </p>

  <p>
    <span className="italic">Beyond coding and business</span>, I focus on <span className="font-bold">strategic problem-solving, team leadership, and continuous improvement</span>. 
    My motto is simple—<span className="font-bold">Plan. Execute. Evolve.</span>
  </p>
</div>



    </motion.section>
  );
}
