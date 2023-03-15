import React, { useState, useEffect } from 'react';

import { getCurrentTimeOffset, millisecondsInMinute } from '../../../utils';
import classes from './CurrentTimeLine.module.scss';

const CurrentTimeLine = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const offset = 100;

    const getCurrentTimePosition = () => {
        return `${getCurrentTimeOffset() + offset }px`;
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
            getCurrentTimePosition();
        }, millisecondsInMinute);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={classes['current-time-vertical-line']} style={{ left: getCurrentTimePosition() }}>
            <div className={classes.marker}></div>
        </div>
    );
};

export default CurrentTimeLine;
