import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'

const GoogleMap = ({ apiKey }) => {
  const center = {
    lat: 42.696137,
    lng: 2.891478
  }

  const zoom = 16

  return (
    <div style={{
      height: '300px',
      width: '300px',
      marginTop: '35px',
      boxShadow: '0 0 2px 1px rgb(70, 47, 10)'
    }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: apiKey
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <MapMarker 
          lat={42.696137} 
          lng={2.891478}
        />
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap

