import { SET_LOGIN, SET_LOGOUT } from './Login.action'

const initialState = { isLogin: false }

const loginState = (state = initialState, { type }) => {
  switch (type) {
    case SET_LOGIN:
      return { isLogin: true }
    case SET_LOGOUT:
      return { isLogin: false }
    default:
      return state
  }
}

export default loginState
