import * as React from 'react';
import * as styles from '../styles/pages/index.module.css';
import LogoTexto from '../components/logoTexto';
import estrellas from '../assets/images/estrellas.svg';
import video from '../assets/images/video.mp4';
import pin from '../assets/images/boloBlanco.svg';
/* import imagen1 from '../assets/images/imagen1.webp'; */
/* import imagen2 from '../assets/images/imagen2.webp'; */
/* import imagen3 from '../assets/images/maquinita.webp'; */
import useIntersection from '../useIntersection';
import { StaticImage } from 'gatsby-plugin-image';
import bebasNeue from '../assets/fonts/BebasNeue-Regular.woff2';
import arialRounded from '../assets/fonts/Arial-Rounded-MT-Std.woff2';

const IndexPage = () => {
  const [elementRef, isVisible] = useIntersection({
    treshold: 0.1,
  });
  const [elementRef2, isVisible2] = useIntersection({
    treshold: 0.1,
  });
  const [elementRef3, isVisible3] = useIntersection({
    treshold: 0.1,
  });
  const [elementRef4, isVisible4] = useIntersection({
    treshold: 0,
  });
  const [elementRef5, isVisible5] = useIntersection({
    treshold: 0,
  });

  return (
    <>
      <main className={styles.main}>
        <div
          className={styles.banner}
          ref={elementRef4}
          isvisible={isVisible4 ? 'true' : 'false'}
        >
          <img
            className={styles.estrellas}
            src={estrellas}
            alt="estrellas en webp"
            loading="lazy"
            type="img/svg"
          />
          <h1>
            <LogoTexto />
          </h1>
          <img
            className={styles.pin}
            src={pin}
            alt="bolo blanco"
            ref={elementRef5}
            isvisible={isVisible5 ? 'true' : 'false'}
            loading="lazy"
          />
        </div>
      </main>
      <article className={styles.article}>
        <section className={styles.intro}>
          <div className={styles.introText}>
            <p>Sabemos que lo importante es disfrutar de la compañía mutua.</p>
            <p>
              ¡Por eso es el lugar ideal para pasar un rato agradable todos
              juntos!
            </p>
          </div>
          <div className={styles.introTime}>
            <div className={styles.introDays}>
              <p>abierto</p>
              <p>todos los días!</p>
              <p>de 17hs a 2:30hs</p>
            </div>
            <div className={styles.introSlash}></div>
            <div>
              <p>ubicación</p>
              <p>córdoba</p>
              <p>3766</p>
            </div>
          </div>
        </section>
        <section className={styles.sectionFirst}>
          <h2>nos&nbsp;mudamos!</h2>
          <div className={styles.sectionFirstData}>
            <div
              className={styles.sectionFirstImg}
              ref={elementRef}
              isvisible={isVisible ? 'true' : 'false'}
            >
              <video src={video} loop autoPlay muted></video>
            </div>
            <p>
              ¡Tenemos grandes noticias! Nos mudamos a un nuevo lugar{' '}
              espectacular, más amplio y completamente renovado para brindarte
              una experiencia de entretenimiento única. Desde el momento en que
              ingresás, te va a encantar nuestro diseño moderno y elegante.
              Además ahora te ofrecemos más opciones gastronómicas y áreas de
              descanso mejoradas. Vení y descubrí todo lo que preparamos para
              vos en nuestra nueva ubicación.
            </p>
          </div>
        </section>
        <section className={styles.sectionSecond}>
          <h2>qué&nbsp;podemos ofrecerte?</h2>
          <div className={styles.sectionSecondData}>
            <div
              className={styles.sectionSecondImg}
              ref={elementRef2}
              isvisible={isVisible2 ? 'true' : 'false'}
            >
              <StaticImage
                src="../assets/images/imagen1.webp"
                alt="imagen del bowling"
                loading="lazy"
              />
            </div>
            <p>
              ¡Vení a nuestro bowling y pasá un rato inolvidable! Podés festejar
              tu cumpleaños, ganar <b>líneas gratis</b> y disfrutar de diversión
              asegurada. Además, te ofrecemos una variedad de comidas, cervezas
              y cócteles en un ambiente increíble. ¡Te esperamos para vivir
              momentos geniales! Es el plan perfecto <b>para vos</b>. ¡No te lo
              podés perder!
            </p>
          </div>
        </section>
        <section className={styles.sectionThird}>
          <div
            className={styles.sectionThirdImg}
            ref={elementRef3}
            isvisible={isVisible3 ? 'true' : 'false'}
          >
            <StaticImage
              src="../assets/images/maquinita.webp"
              alt="Maquinita de juegos"
              loading="lazy"
            />
          </div>
          <div>
            <h2> diversión!</h2>{' '}
            <p>
              ¡Sumérgete en una experiencia de entretenimiento completa en
              nuestro centro renovado! Aquí encontrarás una emocionante variedad
              de actividades para disfrutar al máximo. Además del fascinante{' '}
              bowling, podés deleitarte con nuestras increíbles{' '}
              <b>maquinitas arcade</b> y nuestra <b>mesa de pool profesional</b>
              . La diversión está garantizada para todos los gustos y edades.
            </p>
          </div>
        </section>
      </article>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="es" />
    <title>Bowling de Paso - Mar del Plata</title>
    <meta
      name="description"
      content="Diviértete en nuestro moderno bowling en Mar del Plata. Bolos, aperitivos y diversión para todas las edades. ¡Únete! Abierto de 17hs a 2:30hs."
    />
    <meta charSet="utf-8" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="es" />
    <meta name="author" content="Lucas Iván Cardozo" />
    <link rel="canonical" href="https://www.bowlingdepaso.com" />
    <link
      rel="preload"
      href={bebasNeue}
      as="font"
      type="font/woff2"
      crossorigin="anonymous"
    ></link>
    <link
      rel="preload"
      href={arialRounded}
      as="font"
      type="font/woff2"
      crossorigin="anonymous"
    ></link>
  </>
);
