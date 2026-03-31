"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Certifications.module.css";
import { Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const certsData = [
  { name: "Deloitte Cybersecurity Job Simulation Program", year: "2026" },
  { name: "Accenture Developer Technology Job Simulation Program", year: "2025" },
  { name: "Flipkart GRID 6.0 - Participation Certificate", year: "2024" },
  { name: "Adobe India Hackathon - Participation Certificate", year: "2025" }
];

export default function Certifications() {
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
    <section ref={sectionRef} className={styles.section} id="certifications">
      <h2 className={styles.heading}>Certifications & Achievements</h2>
      <div ref={gridRef} className={styles.grid}>
        {certsData.map((cert, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <Award className={styles.icon} size={24} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.name}>{cert.name}</h3>
              <span className={styles.year}>{cert.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
