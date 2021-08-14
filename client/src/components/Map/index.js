import React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import RoomIcon from '@material-ui/icons/Room';
import axios from 'axios';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577,
    longitude: -90.4376,
    zoom: 4
  });
  const [showPopup, togglePopup] = React.useState(false);
  const [pins, setPins] = useState([])

  useEffect(() => {
      const getPins =async ()=> {
          try{
            const res = await axios.get()
            setPins(res.data)
          } catch(err) {
            console.log(err)
          }
      };
      getPins();
  }, [])

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1Ijoia3NlZGQiLCJhIjoiY2tzYngxdzVtMDdrMzJvcGNtYmFpdXVieiJ9.oeGFcgwDXXXnsB0FcuLUPw"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/ksedd/cksbxs7mh0lsa18qt69p56kc7"> 

            {/* <Marker latitude={35.9940329} longitude={-78.898619} offsetLeft={-20} offsetTop={-10}>
            <RoomIcon style={{fontSize:viewport.zoom * 5}} />
      </Marker> */}
      {/* {showPopup &&  */}
      {/* <Popup
          latitude={35.9940329}
          longitude={-78.898619}
          closeButton={true}
          closeOnClick={true}
          onClose={() => togglePopup(true)}
          anchor="left" >
          <div>You are here</div>
        </Popup> */}
        {/* } */}
      </ReactMapGL>
  );
}