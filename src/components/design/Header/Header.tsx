import React, { useRef, useContext, FormEvent } from 'react';

import classes from './Header.module.scss';

import { EpgContext } from '../../../store/epg-context';

import noriginMediaLogo from '../../../assets/images/norigin-media-logo.png';

const Header = () => {
    const { setSearchQueryHandler } = useContext(EpgContext);
    const searchQueryRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        setSearchQueryHandler(searchQueryRef.current!.value);
    };

    return (
        <header>
            <div className={classes.wrapper}>
                <div className={classes.user}>
                    <i className="bi bi-person-fill" aria-hidden="true" title="User Menu"></i>
                </div>
                <div className={classes.logo}>
                    <img src={noriginMediaLogo} alt="Norigin Media Logo" />
                </div>
                <div className={classes['search']}>
                    <form onSubmit={submitHandler}>
                        <div className={classes['search-box']}>
                            <input type="text" ref={searchQueryRef} placeholder="Type here for search..." className={classes['search-input']}/>
                            <span className={classes['search-btn']} >
                                <i className="bi bi-search" aria-hidden="true" title="Search"></i>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Header;
