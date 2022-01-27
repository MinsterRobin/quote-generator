import React from "react";
import {ThemeProvider} from "styled-components";
import {THEMES} from "./styles/themes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
    return (
        <ThemeProvider theme={THEMES[0]}  className="App">
            <GlobalStyles theme={THEMES[0]}/>
        </ThemeProvider>
    );
}

export default App;
