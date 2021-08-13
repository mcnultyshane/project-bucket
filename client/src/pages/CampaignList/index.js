import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import PostAddIcon from '@material-ui/icons/PostAdd';
import { NewCampaignButton } from "../../components/NewCampaignButton";

const testArray = [1, 2, 3, 4, 5];



export default function CampaignList() {

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Button endIcon={<PostAddIcon />} variant="contained" color="secondary">
      <NewCampaignButton />
      </Button>
      {testArray.map((item) => {
          return (
            
        <Grid item xs={6} spacing={2} style={{minWidth: '50%', marginTop: '15px', backgroundColor: '#282c34', borderRadius: '20px'}}>
          <Card style={{backgroundColor: 'gray', color: 'white'}}>
            <CardContent>
              <Typography variant="h5" component="h1" style={{textAlign: 'center'}}>
                Title {item.index}
              </Typography>
              <Typography variant="body2" component="p">
                the stuff...
              </Typography>
            </CardContent>
            <CardActions>
              <ButtonGroup variant="contained" >
              <Button size="small">View Campaign</Button>
              <Button size="small">View User's Profile</Button>
              </ButtonGroup>
            </CardActions>
          </Card>
        </Grid>
          )
      })}
    </Grid>
  );
}
