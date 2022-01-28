import React, {useEffect, useState} from "react";

const RandomQuoteView = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] =useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://api.quotable.io/random');
                if (!response.ok) {
                    throw new Error('This is an HTTP error: The status is' + response.status);
                }
                let data = await response.json();
                setData(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        getData()
    },[]);

    return(
        <div>
            {loading && <div>A moment please ...</div>}
            {error && <div>{'There is a problem fetching the post data' + error}</div>}
            <ul>
                {data && <div>{data.content}</div>}
            </ul>
        </div>
    );
};

export default RandomQuoteView;