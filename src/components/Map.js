import React, { Component } from 'react';
import ReactMapGL, {Marker, NavigationControl} from 'react-map-gl';
import './Map.css';

const API_KEY_MAPBOX = `${process.env.REACT_APP_API_KEY_MAPBOX}`;
// const API = 'https://developers.zomato.com/api/v2.1/search';

class Map extends Component {
// const Map = () => {

  render() {
    // console.log('lat updated', this.props.latLocation);
    const latUpdated = parseFloat(this.props.latLocation);
    const longUpdated = parseFloat(this.props.longLocation);

    const viewport = {
      latitude: latUpdated,
      longitude: longUpdated,
      zoom: 15,
      width: 500,
      height: 300
    }

    return (
      <ReactMapGL {...viewport}
        mapboxApiAccessToken={API_KEY_MAPBOX}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        containerStyle={{
          height: '100%',
          width: '500px'
        }}>
        <Marker className="marker" longitude={longUpdated} latitude={latUpdated} offsetLeft={-20} offsetTop={-10}
        >
        </Marker>
      </ReactMapGL>
    )
  }
}

export default Map;