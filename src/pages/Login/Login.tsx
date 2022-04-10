import React from 'react'
import styles from './Login.module.css'
import AuthForm from '../../components/AuthForm/AuthForm'

const Login = () => {
  return <main className={styles.loginMain}>
    <AuthForm title="Log in"/>
  </main>
}

export default Login
