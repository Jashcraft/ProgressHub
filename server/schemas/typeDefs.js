const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    groupSpeciality: String
    
    
  }
  type Auth {
    token: ID!
    user: User!
  }
  type Query {
    users: [User]
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, groupSpecialty: String): Auth
  }
  `;
// Added mutation for login and adduser (From Class Module 21) will see if this is usable.


module.exports = typeDefs;
