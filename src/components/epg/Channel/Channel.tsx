import React, { useState } from 'react';

import Program from '../Program/Program';
import ProgramDetail from '../ProgramDetail/ProgramDetail';

import { epgData, programEpg } from '../../../models/appTypes';
import classes from './Channel.module.scss';

const initialDetailData: programEpg = { title: '', id: '', start: '', end: ''};

const Channel: React.FC<{ channelData: epgData}> = ({ channelData }) => {
    const [ detailIsShown, setDetailIsShown ] = useState<boolean>(false);
    const [ detailData, setDetailData ] = useState<programEpg>(initialDetailData);

    const showDetailHandler = (data: programEpg) => {
        setDetailData(data);
        setDetailIsShown(true);
    };
  
    const hideModalHandler = () => {
        setDetailIsShown(false);
    };

    return (
        <React.Fragment>
            <ul className={classes.channel} data-testid="channel">
                { channelData.schedules.map((program: programEpg) => (
                    <Program key={program.id} programData={program} onShowDetail={showDetailHandler} />
                ))}
            </ul>
            {detailIsShown && <ProgramDetail data={detailData} onClose={hideModalHandler} />}
        </React.Fragment>
    );
};

export default Channel;


