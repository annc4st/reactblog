import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
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
            setIsPending(false)
            setError(error.message);
        })
        
    }, [url]);
    // [] << dependency array .> makes sure this hook runs function only after first initial render; if state changes it wont run the function again

    return {data, isPending, error}
}

export default useFetch;