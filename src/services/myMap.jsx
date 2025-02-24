import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import styles from './myMapFooter.module.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Default ikonları manuel olarak ayarla
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
const MyMap = () => {
  const position = [41.0678, 28.7674]; // Default map center

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={styles.MapContainerComp} style={{ height: "40vh", width: "40%", borderRadius: "12px" }}>
      <TileLayer
        attribution='&copy;'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Yarımburgaz Mah. Ülkü Sk. No: 37/A Giriş Kat Altınşehir Küçükçekmece / İSTANBUL, 34306
          <br />Küçükçekmece/İstanbul </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
