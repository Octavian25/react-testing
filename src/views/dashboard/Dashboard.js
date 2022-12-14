import React, { useEffect, useState } from 'react'

import {
  CCard,
  CCardBody,
  CCardFooter,
  CForm,
  CFormInput,
  CFormLabel,
  CListGroup,
  CListGroupItem,
  CRow,
  CCol,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CSpinner,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, editPost, fetchPost, sendPost } from './redux/dashboard.action'

const Dashboard = () => {
  const [title, settitle] = useState('')
  const [body, setbody] = useState('')
  const [visible, setVisible] = useState(false)
  const [isDelete, setisDelete] = useState(false)
  const [id, setid] = useState('')
  const dispatch = useDispatch()
  const listPosts = useSelector((state) => state.dashboardState.listPost)
  const isLoading = useSelector((state) => state.dashboardState.isLoading)
  useEffect(() => {
    dispatch(fetchPost())
  }, [dispatch])

  return (
    <>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>{isDelete ? 'Hapus' : 'Rubah Data'}</CModalTitle>
        </CModalHeader>
        <CModalBody>{isDelete ? 'Anda Yakin Ingin Menghapus Data Ini ?' : 'Rubah Data'}</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton
            disabled={isLoading}
            color="primary"
            onClick={() => {
              if (isDelete) {
                dispatch(deletePost(id))
              } else {
                dispatch(editPost(id))
              }
            }}
          >
            {isLoading && (
              <CSpinner component="span" size="sm" aria-hidden="true" className="me-2" />
            )}
            {isDelete ? 'Hapus Data' : 'Simpan Data'}
          </CButton>
        </CModalFooter>
      </CModal>
      <CCard className="mb-4">
        <CCardBody>
          <CListGroup>
            {listPosts.map((element) => {
              return (
                <CListGroupItem component="a" key={element.id}>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{element?.title}</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">{element?.body}</p>
                  <CButton
                    className="me-3"
                    color="danger"
                    onClick={() => {
                      setid(element.id)
                      setisDelete(true)
                      setVisible(true)
                    }}
                  >
                    DELETE
                  </CButton>
                  <CButton
                    color="warning"
                    onClick={() => {
                      setid(element.id)
                      setisDelete(false)
                      setVisible(true)
                    }}
                  >
                    UPDATE
                  </CButton>
                </CListGroupItem>
              )
            })}
          </CListGroup>
        </CCardBody>
        <CCardFooter>
          <CForm>
            <CRow xs={{ cols: 1 }} md={{ cols: 12 }} className="text-left">
              <CCol className="mb-3">
                <CFormLabel htmlFor="exampleInput1">Title</CFormLabel>
                <CFormInput
                  type="text"
                  id="exampleInput1"
                  placeholder="Contoh Title"
                  aria-describedby="exampleFormControlInputHelpInline"
                  onChange={(e) => settitle(e.target.value)}
                />
              </CCol>
              <CCol className="mb-3">
                <CFormLabel htmlFor="exampleInput2">Body</CFormLabel>
                <CFormInput
                  type="text"
                  id="exampleInput2"
                  placeholder="Contoh Body"
                  onChange={(e) => setbody(e.target.value)}
                />
              </CCol>
              <CCol xs={{ cols: 12 }} md={{ cols: 12 }} xl={{ cols: 12 }}>
                <div className="d-grid gap-2">
                  <CButton
                    color="primary"
                    onClick={() => {
                      dispatch(
                        sendPost({
                          title,
                          body,
                        }),
                      )
                    }}
                  >
                    Simpan
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </CForm>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Dashboard
