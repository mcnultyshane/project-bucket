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
    bucketList: [BucketList]
    location: [Location]
    
  }

  type Location {
    _id: ID!
    address: String
    coordinates: String
  }

  # type BucketList {
  #  _id: ID!
  #  campaigns: [Campaign]
  #}

  type Campaign {
    _id: ID!
    title: String
    description: String
    contributors: [User]
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
  #   contributors: [User]
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
    addCampaign(title: String!, description: String!, fundsNeeded: Float): Campaign
    updateCampaign(campaignId: ID, content: String): Campaign
  }
`;

module.exports = typeDefs;
