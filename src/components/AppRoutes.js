'use strict';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    );//specify the routing for browser history and reset the scolling with onUpdate
  }//render
}//export appRoutes Component
