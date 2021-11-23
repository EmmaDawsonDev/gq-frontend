import React from 'react'

import styles from './Landing.module.css'

const Landing = () => {
  return (
    <main>
      <div className={styles.headerImg}>
        <div className={styles.landingHeaderText}>
          <h1>Explore the world</h1>
          <h2>one question at a time</h2>
        </div>
      </div>
    </main>
  )
}

export default Landing
