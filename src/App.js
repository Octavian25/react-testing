/* eslint-disable react/prop-types */
import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { connect } from 'react-redux'
import DefaultLayout from './layout/DefaultLayout'
import { checkLogin } from './views/pages/login/redux/Login.action'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))

class App extends Component {
  componentDidMount() {
    this.props.dispatch(checkLogin())
  }
  render() {
    return (
      <HashRouter>
        <ToastContainer />
        <Suspense fallback={loading}>
          <Routes>
            <Route
              path="*"
              name="Home"
              element={this.props.isLogin ? <DefaultLayout /> : <Login />}
            />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default connect((state) => {
  return {
    isLogin: state.loginState.isLogin,
  }
})(App)
