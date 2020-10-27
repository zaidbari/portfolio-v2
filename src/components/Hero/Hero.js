import Logo from '../Logo/Logo';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div>
        <span>Hello</span>
        <span>World!</span>
      </div>
      <div>
        <Logo />
        <span>Lafen Lesley portfolio.</span>
      </div>
    </div>
  );
}
