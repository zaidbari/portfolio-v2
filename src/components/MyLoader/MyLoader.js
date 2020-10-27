import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Logo from '../Logo/Logo';
import styles from './MyLoader.module.scss';

export default function MyLoader({ onClose }) {
  const loader = useRef();
  const outerDiv = useRef();

  useEffect(() => {
    new Typed('#typed', {
      strings: [
        'Lafen Lesley potrfoloi ',
        'Lafen Lesley ^500 portfolio^300. ^500',
      ],
      smartBackspace: true, // Default value
      typeSpeed: 50,
      onComplete: () => {
        loader.current.style.opacity = 0;
        outerDiv.current.style.transform = 'scale(1.5)';
        setTimeout(() => {
          onClose();
        }, 1000);
      },
    });
  }, []);

  return (
    <div className={styles.container} ref={loader}>
      <div ref={outerDiv}>
        <Logo />

        <div>
          <span id='typed'></span>
        </div>
      </div>
    </div>
  );
}
