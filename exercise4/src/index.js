import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Netflix from "./Netflix";
import DisplayMovies from "./DisplayMovies";


ReactDOM.render(<Netflix />, document.getElementById('root'));
registerServiceWorker();
