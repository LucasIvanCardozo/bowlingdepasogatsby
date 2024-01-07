import * as React from 'react';
import { useEffect, useState } from 'react';
import * as styles from '../styles/components/confetis.module.css';

export default function Confetis({ direction }) {
  const [confetis, setConfetis] = useState([]);

  useEffect(() => {
    const generateConfetis = () => {
      const newConfetis = [];
      const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'gold'];
      for (let i = 0; i < 10; i++) {
        let num = 1 + Math.floor(Math.random() * 10);
        let time = 1 + Math.random() * 1.5;
        let iter = 0.5 + Math.random() * 0.5;
        const style = {
          backgroundColor:
            colors[Math.floor(Math.random().toFixed(2) * colors.length)],
          top: `${20 + Math.floor(Math.random().toFixed(2) * 40)}%`,
          animation: `${time}s ease-out .5s x${num} forwards, balanceo${num} ease-in-out ${iter}s 12 alternate forwards 2s`,
        };
        newConfetis.push(style);
      }
      setConfetis(newConfetis);
    };

    generateConfetis();
  }, []);

  return (
    <ul className={direction ? styles.confetisRight : styles.confetisLeft}>
      {confetis.map((style, i) => (
        <li key={i} className={styles.confeti} style={style}></li>
      ))}
    </ul>
  );
}
