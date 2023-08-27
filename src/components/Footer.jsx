import * as React from 'react';
import * as styles from '../styles/components/footer.module.css';
import whatsapp from '../assets/images/whatsappLogo.webp';
import instagram from '../assets/images/instagramLogo.webp';
import facebook from '../assets/images/facebookLogo.webp';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.socialText}>
        <p>
          No dudes en escribirnos, ¡resolveremos{' '}
          <b>cualquier consulta que tengas!</b>
        </p>
        <p>
          Celebra tu cumpleaños o reserva tus líneas <b>a partir de las 15hs</b>
        </p>
        <p>
          <b>Solo por Whatsapp:</b>{' '}
          <a
            href="https://api.whatsapp.com/send?phone=542235368630&text=Hola!%20Quer%C3%ADa%20hacer%20una%20reserva%20para%20jugar%20al%20bowling!%F0%9F%8E%B3%F0%9F%8E%B3"
            target="_blank"
            rel="noreferrer"
          >
            +54 223 536-8630
          </a>
        </p>
      </div>
      <ul className={styles.ul} id="contactos">
        <li className={styles.li}>
          <a
            href="https://www.instagram.com/elbowlingdepaso/"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.img} src={instagram} alt="" loading="lazy" />
          </a>
        </li>
        <li className={styles.li}>
          <a
            href="https://www.facebook.com/elbowlingdepaso2442"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.img} src={facebook} alt="" loading="lazy" />
          </a>
        </li>
        <li className={styles.li}>
          <a
            href="https://api.whatsapp.com/send?phone=542235368630&text=Hola!%20Quer%C3%ADa%20hacer%20una%20reserva%20para%20jugar%20al%20bowling!%F0%9F%8E%B3%F0%9F%8E%B3"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.img} src={whatsapp} alt="" loading="lazy" />
          </a>
        </li>
      </ul>
      <hr style={{ width: '80vw' }} />
      <div className={styles.terms}>
        <p>©Todos los derechos reservados</p>
        <p>
          Creado por{' '}
          <b>
            <a
              href="https://www.linkedin.com/in/lucas-ivan-cardozo/"
              target="_blank"
              rel="noreferrer"
            >
              Lucas Cardozo
            </a>
          </b>{' '}
          y diseñado por{' '}
          <b>
            <a
              href="https://www.instagram.com/felo_cardozo/"
              target="_blank"
              rel="noreferrer"
            >
              Felipe Cardozo
            </a>
          </b>
        </p>
      </div>
    </div>
  );
}
