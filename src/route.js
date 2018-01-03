import React from 'react';
import {Route} from 'react-router';



import App from "./containers/app/App";
import ModelPage from "./containers/model/model";
import Visualization from "./containers/visualization/insights";


export default (
  <div>
    <Route path="/model" component={ModelPage}/>
    <Route path="/visualization" component={Visualization}/>
  </div>
);
