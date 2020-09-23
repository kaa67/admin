import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "mobx-react";
import UserStore from "./stores/UserStore";
import Admin from './containers/Admin';

const stores = {
    UserStore,
}
ReactDOM.render(
    <Provider {...stores}>
        <Admin />
    </Provider>,
    document.body,
);
