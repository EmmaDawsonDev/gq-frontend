import { useAppSelector } from './hooks/useAppSelector'
import { Route } from 'react-router-dom'
import Login from './pages/Login/Login'

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const loggedInUser = useAppSelector(state => state.user.user)
  return <Route {...rest} render={props => (loggedInUser ? <Component {...props} {...rest} /> : <Login />)} />
}

export default ProtectedRoute
