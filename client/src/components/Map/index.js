import React from "react";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import RoomIcon from "@material-ui/icons/Room";
import axios from "axios";

export default function Map() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -90.4376,
    zoom: 4,
  });
  const [showPopup, togglePopup] = React.useState(false);
  const [currentPinId, setCurrentPinId] = useState(null);
    const [pins, setPins] = useState([
    {
      _id: 5,
      campaign: "Climb Everest",
      username: "Kimber",
      lat: 27.988121,
      long: 86.924973
    },
    {
      _id: 6,
      campaign: "Swim the Red Sea",
      username: "Stevey",
      lat: 20.280231,
      long: 38.512573
    },
  ]);

  //   useEffect(() => {
  //       const getPins =async ()=> {
  //           try{
  //             const res = await axios.get()
  //             setPins(res.data)
  //           } catch(err) {
  //             console.log(err)
  //           }
  //       };
  //       getPins();
  //   }, [])

  const handleMarkerClick = (id) => {
    setCurrentPinId(id);
  };

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1Ijoia3NlZGQiLCJhIjoiY2tzYngxdzVtMDdrMzJvcGNtYmFpdXVieiJ9.oeGFcgwDXXXnsB0FcuLUPw"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle="mapbox://styles/ksedd/cksbxs7mh0lsa18qt69p56kc7"
    >
        
      {pins.map((p) => (
        <>
        
          <Marker
            latitude={p.lat}
            longitude={p.long}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <RoomIcon
              style={{ fontSize: viewport.zoom * 5 }}
              onClick={() => handleMarkerClick(p._id)}
            />
          </Marker>
          {p._id === currentPinId && (
            <Popup
              latitude={p.lat}
              longitude={p.long}
              closeButton={true}
              closeOnClick={true}
              onClose={() => setCurrentPinId(null)}
              anchor="left"
            >
              <div>{p.campaign}</div>
            </Popup>
          )}
        </>
      ))}
    </ReactMapGL>
  );
}
