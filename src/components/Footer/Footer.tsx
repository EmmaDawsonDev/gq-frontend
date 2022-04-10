import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/toc" className={styles.footerLink}>
        Terms and Conditions
      </Link>
      <Link to="/privacy" className={styles.footerLink}>
        Privacy Policy
      </Link>
      <p className={styles.footerCopyText}>&copy; Emma Dawson, 2022</p>
    </footer>
  )
}

export default Footer
