import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const AppComponent = ({ children }) => (
    <div>
        <header className="site-header">
            <h1 className="site-header-logo"><Link to="/">DJ Requests</Link></h1>
            <nav className="site-header-navigation">
                <ul>
                    <li>
                        <Link to="/event">Create</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
        {children}
    </div>
);

AppComponent.propTypes = {
    children: PropTypes.element.isRequired,
};

export default AppComponent;
