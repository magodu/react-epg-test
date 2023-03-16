import { useState, useRef, useEffect } from 'react';

const useFetch = (url: string ) => {
    const [response, setResponse] = useState<any>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        setError(false);
        fetch(url).then(async (res) => {
            try {
                const data = await res.json();
                setResponse(data);
                setIsLoading(false);
            } catch (error) {
                //console.log('An error happened during fetching from', url);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        });
    }, [setResponse, url]);

    return {
        response: response,
        isLoading: isLoading,
        error: error
    };
};

export default useFetch;
