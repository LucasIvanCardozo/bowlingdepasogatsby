import * as React from 'react';
import * as styles from '../styles/components/navigation.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import LogoTexto from './logoTexto';
import useIntersection from '../useIntersection';

export default function Navigation() {
  const [width, setWidth] = useState(0);
  const [selected, setSelected] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [waitTransition, setWaitTransition] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState('0');
  const [elementRef, isVisible] = useIntersection({
    tresholfd: 0,
  });

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
    if (width >= 720) setMenuOpen(false);
  }, [width]);

  useEffect(() => {
    if (width <= 720) setMenuOpen(false);
  }, [selected]);

  const handleNav = (page) => {
    setSelected(page);
    setMenuOpen(false);
  };

  const handleMenu = () => {
    if (menuOpen) {
      handleButton();
    }
  };
  //manejador del boton de hamburguesa
  const handleButton = () => {
    if (!waitTransition) {
      setWaitTransition(true);
      if (menuOpen) {
        setTimeout(() => {
          setMenuDisplay('0');
        }, 300);
      } else {
        setMenuDisplay('auto');
      }
      setMenuOpen(!menuOpen);
      setTimeout(() => setWaitTransition(false), 300);
    }
  };
  return (
    <nav
      className={styles.container}
      ref={elementRef}
      isvisible={isVisible ? 'true' : 'false'}
    >
      <div
        className={styles.background}
        onClick={() => handleMenu()}
        open={menuOpen}
      ></div>
      <div className={styles.logo}>
        <LogoTexto color="#eee" />
      </div>
      <button
        className={styles.button}
        aria-label="boton del menú"
        open={menuOpen}
        onClick={() => handleButton()}
      >
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
      </button>
      <ul
        {...(width <= 720
          ? menuOpen
            ? {}
            : { style: { width: menuDisplay } }
          : {})}
        open={menuOpen}
      >
        <li
          className={selected === 1 ? styles.selected : ''}
          onClick={() => handleNav(1)}
        >
          <Link className={styles.link} to="/">
            INICIO
          </Link>
        </li>
        <li
          className={selected === 3 ? styles.selected : ''}
          onClick={() => handleNav(3)}
        >
          <Link className={styles.link} to="/menu">
            MENU
          </Link>
        </li>
        <li
          className={selected === 4 ? styles.selected : ''}
          onClick={() => handleNav(4)}
        >
          <Link className={styles.link} to="/logros">
            LOGROS
          </Link>
        </li>
        <li
          className={selected === 6 ? styles.selected : ''}
          onClick={() => handleNav(6)}
        >
          <Link className={styles.link} to="/historia">
            HISTORIA
          </Link>
        </li>
        <li onClick={() => handleNav(5)}>
          <Link className={styles.link} to="#contactos">
            CONTACTOS
          </Link>
        </li>
      </ul>
    </nav>
  );
}
