import React, { useState, useEffect } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Button, ButtonGroup, Grid, Typography, Modal, Backdrop } from "@material-ui/core";
import PostAddIcon from '@material-ui/icons/PostAdd';
import NewCampaign from "../../components/NewCampaign";

const testArray = [1, 2, 3, 4, 5];



export default function CampaignList() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Button endIcon={<PostAddIcon />} variant="contained" color="secondary" onClick={handleOpen}>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
            <NewCampaign />
      </Modal>
      Start New Campaign
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
