"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Skills.module.css";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "C++"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT", "Middleware"]
  },
  {
    category: "Database Systems",
    skills: ["MongoDB", "Mongoose", "DBMS"]
  },
  {
    category: "Machine Learning & NLP",
    skills: ["SentenceTransformers", "spaCy", "Scikit-learn", "NumPy", "Resume Parsing", "Cosine Similarity"]
  },
  {
    category: "Security",
    skills: ["Authentication", "Password Hashing (bcrypt)", "Secure API Design"]
  },
  {
    category: "Tools & Cloud",
    skills: ["Git", "GitHub", "Postman", "IBM Cloud (Foundational)", "Docker (Basics)"]
  }
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = Array.from(gridRef.current.children);

    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="skills">
      <h2 className={styles.heading}>Technical Arsenal</h2>
      <div ref={gridRef} className={styles.grid}>
        {skillsData.map((category, i) => (
          <div key={i} className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <div className={styles.badgeContainer}>
              {category.skills.map((skill, j) => (
                <span key={j} className={styles.badge}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
