import { gql } from "@apollo/client";
export const QUERY_USERS = gql`
  {
    users {
      _id
      email
      username
      firstName
      lastName
      password
      bucketList {
        campaign {
          title
          description
          updates{
            content
            dateCreated
          }
          dateCreated
        }
      }
      location {
        address
      }
      avatar
    }
  }
`;
export const QUERY_CAMPAIGNS = gql`
  query getCampaigns {
    getCampaigns {
      _id
      title
      description
      fundsNeeded
      long
      lat
      user {
        username
      }
    }
  }
`;
export const QUERY_SINGLE_USER = gql`
{
  me {
  _id
  username
  email
  firstName
  LastName
  avatar }
}
`;

export const QUERY_SINGLE_CAMPAIGN = gql`
query getSingleCampaign($id: ID!) {
  getSingleCampaign(id: $id) {
    _id
    title
    description
    fundsNeeded
    long
    lat
    user {
      username
    }
    updates {
      description
    }
  }
}
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      firstName
      lastName
      avatar
      location {
        address
      }
      bucketList {
          title
          description
        }
      }
    }
`;

export const QUERY_BUCKETLIST = gql`
{
   campaign {
     _id
     title
     description
     fundsNeeded
   }
}
`;