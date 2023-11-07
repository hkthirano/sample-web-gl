/// app.js
import React from 'react';
import { LineLayer } from '@deck.gl/layers';
import { Map, useControl } from 'react-map-gl';
import { MapboxOverlay } from '@deck.gl/mapbox';
import DeckGL from '@deck.gl/react';
import { MapView, FirstPersonView } from '@deck.gl/core'
import 'mapbox-gl/dist/mapbox-gl.css';

// DeckGL react component
function App() {
  const DeckGLOverlay = (props) => {
    const overlay = useControl(() => new MapboxOverlay(props));
    overlay.setProps(props);
    return null
  }

  const MAPBOX_ACCESS_TOKEN = '';
  const INITIAL_VIEW_STATE = {
    latitude: 38.875584,
    longitude: 139.7454316,
    bearing: 0,
    pitch: 0,
    zoom: 5,
  };
  const data = [{ sourcePosition: [139.7454316, 38.875584], targetPosition: [145.7454316, 40.875584] }];
  const layers = [
    new LineLayer({ id: 'line-layer', data })
  ];

  return (
    <div className="app">
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
      >
        <MapView id="map" width="50%" controller={true}>
          <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN} />
        </MapView>
        <FirstPersonView width="50%" x="50%" fovy={50} />
      </DeckGL>
      {/* <Map
        initialViewState={INITIAL_VIEW_STATE}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        style={{ width: '100vw', height: '100vh' }}
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      >
        <DeckGLOverlay layers={layers}></DeckGLOverlay>
      </Map> */}
    </div>
  );
}

export default App;
