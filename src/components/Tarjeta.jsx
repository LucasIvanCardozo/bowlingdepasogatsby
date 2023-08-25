import * as React from 'react';
import { useState } from 'react';
import bolo from '../assets/images/boloBlanco.svg';
import medal1 from '../assets/images/medal1.webp';
import medal2 from '../assets/images/medal2.webp';
import medal3 from '../assets/images/medal3.webp';

export default function Tarjeta({ name, lastName, age, img, record, pos }) {
  const [verInfo, setVerInfo] = useState(false);
  const [waitTransition, setWaitTransition] = useState(false);

  const medals = [medal1, medal2, medal3];

  const handleTrans = () => {
    if (!waitTransition) {
      setWaitTransition(true);
      setVerInfo(!verInfo);
      setTimeout(() => setWaitTransition(false), 600);
    }
  };
  return (
    <li
      className="section_betters_card"
      verinfo={verInfo ? 'true' : undefined}
      onClick={() => handleTrans()}
    >
      <img
        className="section_betters_medal"
        src={medals[pos - 1]}
        alt=""
        verinfo={verInfo ? 'true' : undefined}
      />
      <div
        className="section_betters_front"
        verinfo={verInfo ? 'true' : undefined}
      >
        <img
          className="section_betters_img"
          src={img}
          loading="lazy"
          alt={`Imagen de ${name}`}
        />
        <button className="section_betters_info">
          <p className="section_betters_info_p">ver info</p>
        </button>
      </div>
      <div
        className="section_betters_back"
        verinfo={verInfo ? 'true' : undefined}
      >
        <div className="section_betters_data">
          <p className="section_betters_name">
            {name} {lastName}
          </p>
          <p className="section_betters_age">{age} años</p>
        </div>
        <div className="section_betters_record">
          <img
            className="section_betters_pin"
            src={bolo}
            alt=""
            loading="lazy"
          />
          <p className="section_betters_record_p">{record}</p>
        </div>
      </div>
    </li>
  );
}
