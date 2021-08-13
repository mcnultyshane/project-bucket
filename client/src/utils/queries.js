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
