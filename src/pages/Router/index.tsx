import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Estimate from '../Estimate';
import Preview from '../Preview';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/estimate'>
          <Estimate />
        </Route>
        <Route path='/preview'>
          <Preview />
        </Route>
        <Route path='*'>
          <Redirect to='/login' />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;