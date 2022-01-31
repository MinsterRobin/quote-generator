import React, {useEffect, useState} from "react";
import {ReactComponent as Renew} from "../assets/arrow_autorenew.svg";
import styled, {useTheme} from 'styled-components';
import { Link } from "react-router-dom";

const RandomButton = styled.div`
    display: inline-block;
    cursor: pointer;
    
    svg {
        height: 16px;
        width: 16px;
    }
`;

const RandomQuoteView = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] =useState(null);
    const theme = useTheme();

    const getRandomQuote = async () => {
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

    useEffect(() => {
        getRandomQuote()
    },[]);

    return(

        <div>
            <RandomButton onClick={getRandomQuote}>random <Renew fill={theme.primary}/></RandomButton>
            {loading && <div>A moment please ...</div>}
            {error && <div>{'There is a problem fetching the post data' + error}</div>}
            {data &&
                <div>
                    <div>{data.content}{data.author}</div>
                    <Link to={"/" + data.author}>{data.author}</Link>
                </div>
            }
        </div>
    );
};

export default RandomQuoteView;