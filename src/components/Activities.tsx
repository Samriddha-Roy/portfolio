"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Activities.module.css";
import { Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const activitiesData = [
  "Build backend mini-projects to strengthen system design and API development",
  "Practice Data Structures & Algorithms regularly",
  "Explore cloud computing, cybersecurity, and enterprise backend architecture"
];

export default function Activities() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    const items = Array.from(listRef.current.children);

    gsap.fromTo(
      items,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="activities">
      <h2 className={styles.heading}>Activities & Interests</h2>
      <ul ref={listRef} className={styles.list}>
        {activitiesData.map((activity, index) => (
          <li key={index} className={styles.listItem}>
            <Zap className={styles.icon} size={20} />
            <span className={styles.text}>{activity}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
