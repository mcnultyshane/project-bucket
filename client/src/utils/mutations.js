import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
    $avatar: String
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
      avatar: $avatar
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_CAMPAIGN = gql`
mutation addCampaign($title: String!, $description: String!, $fundsNeeded: String!, $long: String!, $lat: String!) {
  addCampaign(title: $title, description: $description, fundsNeeded: $fundsNeeded, long: $long, lat: $lat){
    _id
    title
    description
    fundsNeeded
    long
    lat
    user {
      username
      email
    }
  }
}
`;

export const CAMPAIGN_UPDATE = gql`
mutation updateCampaign ($campaignId: ID, $content: String) {
  updateCampaign(campaignId: $campaignId, content: $content) {
    _id
    title
    updates{
      _id
      content
    }
  }
}`

