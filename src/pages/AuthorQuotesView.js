import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import Quote from "../components/molecules/Quote";
import Separator from "../components/atoms/Separator";
import Footer from "../components/organisms/Footer";
import {P} from "../components/atoms/Typography";
import RandomButton from "../components/molecules/RandomButton";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    min-height: 100vh;
    max-width: 800px;
    padding: var(--padding-size);
`;

const ContentLayout = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const RandomButtonContainer = styled.div`
    align-self: flex-end;
`;

const AuthorNameContainer = styled.div`
    margin-left: 107px;
    
    @media (max-width: 768px) {
        margin-left: 47px;
    }
`;

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
        <Layout>

            <RandomButtonContainer>
                <Link to={"/"} style={{ textDecoration: 'none', color: "inherit" }}>
                    <RandomButton />
                </Link>
            </RandomButtonContainer>

            <Separator height={"45px"}/>

            <ContentLayout>
                { loading && <P size={"large"} weight={"500"} family={"primary"}>A moment please...</P>}
                { error && <P size={"large"} weight={"500"} family={"primary"}>{'There is a problem fetching the post data' + error}</P>}
                { authorQuotes && <div>

                    <AuthorNameContainer>
                        <Separator maxWidth={"107px"} width={"100%"} minWidth={"47px"} />
                        <P size={"very_large"} weight={"700"} family={"primary"}>{params.author}</P>
                    </AuthorNameContainer>

                    <Separator height={"140px"}/>

                    {authorQuotes.results.map(authorQuote => {
                        return(
                            <div key={authorQuote._id}>
                                <Quote>{authorQuote.content}</Quote>
                                <Separator height={"140px"}/>
                            </div>
                        )
                    })}
                </div>}
            </ContentLayout>
            <Footer/>
        </Layout>
    );
};

export default AuthorQuotesView;