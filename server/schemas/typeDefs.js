const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Trainer {
    _id: ID
    username: String
    email: String
    groupSpeciality: String
    Credentials: String
    
  }

  `;

  module.exports = typeDefs;
