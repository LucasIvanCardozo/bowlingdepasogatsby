import * as React from 'react';
import Footer from './footer';
import Nave from './Nave';
import '../styles/nav.css';
import '../styles/footer.css';
import '../styles/layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Nave />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
