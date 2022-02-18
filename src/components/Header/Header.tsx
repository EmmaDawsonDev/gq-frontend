
import { useSelector } from 'react-redux'
import { IState } from '../../store/index'

import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logos/gq-logo-white.svg'

const Header = () => {
  const user = useSelector((state: IState) => state.user)
  console.log(user)

  return (
    <header className={styles.header}>
      <section className={styles.logoContainer}>
        <img src={Logo} alt="" className={styles.logo} />
        <p className={styles.logoText}>geoQuizzr</p>
      </section>
      <div className={styles.buttonContainer}>
        <Link to="/login" className={styles.linkOutline}>
          Log in
        </Link>
        <Link to="/signup" className={styles.linkFill}>
          Sign Up
        </Link>
      </div>
    </header>
  )
}

export default Header
