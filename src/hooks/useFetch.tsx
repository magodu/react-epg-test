import { useState, useRef, useEffect } from 'react';

const useFetch = (url: string ) => {
    const [response, setResponse] = useState<any>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(url).then(async (res) => {
            if (res.status !== 200) {
                setError(true);
                setIsLoading(false);
            }
            const data = await res.json();
            setResponse(data);
            setIsLoading(false);
        });
    }, [setResponse, url]);

    return {
        response: response,
        isLoading: isLoading,
        error: error
    };
};

export default useFetch;
