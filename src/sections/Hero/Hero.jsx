import styles from './HeroStyles.module.css';
import heroImg from '../../assets/aritra.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume.pdf';
import { useTheme } from '../../common/Themecontext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  console.log('Current theme:', theme);
  console.log('Twitter icon:', twitterIcon);
  console.log('GitHub icon:', githubIcon);
  console.log('LinkedIn icon:', linkedinIcon);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Aritra <br /> Ray
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com/AritraSohan" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://github.com/rayAritra" target="_blank">
            <img src={githubIcon} alt="Github icon" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://www.linkedin.com/in/aritra-ray-236681293/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" style={{ width: '30px', height: '30px' }} />
          </a>
        </span>
        <p className={styles.description}>
          Designing with precision, developing with passion.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
