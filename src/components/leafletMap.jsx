import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = ({ markers, markerCenter }) => {
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  const customIcon = new Icon({
    iconUrl: require('../img/location-pin.png'),
    iconSize: [16, 16],
  });

  return (
    <div
      style={{
        margin: '0 0 0 8px',
        padding: '2px',
        border: '1px solid var(--bs-border-color)',
        borderRadius: '5px',
        boxSizing: 'border-box',
      }}
    >
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        center={markerCenter.center}
        zoom={markerCenter.zoom}
        scrollWheelZoom={true}
      >
        <ChangeView center={markerCenter.center} zoom={markerCenter.zoom} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {markers && markers.map((marker) => (
          <Marker key={marker.key} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
