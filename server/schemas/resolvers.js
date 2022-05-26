const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find()
        // .populate('Clients');
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username })
        // .populate('Clients')

    }
  },

}

module.exports = resolvers;