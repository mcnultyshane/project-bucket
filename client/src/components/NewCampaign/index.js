import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { makeStyles } from '@material-ui/core/styles';

export default function NewCampaign() {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  
  const classes = useStyles();
  const paperStyle = { padding: "30px 20px", width: 700, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#77D47D" };
  const submitStyle = { backgroundColor: "#77D47D", fontSize:20 };
  const textInputStyle = { marginBottom: "5px", marginTop: "5px" };
  return (
    <Grid align="center">
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          {/* <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar> */}
          <h2 style={headerStyle}>NEW CAMPAIGN</h2>
          <Typography variant="caption">
            Please fill out this form to create a new campaign
          </Typography>
        </Grid>
        <form>
          <TextField
            id='newCampaignTitle'
            fullWidth
            style={textInputStyle}
            label="Campaign Title"
            variant="outlined"
          />
          <TextField
            id='newCampaignDescription'
            style={textInputStyle}
            fullWidth
            label="Description"
            multiline
            rows={4}
            variant="outlined"
          />
          <TextField
            id='newCampaignFunds'
            fullWidth
            style={textInputStyle}
            label="Funds Needed"
            variant="outlined"
          />
          <TextField
            id='newCampaignLocation'
            fullWidth
            style={textInputStyle}
            label="Location"
            variant="outlined"
          />
          <form className={classes.container} noValidate>
            <TextField
              id='newCampaignDate'
              style={textInputStyle}
              id="date"
              label="Timeframe"
              type="date"
              // defaultValue="2021-08-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>

          <Button
            id='newCampaignSubmit'
            align="center"
            type="submit"
            variant="contained"
            style={submitStyle}
          >
            Create Campaign
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};