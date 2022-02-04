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

  const location = useLocation()
  const signup = location.pathname === "/signup";
  
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {    
    const {name, value} = e.target;
    setUserDetails(prevState => ({...prevState, [name]: value}))  
  }
  
  const {title} = props
  return <form className={styles.authFormContainer} >
    <h1 className={styles.h1}>{title}</h1>
    {signup && <div className={styles.inputContainer}>
      <label htmlFor='username'>Username:</label>
      <input type="text" id="username" name="username" value={userDetails.username} onChange={handleInput} />
    </div>}
    <div className={styles.inputContainer}>
      <label htmlFor='email'>Email:</label>
      <input type="email" id="email" name="email" value={userDetails.email} onChange={handleInput} />
    </div>

    <div className={styles.inputContainer}>
      <label htmlFor='password'>Password:</label>
      <input type="password" id="password" name="password" value={userDetails.password} onChange={handleInput} />
    </div>
    { signup &&
      <div className={styles.inputContainer}>
      <label htmlFor='confirmPassword'>Confirm password:</label>
      <input type="password" id="confirmPassword" name="confirmPassword" value={userDetails.confirmPassword} onChange={handleInput} />
    </div>
    }
    
    
    {
      signup ? 
      <div className={styles.checkboxContainer}>
      <input type="checkbox" id="gdprAgreement" name="gdprAgreement" checked={gdpr} onChange={() => setGdpr(!gdpr)} />
      <label htmlFor="gdprAgreement">I agree to the privacy policy</label>
    </div> 
    : 
    <div className={styles.checkboxContainer}>
      <input type="checkbox" id="rememberMe" name="rememberMe" checked={remember} onChange={() => setRemember(!remember)} />
      <label htmlFor="rememberMe">Remember me</label>
    </div>
    }
    
    <button type="submit" className={styles.formBtn}>{title}</button>
  </form>;
};

export default AuthForm;
