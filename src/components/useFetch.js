import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
// The cleanup function using the AbortController is intended to abort 
// the fetch request if the component is unmounted or if the dependency (url) 
// changes before the fetch request completes.
        const abortControl = new AbortController();

        fetch(url, {signal: abortControl.signal})
        .then( response => {
            if (!response.ok){
                throw Error("couldnot fetch data")
            }
            return response.json();
        })
        .then(data => {
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch(error => {
            if (error.name === "AbortError") {
                console.log('fetch aborted')
            } else {
                setIsPending(false)
                setError(error.message);
            }
        })
        // clean up function
        return () => abortControl.abort();
    }, [url]);
    // [] << dependency array .> makes sure this hook runs function only after first initial render; if state changes it wont run the function again

    return {data, isPending, error}
}

export default useFetch;