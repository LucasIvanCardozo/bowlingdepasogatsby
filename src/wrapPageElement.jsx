import React from 'react';
import Layout from './components/Layout';

const customLayout = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export default customLayout;
