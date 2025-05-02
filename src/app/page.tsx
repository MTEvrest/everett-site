//import styles from "./page.module.css";
import BackgroundParticles from "./components/BackgroundParticles";
import { useMemo } from 'react';
import styles from "./page.module.css"
import LinkedInImg from "./assets/LinkedIn";
import GitImg from "./assets/Github";
import ResumeImg from "./assets/Resume";

export default function Home() {
  
  const cloudBackground = useMemo(() => {
    return <BackgroundParticles/>
  }, []);

  return (
    <div>
      {cloudBackground}
      <div className={styles.info}>
        <h1 className={styles.name}>Everett White</h1>
        <h2 className={styles.title}>Frontend Software Developer</h2>
        <div className={styles.socials}>
          <div>
            <div className={styles.imgBox}>
              <a
                href="https://www.linkedin.com/in/everett-white/"
                target="_blank"
                rel="noreferrer"
                aria-labelledby="linkedinLabel"
              >
                <LinkedInImg />
              </a>
            </div>
            <p id="linkedinLabel">LinkedIn</p>
          </div>
          <div>
          <div className={styles.imgBox}>
            <a
              href="https://github.com/MTEvrest"
              target="_blank"
              rel="noreferrer"
              aria-labelledby="githubLabel"
            >
              <GitImg />
            </a>
          </div>
          <p id="githubLabel">Github</p>
        </div>
        <div>
        <div className={styles.imgBox}>
          <a
            href="https://drive.google.com/file/d/1zsCiULlLb1b9cXTQVhLFbVyb4sCkF0nB/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            aria-labelledby="resumeLabel"
          >
            <ResumeImg />
          </a>
        </div>
        <p id="resumeLabel">Resume</p>
        </div>
        </div>
      </div>
    </div>
  );
}
