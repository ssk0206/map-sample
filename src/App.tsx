import React, { useState } from "react";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";

// import { paris } from "./mapData";

import "./App.css";

// 参考
// https://leaflet-extras.github.io/leaflet-providers/preview/

function App() {
  // const [location, setLocation] = useState<LatLngExpression[]>([
  //   {
  //     lat: 35.3607411,
  //     lng: 138.727262,
  //   },
  //   {
  //     lat: 135.3607411,
  //     lng: 238.727262,
  //   },
  //   {
  //     lat: 15.3607411,
  //     lng: 28.727262,
  //   },
  // ]);

  const [location] = useState<LatLngExpression[]>([
    [35.3607411, 138.727262],
    [135.3607411, 118.727262],
    [235.3607411, 18.727262],
  ]);

  const position = new LatLng(1, 1);

  return (
    <div className="App">
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png"
        />
        <Polygon pathOptions={{ color: "purple" }} positions={location} />
      </MapContainer>
    </div>
  );
}

export default App;
