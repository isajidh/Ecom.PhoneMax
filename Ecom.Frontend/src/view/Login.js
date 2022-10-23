import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ApplicationPaths } from './constants';

export class Login extends Component {
  static displayName = Login.name;

  render() {
    return (
      <div>
        <p>LOGIN</p>
        <ul>
          <li>Manage the <Link to={ApplicationPaths.CatalogPath}>Catalog</Link></li>
        </ul>
      </div>
    );
  }
}
