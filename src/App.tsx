
import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Header from './components/Header/Header'
// import FAQs from './pages/FAQs/FAQs'
import Landing from './pages/Landing/Landing'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import Login from './pages/Login/Login'
import Play from './pages/Play/Play'
// import Profile from './pages/Profile/Profile'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import Signup from './pages/Signup/Signup'
// import NotFound from './pages/NotFound/NotFound'
import { useAppSelector } from './hooks/useAppSelector'
import { useAppDispatch } from './hooks/useAppDispatch'
import { setUserFromStorage } from './store/user/userSlice.actions'

import './App.css'

export default function App() {
  const isLoading = useAppSelector(state => state.requestState.loading)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const savedUserLS = localStorage.getItem('user')
    const savedUserSS = sessionStorage.getItem('user')

    if (savedUserSS && !savedUserLS) {
      dispatch(setUserFromStorage(JSON.parse(savedUserSS)))
    }
    if (savedUserLS) {
      dispatch(setUserFromStorage(JSON.parse(savedUserLS)))
    }
  }, [dispatch])
  return (
    <Router>
      <LoadingSpinner display={isLoading} />
      <Header />
      <Switch>
        {/* <Route path="/FAQs">
            <FAQs />
          </Route>
          
          
          <Route path="/profile">
            <Profile />
          </Route>
           */}
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/privacy">
          <PrivacyPolicy />
        </Route>
        <ProtectedRoute path="/play" component={Play} />

        {/* <Route>
            <NotFound />
          </Route> */}
      </Switch>
    </Router>
  )
}


