import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { stateReducer } from "./src/reducer";
import { App } from "./src/pages/App";
import { optionsNextRequested } from "./src/actions";
import { theme } from "./src/theme";
import { ThemeProvider } from "styled-components";

const store = createStore(stateReducer, applyMiddleware(thunk));

store.dispatch<any>(optionsNextRequested());

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root"),
);
