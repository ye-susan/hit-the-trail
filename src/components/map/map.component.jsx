import React, { Component } from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';

import './map.styles.scss';

class Map extends Component {
  render() {
    const position = [this.props.lat, this.props.lng];

    return (
      <div id='map'>
        <h2>MAP</h2>
        <LeafletMap center={position} zoom={16}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        </LeafletMap>
        <br />
      </div>
    );
  }
}

export default Map;
