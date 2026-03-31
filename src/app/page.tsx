import CustomCursor from "@/components/CustomCursor";
import Canvas3D from "@/components/Canvas3D";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Activities from "@/components/Activities";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Canvas3D />
      <main className={styles.main}>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Activities />
      </main>
    </>
  );
}
