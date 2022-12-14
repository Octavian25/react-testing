import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from './views/pages/login/Login'

test('renders Login Screen', () => {
  render(<Login />)
  const linkElement = screen.getByText(/Selamat Datang/i)
  expect(linkElement).toBeInTheDocument()
})
