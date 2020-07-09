import React, { Component } from 'react';
import L from 'leaflet';

import './map.styles.scss';

import Trails from '../../pages/trails/trails.component';

const style = {
  width: '100%',
  height: '300px'
};

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
    return <div id='map' style={style} />;
  }
}

export default Map;
