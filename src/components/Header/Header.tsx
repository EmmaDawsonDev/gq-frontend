import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IState } from '../../store/index'

import styles from './Header.module.css'
import Logo from '../../assets/gq-logo-white.svg'

const Header = () => {
  const user = useSelector((state: IState) => state.user)
  console.log(user)

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
