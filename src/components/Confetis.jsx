import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';

export default function Confetis({ direction }) {
  const [confetis, setConfetis] = useState([]);
  const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'gold'];

  const getRandomStyles = useCallback(async (val) => {
    let num = 1 + Math.floor(Math.random() * 10);
    let time = 1 + Math.random() * 1.5;
    let iter = 0.5 + Math.random() * 0.5;

    return {
      backgroundColor:
        colors[Math.floor(Math.random().toFixed(2) * colors.length)],
      top: `${20 + Math.floor(Math.random().toFixed(2) * 40)}%`,
      animation: `${time}s ease-out .5s x${num} forwards, balanceo${num} ease-in-out ${iter}s 12 alternate forwards 2s`,
    };
  }, []);
  
  const pushStyles = useCallback(async () => {
    for (let i = 0; i < 10; i++) {
      const style = await getRandomStyles();
      confetis.push(style);
    }
  }, []);

  useEffect(() => {
    pushStyles();
  }, []);

  return (
    <ul className={direction ? 'confetis2' : 'confetis1'}>
      {confetis.map((style, i) => (
        <li key={i} className="confeti" style={style}></li>
      ))}
    </ul>
  );
}
