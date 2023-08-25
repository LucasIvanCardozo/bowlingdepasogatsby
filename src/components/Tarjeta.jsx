import * as React from 'react';
import * as styles from '../styles/components/tarjeta.module.css';
import { useState } from 'react';
import bolo from '../assets/images/boloBlanco.svg';
import medal1 from '../assets/images/medal1.webp';
import medal2 from '../assets/images/medal2.webp';
import medal3 from '../assets/images/medal3.webp';

export default function Tarjeta({ name, lastName, age, img, record, pos }) {
  const [verInfo, setVerInfo] = useState(false);
  const [waitTransition, setWaitTransition] = useState(false);
  const medals = [medal1, medal2, medal3];

  const handleTrans = () => {
    if (!waitTransition) {
      setWaitTransition(true);
      setVerInfo(!verInfo);
      setTimeout(() => setWaitTransition(false), 600);
    }
  };

  return (
    <li
      className={styles.container}
      verinfo={verInfo ? 'true' : undefined}
      onClick={() => handleTrans()}
    >
      <img
        className={styles.medal}
        src={medals[pos - 1]}
        alt=""
        verinfo={verInfo ? 'true' : undefined}
      />
      <div className={styles.front} verinfo={verInfo ? 'true' : undefined}>
        <img src={img} loading="lazy" alt={`Imagen de ${name}`} />
        <button>
          <p>ver info</p>
        </button>
      </div>
      <div className={styles.back} verinfo={verInfo ? 'true' : undefined}>
        <div className={styles.personData}>
          <p>
            {name} {lastName}
          </p>
          <p className={styles.personAge}>{age} años</p>
        </div>
        <div className={styles.personRecord}>
          <img src={bolo} alt="" loading="lazy" />
          <p>{record}</p>
        </div>
      </div>
    </li>
  );
}
