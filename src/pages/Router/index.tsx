import { BrowserRouter, Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Estimate from '../Estimate';
import Preview from '../Preview';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = (props: RouteProps) => {
  const { user } = useAuth();

  if (!user) {
    return <Redirect to='/login' />
  }

  return (
    <Route {...props} />
  )
}

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path='/home'>
          <Home />
        </PrivateRoute>
        <PrivateRoute path='/estimate'>
          <Estimate />
        </PrivateRoute>
        <PrivateRoute path='/preview'>
          <Preview />
        </PrivateRoute>

        <Route path='/login'>
          <Login />
        </Route>
        <Route path='*'>
          <Redirect to='/login' />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;