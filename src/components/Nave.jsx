import * as React from 'react';
import { useEffect, useState } from 'react';
import useIntersection from '../useIntersection';
import { Link } from 'gatsby';
import LogoTexto from './logoTexto';

export default function Nav() {
  const [selected, setSelected] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [elementRef, isVisible] = useIntersection({
    tresholfd: 0,
  });
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [width >= 720]);

  useEffect(() => {
    width <= 720 ? setMenuOpen(false) : null;
  }, [selected]);

  return (
    <nav
      className="nav"
      ref={elementRef}
      isvisible={isVisible ? 'true' : 'false'}
    >
      <div
        className="nav_background"
        onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : null)}
        open={menuOpen}
      ></div>
      <div className="nav_logo">
        <LogoTexto color="#eee" />
      </div>
      <button
        className="nav_button"
        aria-label="boton del menú"
        open={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="nav_span"></span>
        <span className="nav_span"></span>
        <span className="nav_span"></span>
      </button>
      <ul className="nav_ul" open={menuOpen}>
        <li
          className={`nav_li${selected == 1 ? ' nav_selected' : ''}`}
          onClick={() => (setSelected(1), setMenuOpen(false))}
        >
          <Link
            className={`nav_link${selected == 1 ? ' nav_link_selected' : ''}`}
            to="/"
          >
            INICIO
          </Link>
        </li>
        {/*<li
          className={`nav_li${selected == 2 ? ' nav_selected' : ''}`}
          onClick={() => (setSelected(2), setMenuOpen(false))}
        >
          <Link
            className={`nav_link${selected == 2 ? ' nav_link_selected' : ''}`}
            to="/precios"
          >
            PRECIOS
          </Link>
        </li>*/}
        <li
          className={`nav_li${selected == 3 ? ' nav_selected' : ''}`}
          onClick={() => (setSelected(3), setMenuOpen(false))}
        >
          <Link
            className={`nav_link${selected == 3 ? ' nav_link_selected' : ''}`}
            to="/menu"
          >
            MENU
          </Link>
        </li>
        <li
          className={`nav_li${selected == 4 ? ' nav_selected' : ''}`}
          onClick={() => (setSelected(4), setMenuOpen(false))}
        >
          <Link
            className={`nav_link${selected == 4 ? ' nav_link_selected' : ''}`}
            to="/logros"
          >
            LOGROS
          </Link>
        </li>
        <li
          className={`nav_li${selected == 6 ? ' nav_selected' : ''}`}
          onClick={() => (setSelected(6), setMenuOpen(false))}
        >
          <Link
            className={`nav_link${selected == 6 ? ' nav_link_selected' : ''}`}
            to="/historia"
          >
            HISTORIA
          </Link>
        </li>

        <li
          className="nav_li"
          onClick={() => (setSelected(5), setMenuOpen(false))}
        >
          <Link className="nav_link" to="#contactos">
            CONTACTOS
          </Link>
        </li>
      </ul>
    </nav>
  );
}
