import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { fetchQuestions } from '../../store/questions/questionSlice.actions'
import styles from './Play.module.css'

const Play = () => {
  const [playerPosition, setPlayerPosition] = useState({ lat: 59.3288676, long: 18.0617572 })

  const questions = useAppSelector(state => state.questions.questions)

  // useEffect(() => {
  //   if ('geolocation' in navigator) {
  //     const success = (position: any) => setPlayerPosition({ lat: position.coords.latitude, long: position.coords.longitude })

  //     const error = (error: any) => console.warn(`ERROR(${error.code}): ${error.message}`)

  //     const options = {
  //       enableHighAccuracy: true,
  //       timeout: 5000,
  //       maximumAge: 0,
  //     }

  //     navigator.geolocation.getCurrentPosition(success, error, options)
  //   }
  // }, [])

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchQuestions())
  }, [])

  console.log(questions.length)

  return (
    <main>
      <MapContainer center={[playerPosition.lat, playerPosition.long]} zoom={15} className={styles.leafletContainer}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[playerPosition.lat, playerPosition.long]}>
          <Popup>
            geoQuizzr is currently a work in progress <br /> Come back in May 2022 to play
          </Popup>
        </Marker> */}
        {questions.length > 0 &&
          questions.map(question => (
            <Marker position={[question.geometry.coordinates[1], question.geometry.coordinates[0]]}>
              <Popup>{question.properties.question}</Popup>
            </Marker>
          ))}
      </MapContainer>
    </main>
  )
}

export default Play
