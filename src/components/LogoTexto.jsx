import * as React from 'react';

export default function LogoTexto({ color }) {
  return (
    <div className="logoText" style={{ color: color }}>
      <p className="logoText_bowling">BOWLING</p>
      <p className="logoText_dePaso">DE PASO</p>
    </div>
  );
}
