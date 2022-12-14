import { FETCH_POST, SET_LOADING } from './dashboard.action'

const initialState = { listPost: [], isLoading: false }

const dashboardState = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POST:
      return {
        ...state,
        listPost: payload.data,
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      }
    default:
      return state
  }
}

export default dashboardState
