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
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const UpdateCampaign = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();
  const paperStyle = { padding: "30px 20px", width: 700, margin: "20px auto"};
  const gridStyle = {borderRadius:15 };
  const headerStyle = { margin: 0 };
  // const avatarStyle = { backgroundColor: "#77D47D" };
  const submitStyle = { backgroundColor: "#77D47D", fontSize:20 };
  const textInputStyle = { marginBottom: "5px", marginTop: "5px" };
  const whiteBackStyle = {backgroundColor: 'white', marginBottom:20};
  const dropdownStyle = {marginBottom: 20};

  const [campaign, setCampaign] = React.useState('');

  const handleChange = (event) => {
    setCampaign(event.target.value);
  };


  return (
    <Grid align="center" style={gridStyle}>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          {/* <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar> */}
          <h2 style={headerStyle}>UPDATE CAMPAIGN</h2>
          <Typography variant="caption">
            Please fill out this form to create a new campaign
          </Typography>
        </Grid>
        <form>
          <FormControl className={classes.formControl} style={dropdownStyle}>
            <InputLabel id="demo-simple-select-helper-label">Campaign</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={campaign}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Climb Mt Everest</MenuItem>
              <MenuItem value={20}>Run and ultra-marathon</MenuItem>
              <MenuItem value={30}>Dive with Great White Sharks</MenuItem>
            </Select>
            <FormHelperText>Select a campaign to update</FormHelperText>
          </FormControl>
          <TextField

            id="newCampaignDescription"
            style={textInputStyle, whiteBackStyle}
            fullWidth
            label="Description"
            multiline
            rows={4}
            variant="outlined"
          />
          <Button
            id="updateCampaignSubmit"
            align="center"
            type="submit"
            variant="contained"
            style={submitStyle}
          >
            Post Update
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
