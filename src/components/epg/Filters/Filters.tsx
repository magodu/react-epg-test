import React, { useState, useEffect, useRef, FormEvent } from 'react';

import { getFormattedDate } from '../../../utils';

import classes from './Filters.module.scss';

const Filters = () => {
    const [dates, setDates] = useState<string[]>([]);
    const dayQueryRef = useRef<HTMLSelectElement>(null);

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

    const changeDayHandler = (event: FormEvent) => {
        event.preventDefault();
        console.log(`Change the day to ${dayQueryRef.current!.value} (Not implemented yet)`);
    };

    return (
        <div className={classes.filters}>
            <div className={classes.date}>
                <form name="dayFilter">
                    <select className="form-control" ref={dayQueryRef} onChange={changeDayHandler}>
                        { dates && dates.map((date: string, index: number) => 
                            <option key={index}>{date}</option>
                        )}
                    </select>
                </form>
            </div>
        </div>
    );
};

export default Filters;
