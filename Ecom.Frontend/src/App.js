import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { About } from './components/About';
import { Catalog } from './components/Catalog';
import { Cart } from './components/Cart';
import { ApplicationPaths } from './components/Constants';

import './App.css'

export default class App extends Component
{
  static displayName = App.name;

  render()
  {
    return (
      <Layout>
        <Route exact path='/' component={Catalog} />
        <Route path={ApplicationPaths.CatalogPath} component={Catalog} />
        <Route path={ApplicationPaths.CartPath} component={Cart} />
        <Route path={ApplicationPaths.AboutPath} component={About} />
      </Layout>
    );
  }
}
