import React from 'react';
import router from '~s/router';
import { observer } from 'mobx-react';

@observer class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="mt-4">
                    {router.component}
                </div>
            </div>
        )
    }
}

export default App;