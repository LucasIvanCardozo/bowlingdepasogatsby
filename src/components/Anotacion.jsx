import * as React from 'react';

export default function Anotacion({ der, izq, sum, width, special }) {
  return width > 1024 || !width ? (
    special ? (
      <div className="special">
        <div className="special_sup">
          <div className="special_box"></div>
          <div className="special_box">
            <div className="special_text">
              <p>demostrá</p>
              <p>destreza</p>
            </div>
          </div>
          <div className="special_box">
            <div className="special_text">
              <p>completá</p>
              <p>misiones</p>
            </div>
          </div>
        </div>
        <div className="special_inf">
          <div className="special_inf_text">
            <p>premios y diversión</p>
          </div>
        </div>
      </div>
    ) : (
      <div className="anotacion">
        <div className="anotacion_sup">
          <div className="anotacion_box"></div>
          <div className="anotacion_box">
            <p className="anotacion_text">{der}</p>
          </div>
          <div className="anotacion_box">
            <p className="anotacion_text">{izq}</p>
          </div>
        </div>
        <div className="anotacion_inf">
          <p className="anotacion_text">{sum}</p>
        </div>
      </div>
    )
  ) : null;
}
