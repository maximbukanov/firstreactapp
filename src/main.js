import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

/**
 * Если бы не было babel-JSX, то было бы худо
 * const hrNode = React.createElement('hr');
 * const divNode = React.createElement('div', { className: 'test' }, [hrNode]);
 * ReactDom.render(divNode, document.getElementById('app'));
 */

ReactDom.render(<App />, document.getElementById('app'));