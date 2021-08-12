const { gql } = require('apollo-server-express');


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
    buckets: [Bucket]
  }


  type Bucket {
    _id: ID!
    name: String
    location: [Location]
    campaign: [Campaign]
    dateCreated: String
    
  }
  type Campaign {
    _id: ID
    name: String
    Contributers: [User]
    Updates: [Update]
    dateCreated: String
    # donations: Float
  }

  type Update { 
      _id: ID
      content: String
      dateCreated: String
      # lastUpdated: String
  }


  type Auth {
    token: ID
    user: User
  }

  type Query {

    users: [User]
    getSingleUser(username: String!): User
    me: User

  }

  type Mutation {
    addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

