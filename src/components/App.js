import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AppHeader from './AppHeader';
import HomePage from '../pages/Home';
import MenuPage from '../pages/Menu';
import MenuItemPage from '../pages/MenuItem';
import AddMenuPage from '../pages/AddMenu';
import routes from '../configs/routes';

const App = () => (
  <>
    <AppHeader />

    <Switch>
      <Route exact path={routes.MAIN} component={HomePage} />
      <Route exact path={routes.MENU} component={MenuPage} />
      <Route exact path={routes.ADD_MENU_ITEM} component={AddMenuPage} />
      <Route path={routes.MENU_ITEM} component={MenuItemPage} />
      <Redirect to="/admin" />
    </Switch>
  </>
);

export default App;
