import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, browserHistory } from 'react-router-dom';
import Home from './components/Home';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </HashRouter>,
  document.getElementById('container')
);
