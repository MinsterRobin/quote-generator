import React, {useEffect, useState} from "react";
import {ReactComponent as ArrowRight} from "../assets/arrow_right.svg";
import styled, {useTheme} from 'styled-components';
import { Link } from "react-router-dom";
import Quote from "../components/molecules/Quote";
import Footer from "../components/organisms/Footer";
import Separator from "../components/atoms/Separator";
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

const AuthorInfosLayout = styled.div`    
    padding: 50px 39px 50px 29px;
    color: ${props => props.theme.text};
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    svg {
        height: 12px;
        width: 25px;
    }
    
    &:hover {
        color: ${props => props.theme.background};;
        background-color: ${props => props.theme.primary};
    }
`;

const TagsContainer = styled.div`
    display: flex;
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

    return (
        <Layout>
            <RandomButton onClick={getRandomQuote}/>

            <ContentLayout>

                { loading && <P size={"large"} weight={"500"} family={"primary"}>A moment please...</P>}
                { error && <P size={"large"} weight={"500"} family={"primary"}>{'There is a problem fetching the post data' + error}</P>}
                {data &&
                    <div>

                        <Quote>{data.content}</Quote>

                        <Separator height={"100px"}/>

                        <Link to={"/" + data.author} style={{ textDecoration: 'none' }}>
                            <AuthorInfosLayout>
                                <div>
                                    <P size={"large"} weight={"700"} family={"primary"}>{data.author}</P>
                                    <Separator height={"8px"}/>
                                    <TagsContainer>
                                        {data.tags.map((tag, index) =>
                                            <P size={"small"} weight={"500"} family={"primary"} color="#828282" key={index}>
                                                {index !== data.tags.length - 1 ? tag + ", " : tag}
                                            </P>
                                        )}
                                    </TagsContainer>
                                </div>
                                <ArrowRight fill={theme.background}/>
                            </AuthorInfosLayout>
                        </Link>

                    </div>
                }
            </ContentLayout>
            <Footer/>
        </Layout>
    );
};

export default RandomQuoteView;