import React, { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as L from 'leaflet'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { fetchQuestions } from '../../store/questions/questionSlice.actions'
import mapPinRed from '../../assets/icons/map-pin-red.png'
import mapPinGreen from '../../assets/icons/map-pin-green.png'
import styles from './Play.module.css'

const Play = () => {
  const [playerPosition, setPlayerPosition] = useState({ lat: 59.3288676, lng: 18.0617572 })

  const questions = useAppSelector(state => state.questions.questions)
  const answerRef = useRef<HTMLInputElement>(null)

  // useEffect(() => {
  //   if ('geolocation' in navigator) {
  //     const success = (position: any) => setPlayerPosition({ lat: position.coords.latitude, lng: position.coords.longitude })

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
    dispatch(fetchQuestions(playerPosition.lat, playerPosition.lng))
  }, [dispatch])

  // Icon color
  const unansweredQIcon = new L.Icon({
    iconUrl: mapPinRed,
    iconSize: [25, 40],
    iconAnchor: [10, 40],
    popupAnchor: [3, -40],
  })

  const answeredQIcon = new L.Icon({
    iconUrl: mapPinGreen,
    iconSize: [25, 40],
    iconAnchor: [10, 40],
    popupAnchor: [3, -40],
  })

  const handleAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(answerRef!.current!.value)
  }

  return (
    <main>
      <MapContainer center={playerPosition} zoom={15} className={styles.leafletContainer}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {questions.length === 0 && (
          <Marker position={playerPosition}>
            <Popup>You are here. There are no questions within a 1km radius.</Popup>
          </Marker>
        )}
        {questions.length > 0 &&
          questions.map(question => (
            <Marker
              key={question._id}
              position={[question.geometry.coordinates[1], question.geometry.coordinates[0]]}
              icon={question.properties.answered ? answeredQIcon : unansweredQIcon}
            >
              <Popup>
                <p>{question.properties.question}</p>
                {question.properties.answered ? (
                  <p>You've answered this question correctly!</p>
                ) : (
                  <form onSubmit={e => handleAnswer(e)}>
                    <label htmlFor={`${question._id}-answer-field`} className={styles.label}>
                      Answer:
                    </label>
                    <div className={styles.flexRow}>
                      <input
                        type="text"
                        id={`${question._id}-answer-field`}
                        name={`${question._id}-answer-field`}
                        ref={answerRef}
                        // onChange={e => setAnswer(e.target.value)}
                      />
                      <button type="submit" className={styles.answerBtn}>
                        Go!
                      </button>
                    </div>
                  </form>
                )}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </main>
  )
}

export default Play
