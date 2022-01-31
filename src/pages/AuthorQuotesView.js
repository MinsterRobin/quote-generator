import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AuthorQuotesView = () => {
    let params = useParams();

    const [authorQuotes, setAuthorQuotes] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    const getAuthorQuotes = async (author) =>  {
        try {
            const response = await fetch("https://quotable.io/quotes?author=" + author);
            if (!response.ok) {
                throw new Error('This is an HTTP error: The status is' + response.status);
            }
            let data = await response.json();
            setAuthorQuotes(data);
            setError(null);
        } catch(err) {
            setError(err.message);
            setAuthorQuotes(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect( () => {
        getAuthorQuotes(params.author);
    },[]);


    return (
        <div>
            { loading && <div>A moment please ...</div>}
            { error && <div>{'There is a problem fetching the post data' + error}</div>}
            { authorQuotes && <div>
                {authorQuotes.results.map(authorQuote => {
                    return(
                        <div key={authorQuote._id}>
                            {authorQuote.content}
                        </div>
                    )
                })}
            </div>}
        </div>
    );
};

export default AuthorQuotesView;