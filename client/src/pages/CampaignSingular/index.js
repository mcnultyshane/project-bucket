import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { Redirect, useParams } from 'react-router-dom';
import { QUERY_SINGLE_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import { Button, Grid } from "@material-ui/core";
import PostAddIcon from '@material-ui/icons/PostAdd';
import CampaignCard  from "./components";
import { UpdateCard } from "./components";

const campaign = [
    {
      id: 1,
      name: "Go to Space",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    }
 ]
 const updates = [
    {
        id: 1,
        name: "Go to Space Update",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  
    },

 ]


export default function CampaignSingular() {


        return (
          <div >
              <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
      
          {/* <h1>{user.username}</h1> */}
          <CampaignCard campaigns={campaign} />
          <UpdateCard updates={updates}
          // userId={user._id} 
          
          />
      </Grid>
      </div>
        );
}