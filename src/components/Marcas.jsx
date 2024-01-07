import * as React from 'react';
import * as styles from '../styles/components/marcas.module.css';
import quilmes from '../assets/images/quilmesLogo.webp';
import patagonia from '../assets/images/patagoniaLogo.webp';
import stella from '../assets/images/stellaLogo.webp';
import coca from '../assets/images/cocaLogo.webp';

export default function Marcas() {
  return (
    <aside className={styles.container}>
      <ul>
        <li>
          <img src={quilmes} alt="Logo de la marca Quilmes" loading="lazy" />
        </li>
        <li>
          <img src={patagonia} alt="" loading="lazy" />
        </li>
        <li>
          <img src={stella} alt="Logo de la marca Stella" loading="lazy" />
        </li>
        <li>
          <img src={coca} alt="Logo de la marca Coca-Cola" loading="lazy" />
        </li>
      </ul>
    </aside>
  );
}
