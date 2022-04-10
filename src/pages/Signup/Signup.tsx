import React from 'react'
import styles from "./Signup.module.css"
import AuthForm from '../../components/AuthForm/AuthForm'

const Signup = () => {
  return <main className={styles.signupMain}>
    <AuthForm title="Sign up" />
  </main>
}

export default Signup
