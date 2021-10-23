import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 1.3483,
      lng: 103.6831
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh',  width:'50%',  position: 'absolute', left: '28%', top: '60%',
      transform: 'translate(-50%, -50%)' }}>
        <GoogleMapReact
            ////// uncomment bootstrap when inputing key "Backend"/////
         // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;