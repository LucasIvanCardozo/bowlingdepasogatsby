import * as React from 'react';
import * as styles from '../styles/pages/404.module.css';

const NotFoundPage = () => {
  return (
    <>
      <main className={styles.main}>
        <div>
          <h1 className={styles.titulo}>Error 404</h1>
          <p>La página que estas buscando no existe :c</p>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
