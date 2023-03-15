import React, { useState, useEffect, useCallback } from 'react';

import Epg from '../../components/epg/ChannelsList/ChannelsList';
import Spinner from '../../components/UI/Spinner/Spinner';
import Error from '../../components/UI/Error/Error';

import useFetch from '../../hooks/useFetch';
import { epgData, favoriteChannel } from '../../models/appTypes';

const OnDemand = () => {
    const { response: favorites, isLoading: isLoadingFavs, error: errorFavs } = useFetch('/favorite-user-channels');
    const { response: data, isLoading: isLoadingData, error: errorData } = useFetch('/epg');
    const [ favoriteChannels, setFavoriteChannels ] = useState<epgData[]>([]);

    const filterChannels = useCallback(() => {
        return data.channels.filter((channel: epgData) => {
            return favorites.channels.some((favorite: favoriteChannel) => {
                return favorite.id === channel.id;
            });
        });
    }, [data, favorites]);

    useEffect(() => {
        if (favorites && data) {
           setFavoriteChannels(filterChannels());
        }
    }, [data, favorites, filterChannels]);

    return (
        <React.Fragment>
            {(isLoadingFavs || isLoadingData) && <Spinner /> }
            {!(isLoadingFavs || isLoadingData) && (
                <>  
                    {(errorData || errorFavs) && <Error /> }
                    <Epg data={favoriteChannels}/> 
                </>
            )}
        </React.Fragment>
    );
 
};

export default OnDemand;
