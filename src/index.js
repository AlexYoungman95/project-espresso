import React from 'react';
import ReactDOM from 'react-dom';
import ProjectRouter from './app/ProjectRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProjectRouter />, document.getElementById('root'));
registerServiceWorker();
