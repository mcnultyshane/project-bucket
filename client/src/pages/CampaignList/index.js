import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import PostAddIcon from '@material-ui/icons/PostAdd';
import { NewCampaignButton } from "../../components/NewCampaignButton";
import { QUERY_SINGLE_USER, QUERY_ME} from '../../utils/queries';
import { Link } from "react-router-dom";


const testArray = [1, 2, 3, 4, 5];



export default function CampaignList() {
   const { userId } = useParams();
   const { data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );
  const user = data?.me || data?.user || {};
  const gradientStyle = {backgroundImage: 'linear-gradient(ro right, black, gray, black)'}

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <NewCampaignButton userId={user._id}  />
      
      {testArray.map((item, index) => {
          return (
            
        <Grid item xs={6} key={index} style={{minWidth: '50%', marginTop: '15px',  borderRadius: '20px'}}>
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
              <Button size="small" component={Link} to="/singlecampaign">View Campaign</Button>
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
