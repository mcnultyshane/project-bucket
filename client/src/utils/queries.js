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
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      firstName
      lastName
      avatar
    }
  }
`;
