import React from 'react'

import styles from './LoadingSpinner.module.css'

interface LoadingSpinnerProps {
  display: boolean
}

const LoadingSpinner = (props: LoadingSpinnerProps) => {
  const { display } = props

  if (!display) {
    return null
  }

  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadingSpinner
