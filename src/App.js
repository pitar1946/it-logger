import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import Techs from './components/techs/Techs';
import AddTech from './components/techs/AddTech';
import AddEditLog from './components/logs/AddEditLog';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  }, []);
  return (
    <>
      <BrowserRouter>
        <SearchBar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Logs} />
            <Route exact path='/techs' component={Techs} />
            <Route exact path='/add-log' component={AddEditLog} />
            <Route exact path='/upd-log/:id' component={AddEditLog} />
            <Route exact path='/add-tech' component={AddTech} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};
export default App;
