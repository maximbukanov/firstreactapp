import React from 'react';
import ReactDom from 'react-dom';
import App from '~/app';
import RootStore from '~s';
import { Provider } from 'mobx-react';

import 'bootstrap/dist/css/bootstrap.min.css';

RootStore.shopStore.load().then(() => {
    ReactDom.render(<Provider RootStore={RootStore}>
        <App />
    </Provider>, document.querySelector('#app'));
});

RootStore.cartStore.load();