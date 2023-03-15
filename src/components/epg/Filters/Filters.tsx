import React, { useState, useEffect } from 'react';

import { getFormattedDate } from '../../../utils';

import classes from './Filters.module.scss';

const Filters = () => {
    const [dates, setDates] = useState<string[]>([]);

    const getPastWeekDates = (): string[] => {
        const dates: string[] = [];
        const today = new Date();

        for (let i = 0; i < 7; i++) {
            const dayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i).toISOString();
            dates.push(getFormattedDate(dayDate));
        }

        return dates;
    };

    useEffect(() => {
        setDates(getPastWeekDates());
    }, []);

    return (
        <div className={classes.filters}>
            <div className={classes.date}>
                <select className="form-control">
                    { dates && dates.map((date: string, index: number) => 
                        <option key={index}>{date}</option>
                    )}
                </select>
            </div>
        </div>
    );
};

export default Filters;
