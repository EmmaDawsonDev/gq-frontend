import { Link } from 'react-router-dom'

import styles from './Header.module.css'
import Logo from '../../assets/gq-logo-white.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.logoContainer}>
        <img src={Logo} alt="" className={styles.logo} />
        <h1>geoQuizzr</h1>
      </section>
    </header>
  )
}

export default Header
