export const SET_LOGIN = 'SET_LOGIN'
export const SET_LOGOUT = 'SET_LOGOUT'

export const setLogin = () => {
  return (dispatch) => {
    dispatch({
      type: SET_LOGIN,
    })
    localStorage.setItem('isLogin', '1')
  }
}

export const setLogout = () => {
  return (dispatch) => {
    dispatch({
      type: SET_LOGOUT,
    })
    localStorage.setItem('isLogin', '010')
  }
}

export const checkLogin = () => {
  return (dispatch) => {
    var prev = localStorage.getItem('isLogin')
    if (prev === '1') {
      dispatch(setLogin())
    } else {
      dispatch(setLogout())
    }
  }
}
