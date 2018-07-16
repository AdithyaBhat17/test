import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import './index.css';
import App from './App';
import Apps from './Apps';
import Wear from './Wear';
import article from './article';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/androidapps" component={Apps} />
        <Route path="/media" component={article} />
        <Route path="/androidwear" component={Wear} />
    </Router>, document.getElementById('root'));

