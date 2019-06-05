import React, { Component } from 'react';
import ReactMapGL, {Marker, NavigationControl} from 'react-map-gl';
import './Map.css';

const API_KEY_MAPBOX = `${process.env.REACT_APP_API_KEY_MAPBOX}`;
// const API = 'https://developers.zomato.com/api/v2.1/search';

class Map extends Component {
// const Map = () => {
  render() {
    const markerLat = parseFloat(this.props.latLocation);
    const markerLong = parseFloat(this.props.longLocation);
    console.log('current user lat', this.props.userLat);
    const userLat = this.props.userLat;
    const userLong = this.props.userLong;

    const viewport = {
      latitude: markerLat,
      longitude: markerLong,
      zoom: 15,
      width: 500,
      height: 300,
      interactive: 'true'
    }

    return (
      <ReactMapGL {...viewport}
        mapboxApiAccessToken={API_KEY_MAPBOX}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        containerStyle={{
          height: '100%',
          width: '500px'
        }}>
        <Marker className="marker" longitude={markerLong} latitude={markerLat} offsetLeft={-20} offsetTop={-10}
        ></Marker>
      {/*change color of second marker, have it loaded to show where you are.*/}
        {/*<Marker className="human-marker" longitude={userLong} latitude={userLat} offsetLeft={-20} offsetTop={-10}></Marker>*/}
      </ReactMapGL>
    )
  }
}

export default Map;