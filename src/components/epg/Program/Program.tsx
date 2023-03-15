import React, { useState, useEffect } from 'react';

import classes from './Program.module.scss';
import { programEpg } from '../../../models/appTypes';
import { calculateProgramWidth, getFormattedTime, millisecondsInMinute } from '../../../utils';

const Program: React.FC<{ programData: programEpg, onShowDetail: (data: programEpg) => void  }> = ({ programData, onShowDetail }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, millisecondsInMinute);
        return () => clearInterval(intervalId);
    }, []);

    const getProgramClasses = (startDate: string, endDate: string) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        if (start <= currentTime && end >= currentTime) {
            return `${classes['program-content']}  ${classes.active}`;
        }
        return classes['program-content'];
    };

    return (
        <li className={classes['program-box']}>
            <div className={getProgramClasses(programData.start, programData.end)} 
                style={{ width: calculateProgramWidth(programData.start, programData.end) }} 
                onClick={() => onShowDetail(programData)}
            >
                <div className={classes['program-flex']}>
                    <div className={classes['program-stack']}>
                        <p className={classes['program-title']}>{programData.title}</p>
                        <span className={classes['program-text']}>{`${getFormattedTime(programData.start)} - ${getFormattedTime(programData.end)}`}</span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Program;
