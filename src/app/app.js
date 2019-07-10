import React from 'react';
import { observer, Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from '~/routes';
import AppMainMenu from '~c/app-main-menu';

import RootStore from '~s';

@observer class App extends React.Component {
    render() {
        const routesComponents = routes.map((route) => {
            return <Route path={route.url}
                component={route.component}
                exact={route.exact}
                key={route.url}
            />;
        });
        return (
            <Provider RootStore={RootStore}>
                <Router>
                    <AppMainMenu />
                    <Switch>
                        {routesComponents}
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;