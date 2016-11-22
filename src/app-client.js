'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};
//import the master AppRoutes and render it with the ReactDOM. the whole app will be rendered inside the main section in the DOM element
