import Hero from './components/Hero';
import styles from './App.module.css';
import Description from './components/Description';

function App() {
  return (
    <div className={styles.app}>
      <Hero />
      <Description />
    </div>
  );
}

export default App;
