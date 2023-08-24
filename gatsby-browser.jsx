import React from 'react';
import Layout from './src/components/layout';

// Logs when the client route changes
export function onRouteUpdate({ location, prevLocation }) {
  console.log('new pathname', location.pathname);
  console.log('old pathname', prevLocation ? prevLocation.pathname : null);
}

// Wraps every page in a component
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
