const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
        .select('-__v -password')
        // .populate('Clients');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        // .populate('Clients')

    }
  },
  Mutation: {
    addUser: async () => {

    },
    login: async () => {
      
    }
  }

}

module.exports = resolvers;