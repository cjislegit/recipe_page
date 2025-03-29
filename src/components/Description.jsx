import styles from './Description.module.css';

const Description = () => {
  return (
    <section className={styles.descriptionContainer}>
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetable, or meats.
      </p>
    </section>
  );
};

export default Description;
