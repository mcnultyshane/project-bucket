import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { Redirect, useParams } from 'react-router-dom';
import { QUERY_SINGLE_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import { Button, Grid } from "@material-ui/core";
import PostAddIcon from '@material-ui/icons/PostAdd';
import CampaignCard  from "./components";
import { UpdateCard } from "./components";
import { UpdateCampaignButton } from "../../components/UpdateCampaignButton";

 

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
           <UpdateCampaignButton />
          {/* <h1>{user.username}</h1> */}
          <CampaignCard />
          <UpdateCard 
          // userId={user._id} 
          
          />
      </Grid>
      </div>
        );
}