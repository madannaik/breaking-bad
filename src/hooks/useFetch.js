import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        setData(null);
        setIsError(false);
        setError(null);

        axios.get(url)
            .then(res => {
                setLoading(false);
                setData(res.data)
            })
            .catch(err => {
                setIsError(true);
                setLoading(false)
                setError('An error occurred. IDK where ..go find yourself cause u wrote the code');
            })
        return () => {

        }
    }, [url])

    return { data, loading, error, isError }
}
export default useFetch;