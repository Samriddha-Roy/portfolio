"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  { 
    id: 1, 
    name: "ResumeMatch", 
    role: "AI Resume Screening & Job Matching System", 
    tech: ["FastAPI", "spaCy", "Scikit-learn", "SentenceTransformers"],
    points: [
      "Built an AI-powered system to automatically rank resumes based on semantic similarity with job descriptions.",
      "Parsed PDF/DOCX resumes using pdfminer and python-docx and cleaned text using spaCy NLP.",
      "Generated embeddings using SentenceTransformers and computed similarity using cosine similarity (Scikit-learn).",
      "Developed scalable backend using FastAPI with file upload APIs and ranking endpoints.",
      "Reduced manual screening time by automatically scoring and ranking candidates."
    ],
    link: "#"
  },
  { 
    id: 2, 
    name: "ChatR", 
    role: "Real-Time Chat Application", 
    tech: ["Node.js", "Express", "Socket.io", "MongoDB", "JWT"],
    points: [
      "Built a full-stack real-time chat platform with secure authentication and low-latency messaging.",
      "Implemented WebSocket communication using Socket.io and persistent storage using MongoDB.",
      "Designed backend with Node.js, Express, JWT authentication, REST APIs.",
      "Focused on scalability, reliability, and real-time data delivery."
    ],
    link: "#"
  },
];

function ProjectCard({ project }: { project: typeof projectsData[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Reduced tilt for longer text
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className={styles.cardPerspective}>
      <motion.div
        ref={cardRef}
        className={styles.card}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            <h3 className={styles.projectName}>{project.name}</h3>
            <a href={project.link} className={styles.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <p className={styles.projectRole}>{project.role}</p>
          <ul className={styles.projectPoints}>
            {project.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className={styles.techStack}>
            {project.tech.map((t) => (
              <span key={t} className={styles.techBadge}>{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = Array.from(gridRef.current.children);

    gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <h2 className={styles.heading}>Selected Works</h2>
      <div ref={gridRef} className={styles.grid}>
        {projectsData.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
