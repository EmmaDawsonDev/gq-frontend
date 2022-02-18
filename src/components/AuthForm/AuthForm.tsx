import React, {ChangeEvent, useState} from 'react';
import styles from "./AuthForm.module.css"
import { useLocation } from "react-router-dom"

interface AuthFormProps {
  title: string
}

interface UserDetails {
  username?: string;
  email: string;
  password: string;
  confirmPassword?: string
}

const AuthForm = (props: AuthFormProps) => {
  const [userDetails, setUserDetails] = useState<UserDetails>({email: "", password: ""})
  const [remember, setRemember] = useState<boolean>(false)
  const [gdpr, setGdpr] = useState<boolean>(false)
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true)

  const location = useLocation()
  const signup = location.pathname === '/signup'

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserDetails(prevState => ({ ...prevState, [name]: value }))
    if (name === 'confirmPassword' && value !== userDetails.password) {
      setPasswordMatch(false)
    }
    if (name === 'confirmPassword' && value === userDetails.password) {
      setPasswordMatch(true)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(userDetails)

    // Check which route you are on

    // If login - dispatch login function + send remember variable
    // so that it knows whether to save in session storage or local storage

    // signup - check gdpr is true and dispatch signup function
  }

  const { title } = props
  return (
    <form className={styles.authFormContainer} onSubmit={handleSubmit}>
      <h1 className={styles.h1}>{title}</h1>
      {signup && (
        <div className={styles.inputContainer}>
          <label htmlFor="username">
            Username:<span className={styles.required}>*</span>
          </label>
          <input type="text" id="username" name="username" required value={userDetails.username || ''} onChange={handleInput} />
        </div>
      )}
      <div className={styles.inputContainer}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required value={userDetails.email} onChange={handleInput} />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="password">Password (at least 8 characters):</label>
        <input type="password" id="password" name="password" required minLength={8} value={userDetails.password} onChange={handleInput} />
      </div>
      {signup && (
        <div className={styles.inputContainer}>
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            minLength={8}
            value={userDetails.confirmPassword || ''}
            onChange={handleInput}
          />
          {!passwordMatch && <p className={styles.error}>The passwords do not match</p>}
        </div>
      )}

      {signup ? (
        <div className={styles.checkboxContainer}>
          <input type="checkbox" id="gdprAgreement" name="gdprAgreement" required checked={gdpr} onChange={() => setGdpr(!gdpr)} />
          <label htmlFor="gdprAgreement">I agree to the privacy policy</label>
        </div>
      ) : (
        <div className={styles.checkboxContainer}>
          <input type="checkbox" id="rememberMe" name="rememberMe" checked={remember} onChange={() => setRemember(!remember)} />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
      )}

      <button type="submit" className={styles.formBtn}>
        {title}
      </button>
    </form>
  )
};

export default AuthForm;
