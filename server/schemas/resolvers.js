const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const Event = require('../models/Event');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('events');
      // .populate('Clients');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
      // .populate('Clients')

    },
    events: async () => {
      return Event.find()
      .select('-__v')
    },
    event: async (parent, {id}) => {
      return Event.findOne({id})
      .select('-__v')
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user)
      return {token, user};

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
      const token = signToken(user)
      return {token, user};
    },
    addEvent: async (parent, args, context) => {
      if (context.user){
        const {eventInput} = args;
        const newEvent = await Event.create({...eventInput, ownerID: context.user._id})

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: {events: newEvent._id} },
          { new: true }
        );

        return newEvent;
      }
      throw new AuthenticationError('Incorrect credentials')
    }
  }
}

module.exports = resolvers;