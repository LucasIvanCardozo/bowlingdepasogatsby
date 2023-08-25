import * as React from 'react';
import * as styles from '../styles/components/logoTexto.module.css';

export default function LogoTexto({ color }) {
  return (
    <div className={styles.container} style={{ color: color }}>
      <p className={styles.title}>BOWLING</p>
      <p className={styles.subTitle}>DE PASO</p>
    </div>
  );
}
