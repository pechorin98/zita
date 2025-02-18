import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import styles from './myMapFooter.module.css'; // Import the CSS module

const MyMap = () => {
  const position = [41.0678, 28.7674]; // Default map center

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className={styles.mapContainer} // Add the CSS class
    >
      <TileLayer
        attribution='&copy;'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Yarımburgaz Mah. Ülkü Sk. No: 37/A Giriş Kat Altınşehir Küçükçekmece / İSTANBUL, 34306
          <br />Küçükçekmece/İstanbul
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;