import React, { useState, useEffect, useContext } from 'react';

import { EpgContextObj, InputProps } from '../models/appTypes';

export const EpgContext = React.createContext<EpgContextObj>({
    searchQuery: '',
    setSearchQueryHandler: (query: string) => {},
} as EpgContextObj);


const EpgContextProvider: React.FC<InputProps> = ( props ) => {
    const [ searchQuery, setSearchQuery ] = useState<string>('');


    const setSearchQueryHandler = (query: string) => {
        setSearchQuery(query);
    };

    useEffect(() => {
        setSearchQuery(searchQuery);
    }, [searchQuery]);

    const contextValue: EpgContextObj = {
        searchQuery: searchQuery,
        setSearchQueryHandler: setSearchQueryHandler
    };

    return <EpgContext.Provider value={contextValue}>
        {props.children}
    </EpgContext.Provider>
};

export default EpgContextProvider;

export const useEpgContext = () => useContext(EpgContext);
