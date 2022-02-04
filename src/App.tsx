
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
// import FAQs from './pages/FAQs/FAQs'
import Landing from './pages/Landing/Landing'
// import Login from './pages/Login/Login'
// import Play from './pages/Play/Play'
// import Profile from './pages/Profile/Profile'
// import Signup from './pages/Signup/Signup'
import NotFound from './pages/NotFound/NotFound'

import './App.css'

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/FAQs">
            <FAQs />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route> */}
          <Route exact path="/">
            <Landing />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


