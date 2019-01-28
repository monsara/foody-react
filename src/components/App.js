import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AppHeader from './AppHeader/AppHeader';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import Spiner from './Spiner/Spiner';

import routes from '../configs/routes';

const AsyncAuthenticationPage = lazy(() =>
  import('../pages/AuthenticationPage' /* webpackChunkName: "auth-page" */),
);

const AsyncMenuPage = lazy(() =>
  import('../pages/MenuPage' /* webpackChunkName: "menu-page" */),
);

const AsyncMenuItemPage = lazy(() =>
  import('../pages/MenuItemPage' /* webpackChunkName: "menu-item-page" */),
);

const AsyncAddMenuPage = lazy(() =>
  import('../pages/AddMenuPage' /* webpackChunkName: "add-menu-page" */),
);

const AsyncOrderHistoryPage = lazy(() =>
  import('../pages/OrderHistoryPage' /* webpackChunkName: "history-page" */),
);

const AsyncAccountPage = lazy(() =>
  import('../pages/AccountPage' /* webpackChunkName: "account-page" */),
);

const AsyncMealPlannerPage = lazy(() =>
  import('../pages/MealPlannerPage' /* webpackChunkName: "planner-page" */),
);

const AsyncDeliveryPage = lazy(() =>
  import('../pages/DeliveryPage' /* webpackChunkName: "delivery-page" */),
);

const App = () => (
  <>
    <AppHeader />

    <Suspense fallback={Spiner}>
      <Switch>
        <Route exact path={routes.MAIN} component={HomePage} />
        <Route exact path={routes.ABOUT} component={AboutPage} />
        <Route exact path={routes.CONTACT} component={ContactPage} />
        <Route exact path={routes.AUTH} component={AsyncAuthenticationPage} />
        <Route exact path={routes.MENU} component={AsyncMenuPage} />
        <Route exact path={routes.ADD_MENU_ITEM} component={AsyncAddMenuPage} />
        <Route exact path={routes.MENU_ITEM} component={AsyncMenuItemPage} />
        <Route exact path={routes.HISTORY} component={AsyncOrderHistoryPage} />
        <Route exact path={routes.ACCOUNT} component={AsyncAccountPage} />
        <Route exact path={routes.PLANNER} component={AsyncMealPlannerPage} />
        <Route exact path={routes.DELIVERY} component={AsyncDeliveryPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);
export default App;
