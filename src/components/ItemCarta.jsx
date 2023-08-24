import * as React from 'react';

export default function ItemCarta({ data }) {
  return (
    <div className="itemCarta">
      <h2 className="itemCarta_titulo">{data.name}</h2>
      <ul className="itemCarta_ul">
        {data.data.map((data) => (
          <li className="itemCarta_li" key={data.name}>
            <div className="itemCarta_li_data">
              <p className="itemCarta_li_nombre">‧{data.name}</p>
              <div className="itemCarta_li_puntosContenedor">
                <p className="itemCarta_li_puntos">
                  ...........................................................................
                </p>
              </div>
              <p className="itemCarta_li_precio">
                ${data.price ? data.price : 'NULL'}
              </p>
            </div>
            {data.description ? (
              <p className="itemCarta_li_descripcion"> ({data.description})</p>
            ) : (
              ''
            )}
          </li>
        ))}
        {data.hasOwnProperty('adicional') ? (
          <li className="itemCarta_adicional">
            <h4 className="itemCarta_adicional_titulo">adicional</h4>
            <p className="itemCarta_adicional_p">{data.adicional}</p>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
