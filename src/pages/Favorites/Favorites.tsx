import React from 'react';

import Epg from '../../components/epg/ChannelsList/ChannelsList';
import Spinner from '../../components/UI/Spinner/Spinner';
import Error from '../../components/UI/Error/Error';

import useFetch from '../../hooks/useFetch';
import { epgData, favoriteChannel } from '../../models/appTypes';

const OnDemand = () => {
    const { response: favorites, isLoading: isLoadingFavs, error: errorFavs } = useFetch('/favorite-user-channels');
    const { response: data, isLoading: isLoadingData, error: errorData } = useFetch('/epg');
    
    let filteredChannels: epgData[] = [];

    if (favorites && data) {
        filteredChannels = data.channels.filter((channel: epgData) => {
            return favorites.channels.some((favorite: favoriteChannel) => {
                return favorite.id === channel.id;
            })
        });
    }

    return (
        <React.Fragment>
            {(isLoadingFavs || isLoadingData) && <Spinner /> }
            {!(isLoadingFavs || isLoadingData) && (
                <>  
                    {(errorData || errorFavs) && <Error /> }
                    <Epg data={filteredChannels}/> 
                </>
            )}
        </React.Fragment>
    );
 
};

export default OnDemand;
