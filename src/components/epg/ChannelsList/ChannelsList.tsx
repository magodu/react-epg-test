import React, { useState, useEffect, useCallback, useContext } from 'react';

import Filters from '../Filters/Filters';
import Timeline from '../Timeline/Timeline';
import Sidebar from '../Sidebar/Sidebar';
import Channel from '../Channel/Channel';
import SearchResults from '../SearchResults/SearchResults';
import CurrentTimeLine from '../CurrentTimeLine/CurrentTimeLine';

import { EpgContext } from '../../../store/epg-context';

import { epgData } from '../../../models/appTypes';
import { getCurrentTimeOffset } from '../../../utils';

import classes from './ChannelsList.module.scss';

const ChannelsList: React.FC<{ data: epgData[] }> = ({ data }) => {
    const { searchQuery, setSearchQueryHandler } = useContext(EpgContext);
    const [ searchIsShown, setSearchIsShown ] = useState<boolean>(false);
    const [ filteredData, setFilteredData ] = useState<any[]>([]);
    const offset = 100;

    const setCurrentScrollPositionHandler = () => {
        let elem = document.getElementById('scrollableElem');
        elem!.scrollTo(getCurrentTimeOffset() - offset, 0);
    };

    const filterData = useCallback(() => {
        let result = [];
        result = data.map((channel) => {
            const foundData = channel.schedules.filter((program) => program.title.toLowerCase().includes(searchQuery.toLowerCase()));
            if (foundData) {
                return {
                    channelId: channel.id,
                    channel: channel.title,
                    image: channel.images.logo,
                    results: foundData
                }
            }
            return false;
        }) || [];

        setFilteredData(result);

    }, [searchQuery, data]);
   
    useEffect(() => {
        if (data) {
            setCurrentScrollPositionHandler();
        }
    }, [data]);

    useEffect(() => {
        if (searchQuery) {
            setSearchIsShown(true);
            filterData();
        }
    }, [searchQuery, filterData]);

    const hideModalHandler = () => {
        setSearchQueryHandler('');
        setSearchIsShown(false);
    };

    return (
        <section>
            <div className={classes.epg}>
                <Filters />
                <div data-testid="container" className={classes['epg-container']}>
                    <div className={classes.wrapper}>
                        <div className={classes.box}></div>
                        <div className={classes['current-time-button-wrapper']}>
                            <button type="button" className={classes['current-time-button']} onClick={setCurrentScrollPositionHandler}>
                                Now
                            </button>
                        </div>
                        <div className={classes['scroll-box']} id="scrollableElem">
                            <CurrentTimeLine />
                            <Timeline />
                            <Sidebar data={data} />

                            <div data-testid="content" className={classes.content}>
                                <div className={classes['channel-content']}>
                                    { data && data.map((channel: epgData) => 
                                        <Channel key={channel.id} channelData={channel} />    
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {searchIsShown && <SearchResults data={filteredData} onClose={hideModalHandler} />}
        </section>
    );
};

export default ChannelsList;
