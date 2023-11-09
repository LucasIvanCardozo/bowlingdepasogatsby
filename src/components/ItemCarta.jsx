import * as React from 'react';
import * as styles from '../styles/components/itemCarta.module.css';

export default function ItemCarta({ data }) {
  return (
    <div className={styles.container}>
      <h2>{data.name}</h2>
      <ul>
        {data.data.map((data) => (
          <li className={styles.product} key={data.name}>
            <div className={styles.productData}>
              <p className={styles.productName}>‧{data.name}</p>
              <div className={styles.dots}>
                <p>
                  ...........................................................................
                </p>
              </div>
              <p className={styles.productPrice}>
                ${data.price ? data.price : ''}
              </p>
            </div>
            {data.description ? (
              <p className={styles.productDescription}> ({data.description})</p>
            ) : (
              ''
            )}
          </li>
        ))}
        {data.hasOwnProperty('adicional') ? (
          <li className={styles.additional}>
            <h4>adicional</h4>
            <p>{data.adicional}</p>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
