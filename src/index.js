import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import AuthLayout from 'layouts/Auth.js'
import AdminLayout from 'layouts/Admin.js'
import Video from 'layouts/Video'
import RTLLayout from 'layouts/RTL.js'
import RegisteredInterviews from 'views/Dashboard/RegisteredInterviews/index.js'
import { firebaseApp } from './views/Auth/firebaseConfig' // Import the Firebase app instance
import {
  getAuth,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth' // Import Firebase Auth methods

const App = () => {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const auth = getAuth(firebaseApp)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth state changed:', user)
      if (user) {
        setAuthenticated(true)
      } else {
        setAuthenticated(false)
      }
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    const auth = getAuth(firebaseApp)
    if (auth.currentUser) {
      setAuthenticated(true)
    }
  }, [])
  console.log('authenticated', authenticated)
  return (
    <HashRouter>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <Route
          path={`/admin`}
          render={() =>
            authenticated ? <AdminLayout /> : <Redirect to='/auth/signin' />
          }
        />
        <Route
          path={`/video`}
          render={() =>
            authenticated ? <Video /> : <Redirect to='/auth/signin' />
          }
        />
        <Route
          path={`/rtl`}
          render={() =>
            authenticated ? <RTLLayout /> : <Redirect to='/auth/signin' />
          }
        />
        <Route
          path={`/registered-interviews`}
          render={() =>
            authenticated ? (
              <RegisteredInterviews />
            ) : (
              <Redirect to='/auth/signin' />
            )
          }
        />
        <Redirect
          from={`/`}
          to={authenticated ? '/admin/dashboard' : '/auth/signin'}
        />
      </Switch>
    </HashRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
