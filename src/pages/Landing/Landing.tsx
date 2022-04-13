import React from 'react'

import InfoSection from '../../components/Layout/InfoSection'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'

import styles from './Landing.module.css'
import crownImg from '../../assets/images/crown.jpg'
import account from '../../assets/icons/account.png'
import climb from '../../assets/icons/climb.png'
import map from '../../assets/icons/map.png'

const Landing = () => {
  return (
    <main>
      <section className={styles.headerImg}>
        <div className={styles.landingHeaderText}>
          <h1>Explore the world</h1>
          <h2>one question at a time</h2>
        </div>
      </section>
      <InfoSection bg="white">
        <h3 className={styles.landingh3}>What is geoQuizzr?</h3>
        <div className={styles.flexRow}>
          <div>
            <p className={styles.landingP}>
              The world is full of many magical things to discover and explore. Find these hidden gems with geoQuizzr.
            </p>
            <p className={styles.landingP}>
              At landmarks all around Stockholm you will find questions related to the surroundings. Answer the questions correctly to gain
              points and become a geoQuizzr champion.
            </p>
          </div>
          <img src={crownImg} className={styles.image} alt="A gold crown decorating a bridge in Stockholm" />
        </div>
      </InfoSection>
      <InfoSection bg="secondary-lt">
        <h3 className={styles.landingh3}>How to play</h3>
        <div className={styles.flexRowLg}>
          <Card
            title="1. Create an account"
            image={account}
            description="Click the sign up button to create an account. Once logged in you will be able to see all the questions nearby."
          />
          <Card
            title="2. Find a question location"
            image={map}
            description="Each question is located on the map. Go to that location and the answer to the question will be found. It might be on a sign, a statue, or some other prominent feature of the surroundings. Make sure to look around and explore the area but take care to stay safe."
          />
          <Card
            title="3. Enter your answer"
            image={climb}
            description="You can enter your answer in English or Swedish. If correct, you will gain points and start climbing levels. The more you answer the higher you climb!"
          />
        </div>
      </InfoSection>
      <Footer />
    </main>
  )
}

export default Landing
