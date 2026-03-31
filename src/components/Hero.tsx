"use client";

import { motion, Variants } from "framer-motion";
import styles from "./Hero.module.css";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className={styles.section}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className={styles.contentWrapper}
      >
        <motion.h1 variants={textVariant} className={styles.title}>
          SAMRIDDHA ROY
        </motion.h1>
        <motion.p variants={textVariant} className={styles.subtitle}>
          BACKEND DEVELOPER & CS STUDENT
        </motion.p>
        <motion.p variants={textVariant} className={styles.description}>
          Backend Developer and Computer Science student with hands-on experience in designing RESTful APIs, scalable backend systems, and database-driven applications. Skilled in Node.js, Express, FastAPI, and MongoDB with strong foundations in Data Structures, System Design, and Machine Learning. Interested in building intelligent backend services, cybersecurity-aware systems, and AI-powered solutions.
        </motion.p>
        
        <motion.div variants={textVariant} className={styles.contactInfo}>
          <span>Kolkata, India</span>
          <span className={styles.divider}>|</span>
          <span>+91 8927505154</span>
          <span className={styles.divider}>|</span>
          <a href="mailto:samriddharoy90@gmail.com" style={{ position: 'relative', zIndex: 10 }}>samriddharoy90@gmail.com</a>
        </motion.div>
        
        <motion.div variants={textVariant} className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a href="mailto:samriddharoy90@gmail.com" className={styles.btnSecondary}>Contact Me</a>
        </motion.div>

        <motion.div variants={textVariant} className={styles.socials}>
          <a href="https://github.com/samriddharoy90" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ position: 'relative', zIndex: 10 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
          </a>
          <a href="https://linkedin.com/in/samriddharoy90" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ position: 'relative', zIndex: 10 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="mailto:samriddharoy90@gmail.com" aria-label="Email" style={{ position: 'relative', zIndex: 10 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
