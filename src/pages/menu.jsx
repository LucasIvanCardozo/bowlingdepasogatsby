import * as React from 'react';
import { useState } from 'react';
import * as styles from '../styles/pages/menu.module.css';
import ItemCarta from '../components/ItemCarta';
import Marcas from '../components/Marcas';
import menuData from '../db/menuData.json';
import useIntersection from '../useIntersection';
import bebasNeue from '../assets/fonts/BebasNeue-Regular.woff2';
import arialRounded from '../assets/fonts/Arial-Rounded-MT-Std.woff2';

export default function Menu() {
  const data = menuData.data;
  const [categoria, setCategoria] = useState(0);
  const [pagina, setPagina] = useState({ categoria: 0, subcategoria: 0 });
  const [elementRef, isVisible] = useIntersection({
    treshold: 0,
  });
  const [elementRef5, isVisible5] = useIntersection({
    treshold: 0,
  });

  const handleCategoria = (categoria, data) => {
    if (categoria !== data.id) {
      setCategoria(data.id);
      if (!data.subcategoriasBool)
        setPagina({ categoria: data.id, subcategoria: 0 });
    }
  };

  const handleSubCategoria = (categoria, data) => {
    setPagina({
      categoria: categoria,
      subcategoria: data.id,
    });
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.titulo}>
          <h1 ref={elementRef} isvisible={isVisible ? 'true' : 'false'}>
            MENÚ
          </h1>
          <p>
            En nuestro Bowling ofrecemos una variedad de comidas y bebidas
            deliciosas para una experiencia completa.
          </p>
        </div>
      </main>
      <article className={styles.carta}>
        <div className={styles.cartaNav}>
          <ul>
            {data.map((data) => (
              <li
                className={styles.cartaCategorias}
                key={data.name}
                ref={data.id === 0 ? elementRef5 : null}
                isvisible={isVisible5 && data.id === 0 ? 'true' : 'false'}
                onClick={() => handleCategoria(categoria, data)}
                open={pagina.categoria === data.id}
              >
                <p>{data.name}</p>
              </li>
            ))}
            {data[categoria].subcategoriasBool ? (
              <div className={styles.subcategoriasNav}>
                <ul>
                  {data[categoria].data.map((data) => (
                    <li
                      className={styles.subcategorias}
                      key={data.name}
                      onClick={() => handleSubCategoria(categoria, data)}
                    >
                      <p>{data.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </ul>
        </div>
        <section className={styles.cartaInfo}>
          {data[pagina.categoria].subcategoriasBool
            ? data[pagina.categoria].data[pagina.subcategoria].data.map(
                (data) => <ItemCarta key={data.name} data={data} />
              )
            : data[pagina.categoria].data.map((data) => (
                <ItemCarta key={data.name} data={data} />
              ))}
          <Marcas />
        </section>
      </article>
    </>
  );
}

export const Head = () => (
  <>
    <html lang="es" />
    <title>Bowling de Paso - Menu</title>
    <meta
      name="description"
      content="Explora nuestra deliciosa y variada carta en Bowling de Paso, Mar del Plata. Desde tentadoras comidas hasta refrescantes bebidas e increibles postres, nuestra selección está diseñada para satisfacer todos los gustos. Descubre una amplia gama de opciones cuidadosamente preparadas para acompañar tus partidas de bolos y hacer que tu experiencia sea aún más especial. Ya sea que estés buscando un aperitivo rápido o una comida completa, encontrarás opciones deliciosas que harán que tu visita sea memorable."
    />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1, minimum-scale=1"
    />
    <meta name="language" content="Spanish" />
    <meta name="author" content="Lucas Iván Cardozo" />
    <link rel="icon" href="/favicon.ico" type="image/ico"></link>
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
