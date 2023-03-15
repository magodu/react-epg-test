import React, { useState, useEffect } from 'react';

import { generateHoursArray } from '../../../utils';

import classes from './Timeline.module.scss';

const Timeline = () => {
    const [hoursArray, setHoursArray] = useState<string[]>([]);

    useEffect(() => {
        setHoursArray(generateHoursArray());
    }, []);

    return (
        <div className={classes['timeline-wrapper']}>
            { hoursArray && hoursArray.map((hour: string, index: number) =>
                <div key={index} className={classes['timeline-box']}>
                    <span className={classes['timeline-time']}>{ hour }</span>
                    <div className={classes['timeline-dividers']}>
                        <div className={classes['timeline-divider']}></div>
                        <div className={classes['timeline-divider']}></div>
                        <div className={classes['timeline-divider']}></div>
                        <div className={classes['timeline-divider']}></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Timeline;
