import styles from './Hero.module.css';
import heroImage from '../assets/image-omelette.jpeg';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <img
        className={styles.heroImage}
        src={heroImage}
        alt='An omelette with beaten eggs, cheese, vegetables and meats'
      />
    </div>
  );
};

export default Hero;
