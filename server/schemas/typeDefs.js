const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    email: String
    username: String
    firstName: String
    lastName: String
    password: String
    bucketList: [BucketList]
    location: [Location]
    avatar: String
  }

  type Location {
    _id: ID!
    address: String
    coodinates: String
  }

  type BucketList {
    _id: ID!
    campaigns: [Campaign]
  }

  type Campaign {
    _id: ID!
    title: String
    description: String
    contributers: [User]
    updates: [Update]
    dateCreated: String
    dateCompleted: String
    isComplete: Boolean
    location: [Location]
    fundsNeeded: Float
    donations: Float
  }

  type Update {
    _id: ID
    content: String
    dateCreated: String
    # author: User!
    # lastUpdated: String
  }

  # input campaignDetails {
  #   title: String
  #   description: String
  #   contributers: [User]
  #   updates: [Update]
  #   dateCreated: String
  #   dateCompleted: String
  #   isComplete: Boolean
  #   location: [Location]
  #   fundsNeeded: Float
  #   donations: Float
  # }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    getSingleUser(username: String!): User
    getCampaigns: [Campaign]
    getSingleCampaign(id: ID!): Campaign
    me: User
  }

  type Mutation {
    addUser(
      username: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
    addCampaign(title: String!, description: String!, fundsNeeded: Float): Campaign
    updateCampaign(campaignId: ID, content: String): Campaign
  }
`;

module.exports = typeDefs;
