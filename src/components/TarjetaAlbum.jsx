import * as React from 'react';
import * as styles from '../styles/components/tarjetaAlbum.module.css';
import bolo from '../assets/images/boloBlanco.svg';

export default function TarjetaAlbum({ name, lastName, age, img, record }) {
  return (
    <li className={styles.container}>
      <img src={img} alt="" loading="lazy" />
      <div className={styles.personData}>
        <p>
          {name} {lastName}
        </p>
        <div className={styles.underLine}>
          <p>{age} años</p>
          <div className={styles.record}>
            <p>{record}</p>
            <div className={styles.pin}>
              <img src={bolo} alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
