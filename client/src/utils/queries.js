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
        buckets {
          name
        }
      }
      location {
        address
      }
      avatar
    }
  }
`;
