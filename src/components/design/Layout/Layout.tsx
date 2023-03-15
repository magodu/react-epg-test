import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import classes from './Layout.module.scss';

import { InputProps } from '../../../models/appTypes';

const Layout: React.FC<InputProps> = (props) => {
    return (
        <React.Fragment>
            <Header />
            <main className={classes.main}>{props.children}</main>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
