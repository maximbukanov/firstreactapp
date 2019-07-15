import React from 'react';
import ReactDom from 'react-dom';
import App from '~/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import RootStore from '~s';
import { observer, Provider } from 'mobx-react';

ReactDom.render(
    <Provider RootStore={RootStore}><App /></Provider>, document.querySelector('#app'));