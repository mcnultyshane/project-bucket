import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, Modal, Backdrop, Container ,Button, ButtonGroup, Grid,Tooltip, Typography, IconButton} from "@material-ui/core";
import {Autorenew, PostAddIcon} from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../../utils/queries";
import { useMutation } from '@apollo/client';
import { REMOVE_CAMPAIGN } from "../../../utils/mutations";
import Auth from "../../../utils/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  container: {
    gridGap: theme.spacing(2),
  },
  profileCard: {
    marginTop: "5px",
  },
  profileCardContent: {
    color: "white",
    backgroundColor: "gray",
    padding: "10px",
    justifyContent: "center",
  },
  profileCardButtons: {
    justifyContent: "center",
    marginTop: theme.spacing(3),
  },
  campaignCard: {
    minWidth: "50%",
    marginTop: "15px",
    color: "white",
    backgroundColor: "gray",
  },
  campaignCardButtons: {
    justifyContent: "flex-end",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  avatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    alignSelf: "center",
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
}));

export default function CampaignCard(props) {

  const { data } = useQuery(QUERY_ME);
  const userData = data?.me || [];
  const [removeCampaign, { error }] = useMutation(REMOVE_CAMPAIGN)

  const handleDeleteCampaign = async (campaignId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      console.log(campaignId)
      const { data } = await removeCampaign({
        variables: {
        campaignId
        }
      })
      window.location.reload(true);
    } catch (err) {
      console.error(err);
    }
  };

  
  const classes = useStyles();
 
  // console.log(user);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={3}
    >
      {/* This is the avatar and profile container */}
      <Grid className={classes.profileCard} item sm={2}>
        <Card className={classes.profileCardContent}>
          <CardContent>
            <Avatar
              alt="Remy Sharp"
              src={userData.avatar}
              className={classes.avatar}
            />
            <Typography
              variant="h5"
              component="h1"
              style={{ textAlign: "center" }}
            >
              {userData.firstName} {userData.lastName}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              style={{ textAlign: "center" }}
            >
              Philadelphia, PA
            </Typography>
          </CardContent>
          <CardActions className={classes.profileCardButtons}>
            <ButtonGroup variant="contained">

              <Button size="small">Edit Profile</Button>
              <Button type="button">Edit Avatar</Button>
              <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                // closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                {/* <div  className={classes.paper}>
                  <EditAvatar user={userData}/>
                </div> */}
              </Modal>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Grid>

      {/* This is where the campaigns are spread on cards */}
      <Grid item xs={8}>
        {props.campaigns.map((campaign) => {
          return (
            <Grid item key={campaign._id}>
              <Card className={classes.campaignCard} xs={6} spacing={2}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h1"
                    style={{ textAlign: "center" }}
                  >
                    {campaign.title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {campaign.description}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.campaignCardButtons}>
                    <ButtonGroup variant="contained" >
                    <Button size="small" component={Link} to={`/singlecampaign/${campaign._id}`}>Edit Campaign</Button>

                    <Tooltip title="Delete" placement="bottom-end">
                      <Button onClick={() => handleDeleteCampaign(campaign._id)} size="small">
                        <DeleteIcon />
                      </Button>
                    </Tooltip>
                  </ButtonGroup>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
