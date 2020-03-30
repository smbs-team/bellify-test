import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const Product = React.lazy(() => import('./views/Product'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/product',  name: 'Product', component: Product },
];

export default routes;
