import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import styles from './Play.module.css'

const Play = () => {
  
  return (
    <main>
      <MapContainer center={[59.3288676, 18.0617572]} zoom={15} className={styles.leafletContainer}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[59.3288676, 18.0617572]}>
          <Popup>
            geoQuizzr is currently a work in progress <br /> Come back in May 2022 to play
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  )
}

export default Play
