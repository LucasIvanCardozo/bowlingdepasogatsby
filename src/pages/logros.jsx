import * as React from 'react';
import { useEffect, useState } from 'react';
import * as styles from '../styles/pages/logros.module.css';
import people from '../db/dbRecords.json';
import useIntersection from '../useIntersection';
import nube from '../assets/images/nube.webp';
import wind from '../assets/images/viento.svg';
import ball from '../assets/images/elipse.svg';
import text100 from '../assets/images/100PalosTexto.svg';
import palos100 from '../assets/images/100Palos.svg';
import vaso100Palos from '../assets/images/vaso100Palos.webp';
import flecha from '../assets/images/flecha.svg';
import Confetis from '../components/Confetis';
import Anotacion from '../components/anotacion';
import Tarjeta from '../components/Tarjeta';
import TarjetaAlbum from '../components/tarjetaAlbum';
import bebasNeue from '../assets/fonts/BebasNeue-Regular.woff2';
import arialRounded from '../assets/fonts/Arial-Rounded-MT-Std.woff2';

export default function Logros() {
  const [width, setWidth] = useState(0);
  const [winners, setWinners] = useState([]);
  const [totalPeople, setTotalPeople] = useState([]);
  const [scoreboard, setScoreboard] = useState([]);
  const [elementRef, isVisible] = useIntersection({
    treshold: 0,
  });
  const [elementRef2, isVisible2] = useIntersection({
    treshold: 0,
  });

  useEffect(() => {
    const lastMonth = people
      // esto se quita para evitar que filtre los datos en los del ultimo mes
      /*.filter((person) => {
        const dateParse = Date.parse(person.date);
        return dateNow - dateParse < 2592000000 && dateNow - dateParse > 0;
      })*/
      .sort((a, b) => (a.record > b.record ? -1 : 1))
      .reduce((acc, item) => {
        const repeated = acc.filter(
          (person) =>
            person.name === item.name && person.lastName === item.lastName
        );
        if (repeated.length === 0) {
          acc.push(item);
        }
        return acc;
      }, []);

    const winnersAux = lastMonth.slice(0, 3);
    const totalPeopleAux = lastMonth.reduce((acc, item) => {
      if (!winnersAux.includes(item)) {
        acc.push(item);
      }
      return acc;
    }, []);
    setWinners(winnersAux);
    setTotalPeople(totalPeopleAux);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const scoreboardAux = [];
    for (let i = 0; i < 10; i++) {
      if (i === 0) {
        const randomDer = Math.floor(Math.random() * 8);
        const randomIzq = Math.floor(Math.random() * 9 - randomDer);
        const suma = randomDer + randomIzq;
        scoreboardAux.push({ der: randomDer, izq: randomIzq, sum: suma });
      } else {
        const randomDer = Math.floor(Math.random() * 8);
        const randomIzq = Math.floor(Math.random() * (10 - randomDer));
        const sumaTotal = randomIzq + randomDer + scoreboardAux[i - 1].sum;
        scoreboardAux.push({ der: randomDer, izq: randomIzq, sum: sumaTotal });
      }
    }
    setScoreboard(scoreboardAux);
  }, []);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.titulo}>
          <div>
            <Confetis />
            <h1 ref={elementRef} isvisible={isVisible ? 'true' : 'false'}>
              LOGROS
            </h1>
            <Confetis direction={true} />
          </div>
          <p>Un buen jugador</p>
          <p>merece ser recompenzado</p>
        </div>
      </main>
      <article className={styles.article}>
        <div className={styles.boxes}>
          <div className={styles.boxesSide}>
            <Anotacion
              der={scoreboard[0] ? scoreboard[0].der : null}
              izq={scoreboard[0] ? scoreboard[0].izq : null}
              sum={scoreboard[0] ? scoreboard[0].sum : null}
              width={width}
            />
            <Anotacion
              der={scoreboard[1] ? scoreboard[1].der : null}
              izq={scoreboard[1] ? scoreboard[1].izq : null}
              sum={scoreboard[1] ? scoreboard[1].sum : null}
              width={width}
            />
            <Anotacion
              der={scoreboard[2] ? scoreboard[2].der : null}
              izq={scoreboard[2] ? scoreboard[2].izq : null}
              sum={scoreboard[2] ? scoreboard[2].sum : null}
              width={width}
            />
            <Anotacion
              der={scoreboard[3] ? scoreboard[3].der : null}
              izq={scoreboard[3] ? scoreboard[3].izq : null}
              sum={scoreboard[3] ? scoreboard[3].sum : null}
            />
            <Anotacion
              der={scoreboard[4] ? scoreboard[4].der : null}
              izq={scoreboard[4] ? scoreboard[4].izq : null}
              sum={scoreboard[4] ? scoreboard[4].sum : null}
            />
          </div>
          <Anotacion special={true} />
          <div className={styles.boxesSide}>
            <Anotacion
              der={scoreboard[5] ? scoreboard[5].der : null}
              izq={scoreboard[5] ? scoreboard[5].izq : null}
              sum={scoreboard[5] ? scoreboard[5].sum : null}
            />
            <Anotacion
              der={scoreboard[6] ? scoreboard[6].der : null}
              izq={scoreboard[6] ? scoreboard[6].izq : null}
              sum={scoreboard[6] ? scoreboard[6].sum : null}
            />
            <Anotacion
              der={scoreboard[7] ? scoreboard[7].der : null}
              izq={scoreboard[7] ? scoreboard[7].izq : null}
              sum={scoreboard[7] ? scoreboard[7].sum : null}
              width={width}
            />
            <Anotacion
              der={scoreboard[8] ? scoreboard[8].der : null}
              izq={scoreboard[8] ? scoreboard[8].izq : null}
              sum={scoreboard[8] ? scoreboard[8].sum : null}
              width={width}
            />
            <Anotacion
              der={scoreboard[9] ? scoreboard[9].der : null}
              izq={scoreboard[9] ? scoreboard[9].izq : null}
              sum={scoreboard[9] ? scoreboard[9].sum : null}
              width={width}
            />
          </div>
        </div>
        <section className={styles.pin100}>
          <img
            className={styles.pin100Arrow}
            src={flecha}
            alt="Flecha curva"
            loading="lazy"
          />
          <div>
            <div className={styles.pin100Animation}>
              <img
                className={styles.pin100Wind}
                src={wind}
                alt="Viento"
                ref={elementRef2}
                isvisible={isVisible2 ? 'true' : 'false'}
                loading="lazy"
              />
              <div className={styles.pin100Ball}>
                <img
                  src={ball}
                  alt="Pelota"
                  isvisible={isVisible2 ? 'true' : 'false'}
                  loading="lazy"
                />
                <img
                  src={text100}
                  alt="Texto en SVG ('100 bolos')"
                  isvisible={isVisible2 ? 'true' : 'false'}
                  loading="lazy"
                />
              </div>
              <img
                className={styles.pin100Pins}
                src={palos100}
                alt="Bolos"
                loading="lazy"
              />
            </div>
            <img
              className={styles.pin100Glass}
              src={vaso100Palos}
              alt="Vaso de regalo"
              loading="lazy"
            />
          </div>
        </section>
        {/*  <section className={styles.pin130}>
          <img
            className={styles.section_130Palos_palos}
            src={palos130}
            alt=""
          />
          <div className={styles.section_130Palos_ball}>
            <img
              className={styles.section_130Palos_textImg}
              src={text130}
              alt=""
            />
            <img
              className={styles.section_130Palos_ballImg}
              src={ball}
              alt=""
            />
          </div>
          <img className={styles.section_130Palos_wind} src={wind} alt="" />
          <div className={styles.comingsoon}>
            <p className={styles.comingsoon_text}>
              <b>PROXIMAMENTE</b>
            </p>
          </div>
        </section> */}
        <article className={styles.records}>
          <section className={styles.winners}>
            <div className={styles.winnersImg}>
              <img src={nube} alt="Nube" loading="lazy" />
              <h2>
                los cracks de <br />
                {Intl.DateTimeFormat('es-ES', { month: 'long' }).format(
                  new Date() - 2592000000
                )}
              </h2>
            </div>
            <ul>
              {winners.map(({ name, lastName, age, record }, index) => (
                <Tarjeta
                  key={name}
                  name={name}
                  lastName={lastName}
                  age={age}
                  img={`/static/records/${name}${lastName}.webp`}
                  record={record}
                  pos={index + 1}
                />
              ))}
            </ul>
          </section>
          <section className={styles.album}>
            <h2>grandes jugadores del mes</h2>
            <ul>
              {totalPeople.map(({ name, lastName, age, record }) => (
                <TarjetaAlbum
                  key={name}
                  name={name}
                  lastName={lastName}
                  age={age}
                  img={`/static/records/${name}${lastName}.webp`}
                  record={record}
                />
              ))}
            </ul>
          </section>
        </article>
      </article>
    </>
  );
}

export const Head = () => (
  <>
    <html lang="es" />
    <title>Bowling de Paso - Premios</title>
    <meta
      name="description"
      content="Explora recompensas y logros en Bowling de Paso, Mar del Plata. Celebra éxitos con premios y únete a la comunidad ganadora. ¡Inspírate para la grandeza!
"
    />

    <meta charSet="utf-8" />
    <meta name="language" content="es" />
    <meta name="author" content="Lucas Iván Cardozo" />
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
