// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './containers/app/App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import routes from "./route";

import { Router, browserHistory } from 'react-router';



ReactDOM.render(
			<Router  history={browserHistory} routes={routes}/>,
		document.getElementById('root')
		);
