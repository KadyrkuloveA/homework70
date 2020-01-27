import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SearchMenu from "./components/SearchMenu/SearchMenu";
import FrontPage from "./containers/FrontPage/FrontPage";
import SelectedShow from "./containers/ShowOverview/ShowOverview";

function App() {
  return (
      <BrowserRouter>
          <SearchMenu/>
          <Switch>
              <Route path='/' exact component={FrontPage}/>
              <Route path='/shows/:id' exact component={SelectedShow}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
