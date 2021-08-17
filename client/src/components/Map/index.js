import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CAMPAIGNS } from "../../utils/queries"
import ReactMapGL, { Marker, Popup } from "react-map-gl";
// This is a dependency of react-map-gl even if you didn't explicitly install it
import mapboxgl from "mapbox-gl"; 
import RoomIcon from "@material-ui/icons/Room";
import axios from "axios";
import Auth from '../../utils/auth'
import { SignupButton } from "../SignupButton";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { Link } from "react-router-dom";


// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
export default function Map() {
  const { loading, data } = useQuery(QUERY_CAMPAIGNS);
  const campaigns = data?.getCampaigns || [];
  console.log(campaigns)

  const [viewport, setViewport] = useState({

    width: "100vw",
    height: "100vh",
    latitude: 30.7577,
    longitude: 18.4376,
    zoom: 2,
  });
  const [showPopup, togglePopup] = React.useState(false);
  const [currentPinId, setCurrentPinId] = useState(null);
  const [pins, setPins] = useState([]);
  

    // useEffect(() => {
    //     const getPins = async ()=> {
    //         try{
    //           const { long, lat } = campaigns
    //           setPins(res.data)
    //         } catch(err) {
    //           console.log(err)
    //         }
    //     };
    //     getPins();
    // }, [])

  const handleMarkerClick = (id) => {
    setCurrentPinId(id);
  };
  const signupStyle = {justifyContent: 'center', backgroundColor:'green', fontSize:40}

  return (
    <div>
    {Auth.loggedIn() ? (
    <div>
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1Ijoia3NlZGQiLCJhIjoiY2tzYngxdzVtMDdrMzJvcGNtYmFpdXVieiJ9.oeGFcgwDXXXnsB0FcuLUPw"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle="mapbox://styles/ksedd/cksc6kfgo0u8218qt31axgx6p"
    >
        
      {campaigns.map((p) => (
        <>
        
          <Marker
            latitude={parseInt(p.lat)}
            longitude={parseInt(p.long)}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <RoomIcon
            color='primary'
              style={{ fontSize: viewport.zoom * 10 }}
              onClick={() => handleMarkerClick(p._id)}
            />
          </Marker>
          {p._id === currentPinId && (
            <Popup
            latitude={parseInt(p.lat)}
            longitude={parseInt(p.long)}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setCurrentPinId(null)}
              // onClose={() => setCurrentPinId(null)}
              anchor="left"
            >
              <div>
                <Typography variant="h6">{p.title}</Typography>
                <Typography variant="body2">{p.description}</Typography>
                <Typography variant="body2" align="right" color="secondary">${p.fundsNeeded} needed to complete</Typography>
                <ButtonGroup size="small" color="secondary" variant="subtitle1">
                  <Button component={Link} to={`singlecampaign/${p._id}`}>Visit Campaign Page</Button>
                <Button component={Link} to={`profiles/${p.user[0].username}`} >Visit {p.user[0].username}'s Profile</Button>
                </ButtonGroup>
              </div>
            </Popup>
          )}
        </>
      ))}
    </ReactMapGL>
    </div> ) : (
      <div style={{ marginTop:0}}> 
        <div style={{ marginTop:0, marginBottom: '4rem', height:220, justifyContent: 'center'}}>
          <h1 style={{textAlign: 'center', fontSize:50}}>Welcome to B*UCKET</h1>
          <h2 style={{textAlign: 'center'}}>Sign Up to join our community of go-getters and bucket-listers.</h2>
          <div style={{textAlign:'center'}}><SignupButton style={signupStyle} /></div>
        </div>
      <div style={{height:610}}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoia3NlZGQiLCJhIjoiY2tzYngxdzVtMDdrMzJvcGNtYmFpdXVieiJ9.oeGFcgwDXXXnsB0FcuLUPw"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/ksedd/cksc6kfgo0u8218qt31axgx6p"
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
                <div>
                <Typography variant="h6">{p.title}</Typography>
                <Typography variant="body2">{p.description}</Typography>
                </div>
              </Popup>
            )}
          </>
        ))}
      </ReactMapGL>
      </div>
      </div>

    )}
    </div>
  );
}
