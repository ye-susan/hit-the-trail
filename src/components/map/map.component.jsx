import React, { Component } from 'react';
import L from 'leaflet';

import './map.styles.scss';

import Trails from '../../pages/trails/trails.component';


class Map extends Component {
  // constructor(props) {
  //   super(props);
  //   this.props.lat
  // }

  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [this.props.lat, this.props.lng],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }

  render() {
    return (
      <div>
        <h2>MAP</h2>

        {/* enables Leaflet to display correctly */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossorigin=""
        />
        <div id='map' />
        <br/>
      </div>
    );
  }
}

export default Map;
