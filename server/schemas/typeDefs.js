const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    username: String
    password: String
    avatar: String
    bucketList: [Campaign]
    location: [Location]
  }

  type Location {
    _id: ID!
    address: String
    coordinates: String
  }

  type Campaign {
    _id: ID!
    title: String
    description: String
    contributors: [User]
    updates: [Update]
    dateCreated: String
    dateCompleted: String
    isComplete: Boolean
    long: String
    lat: String
    fundsNeeded: String
    donations: Float
    user: [User]
  }

  input AddCampaign {
    _id: ID
    title: String
    description: String
    fundsNeeded: String
    long: String
    lat: String
  }

  type Update {
    _id: ID
    description: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    getSingleUser(username: String!): User
    getCampaigns(username: String): [Campaign]
    getSingleCampaign(campaignId: ID!): Campaign
    me: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      username: String!
      email: String!
      password: String!
      avatar: String
    ): Auth

    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    
    login(email: String!, password: String!): Auth
    addCampaign(
      title: String!, description: String!, fundsNeeded: String!, long: String!, lat: String! 
    ): Campaign
    updateCampaign(campaignId: ID, content: String): Campaign
    removeCampaign(campaignId: ID!): Campaign
  }
`;

module.exports = typeDefs;
