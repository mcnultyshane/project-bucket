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
export const QUERY_SINGLE_USER = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
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
  export const GET_ME = gql`
  query me {
    me {
      _id
      email
      username
      avatar
      
      
    }
  }
`;

