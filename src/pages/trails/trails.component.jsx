import React, { Component } from 'react';
import axios from 'axios';

import './trails.styles.scss';

import TrailInfo from '../../components/trail-info/trail-info.component';
import Map from '../../components/map/map.component';

class Trails extends Component {
  state = {
    location: {
      lat: null,
      lng: null
    },
    trails: [],
    error: null,
    trailCoordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  };

  handleSelectTrail = (lat, lng) => {
    this.setState({
      trailCoordinates: {
        lat,
        lng
      }
    });
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      this.getLocation,
      this.getLocationError
    );
  }

  getLocation = pos => {
    const { latitude, longitude } = pos.coords;
    this.setState(
      {
        location: { lat: latitude, lng: longitude },
        trailCoordinates: { lat: latitude, lng: longitude }
      },
      this.fetchTrails
    );
  };

  getLocationError = err => {
    this.setState({ error: err });
  };

  fetchTrails = async () => {
    const KEY = process.env.REACT_APP_KEY;

    try {
      const response = await axios.get(
        `https://www.hikingproject.com/data/get-trails?lat=${this.state.location.lat}&lon=${this.state.location.lng}&maxDistance=10&key=${KEY}`
      );

      this.setState({ trails: response.data.trails.slice(0, 5) });

      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <div className='container'>
        <h2>TRAILS</h2>
        <div className='section-container'>
          {this.state.trails.map((trail, idx) => (
            <TrailInfo
              key={idx}
              idx={idx}
              handleSelectTrail={this.handleSelectTrail}
              {...trail}
            />
          ))}
        </div>
          <Map
            lat={this.state.trailCoordinates.lat}
            lng={this.state.trailCoordinates.lng}
          />
        </div>
    );
  }
}

export default Trails;
