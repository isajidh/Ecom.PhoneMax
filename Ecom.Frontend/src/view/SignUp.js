import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ApplicationPaths } from './constants';

export class SignUp extends Component {
    static displayName = SignUp.name;

    render() {
        return (
            <div>
                <p>SignUp</p>
                <ul>
                    <li>Manage the <Link to={ApplicationPaths.CartPath}>cart</Link></li>
                </ul>
            </div>
        );
    }
}
