import * as React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import '../styles/layout.css';
import '../styles/animations.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
