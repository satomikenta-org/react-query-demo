import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools'
import Home from './containers/Home';
import Detail from './containers/Detail';
import Demo from './containers/Demo';

function App() {
  
  return (
      <BrowserRouter>
        <ReactQueryDevtools initialIsOpen={true} />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/demo' component={Demo} exact/> 
          <Route path='/pokemon/:id' component={Detail}/> 
        </Switch>
      </BrowserRouter>
  );
}

export default App;
