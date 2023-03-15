import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Footer.module.scss';

const Footer = () => {

    return (
        <footer>
            <div className={classes.wrapper}>
                <nav>
                    <ul className={classes['main-nav']}>
                        <li>
                            <NavLink to='/home' className={navData => navData.isActive ? classes.active : '' }>
                                <i className="bi bi-house-door-fill" aria-hidden="true" title="Home"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/on-demand' className={navData => navData.isActive ? classes.active : '' }>
                                <i className="bi bi-play-btn" aria-hidden="true" title="On demand"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/guide' className={navData => navData.isActive ? classes.active : '' }>
                                <i className="bi bi-list-task" aria-hidden="true" title="Guide"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/watch-again' className={navData => navData.isActive ? classes.active : '' }>
                                <i className="bi bi-arrow-clockwise" aria-hidden="true" title="Watch again"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/favorites' className={navData => navData.isActive ? classes.active : '' }>
                                <i className="bi bi-person-vcard" aria-hidden="true" title="Favorites"></i>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
