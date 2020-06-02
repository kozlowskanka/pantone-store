import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { HomePage } from './components/views/HomePage/HomePage';
import { Product } from './components/views/Product/Product';
import { Cart } from './components/views/Cart/Cart';
import { Form } from './components/views/Form/Form';
import { NotFound } from './components/views/NotFound/NotFound';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/product/:id' component={Product} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/form' component={Form} />
            <Route path='*' component={NotFound} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export {App};
