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
      content="Explora nuestra deliciosa carta en Bowling de Paso, Mar del Plata. Comidas, bebidas y postres para hacer tu experiencia memorable. ¡Ven y disfruta!
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
