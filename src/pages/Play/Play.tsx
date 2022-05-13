import React, { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap, Circle } from 'react-leaflet'
import * as L from 'leaflet'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { fetchQuestions, answerQuestion } from '../../store/questions/questionSlice.actions'
import { clearError } from '../../store/requestState/requestStateSlice'
import mapPinRed from '../../assets/icons/map-pin-red.png'
import mapPinGreen from '../../assets/icons/map-pin-green.png'
import styles from './Play.module.css'
import { LatLngExpression } from 'leaflet'
import { haversineDistance } from '../../utils/utilityFunctions'

interface ChangeViewProps {
  center: LatLngExpression
}

// This is needed to update the center of the map, as MapContainer props are immutable
function ChangeView({ center }: ChangeViewProps) {
  const map = useMap()
  map.panTo(center)
  return null
}

const Play = () => {
  const [playerPosition, setPlayerPosition] = useState({ lat: 59.3288676, lng: 18.0617572 })
  const [prevPosition, setPrevPosition] = useState({ lat: 59.3288676, lng: 18.0617572 })
  const [showError, setShowError] = useState<boolean>(false)

  const score = useAppSelector(state => state.user.user?.score)
  const questions = useAppSelector(state => state.questions.questions)
  const error = useAppSelector(state => state.requestState.error)
  const answerRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (error) {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    }
  }, [error])

  const dispatch = useAppDispatch()

  // Clear any errors when page first loads
  useEffect(() => {
    dispatch(clearError())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    let watchID: number
    if ('geolocation' in navigator) {
      const success = (position: any) => setPlayerPosition({ lat: position.coords.latitude, lng: position.coords.longitude })

      const error = (error: any) => console.warn(`ERROR(${error.code}): ${error.message}`)

      const options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
      }

      watchID = navigator.geolocation.watchPosition(success, error, options)
    }

    return () => {
      navigator.geolocation.clearWatch(watchID)
    }
  }, [])

  // Always fetch questions when app loads, just on the chance that the player is less than 500m from the default coords
  useEffect(() => {
    dispatch(fetchQuestions(playerPosition.lat, playerPosition.lng))
    // eslint-disable-next-line
  }, [])

  // Fetch questions as soon as player is 500m away from the last time they loaded
  useEffect(() => {
    if (haversineDistance(prevPosition, playerPosition) >= 0.5) {
      dispatch(fetchQuestions(playerPosition.lat, playerPosition.lng))
      setPrevPosition(playerPosition)
    }
  }, [dispatch, playerPosition, prevPosition])

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

  const handleAnswer = (e: React.FormEvent<HTMLFormElement>, questionId: string) => {
    e.preventDefault()
    dispatch(answerQuestion(questionId, answerRef!.current!.value))
  }

  return (
    <main>
      <MapContainer center={playerPosition} zoom={15} className={styles.leafletContainer}>
        <div className={styles.scoreContainer}>Score: {score}</div>
        <ChangeView center={playerPosition} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={playerPosition} radius={20} />
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
                  <form onSubmit={e => handleAnswer(e, question._id)}>
                    <label htmlFor={`${question._id}-answer-field`} className={styles.label}>
                      Answer:
                    </label>
                    <div className={styles.flexRow}>
                      <input
                        type="text"
                        id={`${question._id}-answer-field`}
                        name={`${question._id}-answer-field`}
                        ref={answerRef}
                        className={styles.answerInput}
                        // onChange={e => setAnswer(e.target.value)}
                      />
                      <button type="submit" className={styles.answerBtn}>
                        Go!
                      </button>
                    </div>
                    <div className={styles.errorContainer}>
                      {showError && (
                        <p style={{ margin: 0 }} className={styles.error}>
                          {error}
                        </p> // Inline styles used to overwrite those inbuilt from leaflet
                      )}
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
