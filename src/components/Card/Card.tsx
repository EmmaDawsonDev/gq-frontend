import React from 'react'

import styles from './Card.module.css'

interface ICardProps {
  title: string
  image: string
  description: string
}

const Card = (props: ICardProps) => {
  const { title, image, description } = props
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <img src={image} alt="icon" />
      <p>{description}</p>
    </div>
  )
}

export default Card
