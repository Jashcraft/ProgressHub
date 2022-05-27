const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find()
        .populate('clients');
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username })
        .populate('clients')

    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addClient: async (parent, args, context) => {
      if (context.user) {
        const thought = await clients.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { clients: clients._id } },
          { new: true }
        );

        return thought;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;