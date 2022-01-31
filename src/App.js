import React from "react";
import {ThemeProvider} from "styled-components";
import {THEMES} from "./styles/themes";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import RandomQuoteView from "./pages/RandomQuoteView";
import AuthorQuotesView from "./pages/AuthorQuotesView";

function App() {
    return (
        <ThemeProvider theme={THEMES[0]}  className="App">
            <GlobalStyles theme={THEMES[0]}/>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RandomQuoteView/>}/>
                    <Route path=":author" element={<AuthorQuotesView/>}/>
                    <Route path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There is nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
