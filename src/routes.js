'use strict';
//import the pages from our folders and the modules
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>//mapping the layout component to the "/" route
    <IndexRoute component={IndexPage}/>//set the index route to the indexpage component
    <Route path="athlete/:id" component={AthletePage}/>//routing the athletepage component to the added :id
    <Route path="*" component={NotFoundPage}/>//route every other path to the 404page component
  </Route>
);//nest the specific routes into the main route (with the layout component)


export default routes;//export the routes variable as default (since there are no other exports/modules)
