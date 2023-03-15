import React from 'react';

import ChannelsList from '../../components/epg/ChannelsList/ChannelsList';
import Spinner from '../../components/UI/Spinner/Spinner';
import Error from '../../components/UI/Error/Error';

import useFetch from '../../hooks/useFetch';

const Guide = () => {
    const { response: data, isLoading, error } = useFetch('/epg');

    return (
        <React.Fragment>
            {isLoading && <Spinner /> }
            {!isLoading && (
                <>
                    {error && <Error /> }
                    <ChannelsList data={data.channels}/> 
                </>
            )}
        </React.Fragment>
    );
};

export default Guide;
