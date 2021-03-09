import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'

const GoogleMap = () => {
  const center = {
    lat: 42.696137,
    lng: 2.891478
  }

  const zoom = 16

  return (
    <div style={{
      height: '320px',
      width: '320px',
      marginTop: '35px'
    }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.googleMapKey
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

