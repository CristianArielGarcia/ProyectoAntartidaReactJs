import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import moment from "moment";
import { store } from "./app/middleware/store/store";
import { AppRouter } from "./app/routers/AppRouter";

export const AntartidaApp = (): JSX.Element => {
    moment.locale("es-ar");
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
};
