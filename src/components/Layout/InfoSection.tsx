import React from 'react'
import styles from './InfoSection.module.css'

interface IInfoSectionProps {
  bg: 'primary' | 'secondary-lt' | 'secondary-dk' | 'tertiary' | 'white'
  children: React.ReactNode
}

const InfoSection = (props: IInfoSectionProps) => {
  const { bg } = props
  return (
    <section className={`${bg}`}>
      <div className={styles.infoSection}>{props.children}</div>
    </section>
  )
}

export default InfoSection
