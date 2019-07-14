import React from 'react';
import { observer, Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes, { routesMap } from '~/routes';
import AppNavbar from '~c/app/app-navbar';
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
        const appMainMenuLinks = [
            { route: routesMap.home, label: 'Home' },
            { route: routesMap.order, label: 'Order' },
            { route: routesMap.cart, label: 'Cart' }
        ];
        const appCartTotal = RootStore.cartStore.total;
        const appCartCnt = RootStore.cartStore.getItemsCnt;
        return (
            <Provider RootStore={RootStore}>
                <Router>
                    <AppNavbar
                        appMainMenuLinks={appMainMenuLinks}
                        appCartTotal={appCartTotal}
                        appCartCnt={appCartCnt} />
                    <Switch>
                        {routesComponents}
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;