import axios from 'axios'
import { toast } from 'react-toastify'

export const FETCH_POST = 'FETCH_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const SET_LOADING = 'SET_LOADING'

export const setLoading = () => {
  return async (dispatch) => {
    dispatch({
      type: SET_LOADING,
      payload: true,
    })
  }
}

export const stopLoading = () => {
  return async (dispatch) => {
    dispatch({
      type: SET_LOADING,
      payload: false,
    })
  }
}

export const fetchPost = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading())
      var response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      dispatch({
        type: FETCH_POST,
        payload: {
          data: response.data,
          success: true,
        },
      })
      dispatch(stopLoading())
    } catch (e) {
      dispatch(stopLoading())
      dispatch({
        type: FETCH_POST,
        payload: {
          data: [],
          success: false,
        },
      })
    }
  }
}

export const sendPost = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading())
      await axios.post('https://jsonplaceholder.typicode.com/posts', data)
      dispatch(stopLoading())
      toast.success('Kirim Postingan Berhasil')
    } catch (error) {
      dispatch(stopLoading())
      toast.error('Kirim Postingan Gagal, Silahkan Ulangi Beberapa Saat Lagi')
    }
  }
}

export const editPost = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading())
      await axios.put('https://jsonplaceholder.typicode.com/posts/' + id)
      dispatch(fetchPost())
      dispatch(stopLoading())
      toast.success('Edit Postingan Berhasil')
    } catch (error) {
      dispatch(stopLoading())
      toast.error('Edit Postingan Gagal, Silahkan Ulangi Beberapa Saat Lagi')
    }
  }
}

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading())
      await axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
      dispatch(fetchPost())
      dispatch(stopLoading())
      toast.success('Hapus Postingan Berhasil')
    } catch (error) {
      dispatch(stopLoading())
      toast.error('Hapus Postingan Gagal, Silahkan Ulangi Beberapa Saat Lagi')
    }
  }
}
