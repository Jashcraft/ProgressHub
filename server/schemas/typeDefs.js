const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    usertype: Int
    username: String
    email: String
    groupSpeciality: String
    
  }


  type Query {
    users: [User]
    user: User
  } 

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addClient(userId: ID!): User                                       
  }
  `;

  // Does addClient need to be addUser?

  module.exports = typeDefs;
