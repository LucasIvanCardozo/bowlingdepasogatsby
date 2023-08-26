import * as React from 'react';
import * as styles from '../styles/pages/index.module.css';
import LogoTexto from '../components/logoTexto';
import estrellas from '../assets/images/estrellas.svg';
import pin from '../assets/images/boloBlanco.svg';
import imagen1 from '../assets/images/imagen1.webp';
import imagen2 from '../assets/images/imagen2.webp';
import imagen3 from '../assets/images/maquinita.webp';
import useIntersection from '../useIntersection';

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
          <LogoTexto />
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
              <img src={imagen1} alt="imagen del bowling" loading="lazy" />
            </div>
            <p>
              ¡Tenemos <b>grandes noticias</b>! Nos mudamos a un nuevo lugar{' '}
              <b>espectacular</b>, más amplio y completamente renovado para
              brindarte una experiencia de entretenimiento <b>única</b>. Desde
              el momento en que ingresás, te va a encantar nuestro diseño{' '}
              <b>moderno</b> y <b>elegante</b>. Además ahora te ofrecemos más
              opciones gastronómicas y áreas de descanso mejoradas. Vení y
              descubrí todo lo que preparamos para vos en nuestra nueva
              ubicación.
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
              <img src={imagen2} alt="imagen del bowling" loading="lazy" />
            </div>
            <p>
              ¡Vení a nuestro <b>bowling</b> y pasá un rato <b>inolvidable</b>!
              Podés festejar tu cumpleaños, ganar <b>líneas gratis</b> y
              disfrutar de diversión asegurada. Además, te ofrecemos una
              variedad de <b>comidas</b>, <b>cervezas</b> y <b>cócteles</b> en
              un ambiente <b>increíble</b>. ¡Te esperamos para vivir momentos{' '}
              <b>geniales</b>! Es el plan perfecto <b>para vos</b>. ¡No te lo
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
            <img src={imagen3} alt="imagen del bowling" loading="lazy" />
          </div>
          <div>
            <h2> diversión!</h2>{' '}
            <p>
              ¡Sumérgete en una experiencia de entretenimiento completa en
              nuestro centro renovado! Aquí encontrarás una emocionante variedad
              de actividades para disfrutar al máximo. Además del fascinante{' '}
              <b>bowling</b>, podés deleitarte con nuestras increíbles{' '}
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
    <title>Bowling de Paso - Inicio</title>
    <meta
      name="description"
      content="Bienvenidos a la pagina principal de 'Bowling de Paso'!"
    />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1, minimum-scale=1"
    />
  </>
);
