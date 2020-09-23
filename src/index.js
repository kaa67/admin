import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import stores from './stores';
import Admin from './containers/Admin';

ReactDOM.render(
    <Provider {...stores}><Admin /></Provider>,
    document.body,
);
