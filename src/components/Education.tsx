"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Education.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
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
    <section ref={sectionRef} className={styles.section} id="education">
      <h2 className={styles.heading}>Education</h2>
      <div ref={cardRef} className={styles.card}>
        <div className={styles.header}>
          <h3 className={styles.degree}>Bachelor of Technology in Computer Science</h3>
          <span className={styles.date}>Aug 2023 - Jul 2027</span>
        </div>
        <p className={styles.university}>JIS University, Kolkata</p>
        <div className={styles.cgpaBadge}>CGPA: 8.22</div>
      </div>
    </section>
  );
}
