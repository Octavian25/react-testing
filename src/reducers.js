import { combineReducers } from 'redux'
import changeState from './theme_reducer'
import dashboardState from './views/dashboard/redux/dashboard.redux'
import loginState from './views/pages/login/redux/Login.redux'

export default combineReducers({ changeState, dashboardState, loginState })
