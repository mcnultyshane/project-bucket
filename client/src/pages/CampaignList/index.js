import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import PostAddIcon from '@material-ui/icons/PostAdd';
import { NewCampaignButton } from "../../components/NewCampaignButton";
import { QUERY_SINGLE_USER, QUERY_ME, QUERY_CAMPAIGNS} from '../../utils/queries';
import { Link } from "react-router-dom";


const testArray = [1, 2, 3, 4, 5];



export default function CampaignList( {userId}) {
  const { loading, data } = useQuery(QUERY_CAMPAIGNS);
  const campaigns = data?.getCampaigns || [];
  console.log(campaigns)
  //  const { userId } = useParams();
  //  const { data } = useQuery(
  //   userId ? QUERY_SINGLE_USER : QUERY_ME,
  //   {
  //     variables: { userId: userId },
  //   }
  // );
  // const user = data?.me || data?.user || {};
  // const gradientStyle = {backgroundImage: 'linear-gradient(ro right, black, gray, black)'}

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <NewCampaignButton userId={userId}  />
      {campaigns.map((campaign) => {
          return (
            
        <Grid item xs={6} key={campaign._id} style={{minWidth: '50%', marginTop: '15px',  borderRadius: '20px'}}>
          <Card style={{backgroundColor: 'gray', color: 'white'}}>
            <CardContent>
              <Typography variant="h5" component="h1" style={{textAlign: 'center'}}>
                {campaign.title} 
              </Typography>
              <Typography variant="body2" component="p">
                {campaign.description}
              </Typography>
            </CardContent>
            <CardActions>
              <ButtonGroup variant="contained" >
              <Button size="small" component={Link} to="/singlecampaign">View Campaign</Button>
              <Button component={Link} to={`/profiles/${campaign.user[0].username}`} size="small">View User's Profile</Button>
              </ButtonGroup>
            </CardActions>
          </Card>
        </Grid>
          )
      })}
    </Grid>
  );
}
