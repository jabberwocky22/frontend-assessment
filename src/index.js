import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import TabView from './Components/Tab';
import AccordionView from './Components/Accordion';

ReactDOM.render( < App / > , document.getElementById('root'));
ReactDOM.render( < TabView / > , document.getElementById('tabView'));
ReactDOM.render( < AccordionView / > , document.getElementById('accordionView'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();