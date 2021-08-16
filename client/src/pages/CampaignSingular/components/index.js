
import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, Paper, Box, Container ,Button, ButtonGroup, Grid,Tooltip, Typography, IconButton} from "@material-ui/core";
import {Autorenew, PostAddIcon} from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',

    margin: 'auto',

  },
  container: {
    gridGap: theme.spacing(3),
  },
  profileCard: {
    marginTop: '15px',
  },
  profileCardContent: {
    color: 'white' ,
     backgroundColor: 'gray',
     padding: '10px',
     justifyContent: "center"
  },
  profileCardButtons:{
    justifyContent: "center",
    marginTop:theme.spacing(3)
  },
  campaignCard: {
    minWidth: '50%',
    marginTop: '15px',
    color: 'white' , 
    backgroundColor: 'gray'
  },
  campaignCardButtons:{
    justifyContent: "flex-end"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  avatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    alignSelf: 'center',
    margin: 'auto',
    marginBottom: theme.spacing(2),
  },



}));


export default function CampaignCard(props) {
  const classes = useStyles();
  return (
  
    <Grid className={classes.root} container direction="row" justifyContent="center" alignItems="flex-start" spacing={3}>

{/* This is the avatar and profile container */}
    <Grid className={classes.profileCard} item  alignItems="center"  item xs={2} >
      <Card className={classes.profileCardContent} >
      <CardContent>
        <Avatar  alt="Remy Sharp" src="https://res.cloudinary.com/dllm7cfrg/image/upload/v1628948544/wallpapertip_cat-with-sunglasses-wallpaper_308464_fh8tf8.jpg" className={classes.avatar} />
        <Typography variant="h5" component="h1" style={{textAlign: 'center'}}>
          Delores Abernathy
        </Typography>
        <Typography variant="body2" component="p" style={{textAlign: 'center'}}>
          Philadelphia, PA
        </Typography>
      </CardContent>


      </Card>
    </Grid>

{/* This is where the campaign is displayed*/}
      <Grid item xs={8}>
          {props.campaigns.map((campaign) => {
            return (
              <Grid item  key={campaign.id} >
        
                <Card  className={classes.campaignCard} xs={6} spacing={2} >
                  <CardContent>
                    <Typography variant="h5" component="h1" style={{textAlign: 'center'}}>
                    {campaign.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {campaign.description}
                    </Typography>
                  </CardContent>

                </Card>
            </Grid>
              )
          })}
        </Grid>
{/* This is where the updates are displayed*/}


</Grid>
  );
}

export function UpdateCard(props) {
    const classes = useStyles();
    return (

<Grid className={classes.profileCard} item xs={8}>
          {props.updates.map((updates) => {
            return (
              <Grid item  key={updates.id} >
        
                <Card  className={classes.campaignCard} xs={6} spacing={2} >
                  <CardContent>
                  <Typography variant="h5" component="h1" style={{textAlign: 'center'}}>
                    {updates.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {updates.description}
                    </Typography>
                  </CardContent>

                </Card>
            </Grid>
              )
          })}
        </Grid>
);
}
