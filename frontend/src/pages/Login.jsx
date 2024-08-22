// eslint-disable-next-line no-unused-vars
import React from 'react'
import Form from '../components/Form'
const Login = () => {
  return (
    <>
     <Form route="/api/token/" method="login" />
    </>
  )
}

export default Login