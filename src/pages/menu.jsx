import * as React from 'react';
import { useState } from 'react';
import ItemCarta from '../components/itemCarta';
import Marcas from '../components/marcas';
import '../styles/menu.css';
import '../styles/itemCarta.css';
import '../styles/marcas.css';
import useIntersection from '../useIntersection';
import menuData from '../db/menuData.json';

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
      <main className="main_menu">
        <div className="titulo">
          <h1
            className="titulo_h"
            ref={elementRef}
            isvisible={isVisible ? 'true' : 'false'}
          >
            MENÚ
          </h1>
          <p className="titulo_descripcion">
            En nuestro Bowling ofrecemos una variedad de comidas y bebidas
            deliciosas para una experiencia completa.
          </p>
        </div>
      </main>
      <article className="carta">
        <div className="carta_categorias">
          <ul className="carta_categoriasUl">
            {data.map((data) => (
              <li
                className="carta_categoriasLi"
                key={data.name}
                ref={data.id === 0 ? elementRef5 : null}
                isvisible={isVisible5 && data.id === 0 ? 'true' : 'false'}
                onClick={() => handleCategoria(categoria, data)}
                open={pagina.categoria === data.id}
              >
                <p className="carta_categoriasP">{data.name}</p>
              </li>
            ))}
            {data[categoria].subcategoriasBool ? (
              <div className="carta_subcategorias">
                <ul className="carta_subcategoriasUl">
                  {data[categoria].data.map((data) => (
                    <li
                      className="carta_subcategoriasLi"
                      key={data.name}
                      onClick={() => handleSubCategoria(categoria, data)}
                    >
                      <p className="carta_subcategoriasP">{data.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </ul>
        </div>
        <section className="carta_info">
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
    <title>Bowling de Paso - Menu</title>
    <meta name="description" content="Carta de comidas, busca tu favorita!" />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1, minimum-scale=1"
    />
  </>
);
