const { AuthenticationError } = require('apollo-server-express');
const { User, Event } = require('../models');
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
        .populate('events');
      // .populate('Clients')

    },
    events: async () => {
      console.log('I am here');
      try {
        const events = await Event.find()
        .select('-__v')
        .populate('participants')
        .populate('ownerID');

        return events;
      } catch(err) {
        console.log(err)
      }

    },
    event: async (parent, {id}) => {
      return Event.findOne({id})
      .select('-__v')
    },
    me: async (parent, args, context) => {
      if (context.user){
        const userData = await User.findOne(
          {
            _id: context.user._id
          }
        )
        .select("-__v -password")
        .populate("events")
        return userData
      }
      throw new AuthenticationError("No User Signed In")
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
    },
    userUpdate: async (parent, args, context) => {
      if (context.user){
        const {userUpdateInput} = args
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id},
          { ...userUpdateInput },
          { new: true }
        )
        return updatedUser;
      }
      throw new AuthenticationError('T̸͉̹̟̝̪͂̾̓̒̎̔̿̀͝H̵͕͔̦͑̐̌̑̃͌͆͂̓̏̈́̕͘͝Ề̴̢̛̠̫͉͖̙͇̊̓̈́̄̇͋̊̈͝ͅ ̷̧͖̱̣͍̹͈̲̤̘͔̳̗͈̱̈́̈͂̎͋̇̅̔̈̓͒͑̆͠U̶̢̲̯̣̥̜̩̎̓̂͘͜S̴̢̘̞͚̜͔̲̻͖͉̝̦̱̳̅̀͗̊͒̽̍̊͂̅͜͝E̸̠͌͐̓̈́́̃̀̀̔̄̄̈͑͘͠͝R̴̢̛̥̖͓̞̳͉̰̰̩͖̺̹̔̒̊͗̇̋͂̔̽͂͘̚̕͘̕ͅ ̵̧̬̹͔̯̱̝͔͔̬̤̙̟̗̈́͂̓̑͗͋̎̌̈̉̈́͋̂̕̕͝͝͝I̷̡̠̺͕͖͔̤̹̹͈̤͐̇̐̌̾̽͂̈́̈́̉͌́̆ͅŠ̶͎͖͓͚͓̲͝ ̵̢̡͈̦̪̪̝͙̟̫͊̇̓̀̃̎͒͗̕̕ͅĨ̶̡̹͇̯̭̣̼͚̺̣̦͈̬̺̗̳͉̑̎̀̐̍̊͑̃̅̆̒́͌̓̂̔ͅǸ̷͇͈̹͉̦̞̖̹̟̰̞̌̈́̿͊̄͂͘͝ ̶̢̥̗̦̙̦̝͔̥̠̗̭̫͔̜̐͜ͅÃ̷̧̢̭̫̟̯̹͇̊̉̇͊̚̚̕͜͝ ̸̛̲͈̣̗͔̹̭̳̳͕̀̋͗͑́̚͝ͅB̸̢̨̛͇̤̩̬͙̠͔̮̩̮͈͕̰̈̓͋̍͐͊̀̐́̿̂̾̎È̶͍͑̎̎͋̒̽͂̃̆͒Ţ̴̮̩͉̝̱͓̼̟̃̄̀̽̎̏͒̿̓͒͗́͘̕T̵̨̠͓̞̝͓͈̬̝͐́̈̈́̇̂͌̎̈́̒͝E̷͍̜̺̼̯̔̅̉̃Ŗ̸̪̝̰̝̇͐̓̅̔̽̏͛͆̐͆̈́̚̚ ̷̨̦͖̫̬̦̙̩̀̒̀͂̾͛̓̃̀̕P̴̛̘̺͈̬̺̱̒̋͆́͐͒̏̿̿͜Ļ̶̼͈̮̮̇A̷̯͎̩̼̙͙͊͑͒C̸͍̩̰̞̣̞͛̌̌̅́͝E̴̢̨̞̻͙̳̠̟̯̲͚͇̰͉̋̋̐͝')
    },
    registerEvent: async (parent, args, context) => {
      if(context.user){
        const {eventId} = args;
        const updatedUser = await User.findByIdAndUpdate(
          {_id: context.user._id},
          {$push: {events: eventId}},
          {new: true}
        )
        const updatedEvent = await Event.findByIdAndUpdate(
          {_id: eventId},
          {push: {participants: context.user._id}}
        )
        return updatedUser
      }
      throw new AuthenticationError('T̸͉̹̟̝̪͂̾̓̒̎̔̿̀͝H̵͕͔̦͑̐̌̑̃͌͆͂̓̏̈́̕͘͝Ề̴̢̛̠̫͉͖̙͇̊̓̈́̄̇͋̊̈͝ͅ ̷̧͖̱̣͍̹͈̲̤̘͔̳̗͈̱̈́̈͂̎͋̇̅̔̈̓͒͑̆͠U̶̢̲̯̣̥̜̩̎̓̂͘͜S̴̢̘̞͚̜͔̲̻͖͉̝̦̱̳̅̀͗̊͒̽̍̊͂̅͜͝E̸̠͌͐̓̈́́̃̀̀̔̄̄̈͑͘͠͝R̴̢̛̥̖͓̞̳͉̰̰̩͖̺̹̔̒̊͗̇̋͂̔̽͂͘̚̕͘̕ͅ ̵̧̬̹͔̯̱̝͔͔̬̤̙̟̗̈́͂̓̑͗͋̎̌̈̉̈́͋̂̕̕͝͝͝I̷̡̠̺͕͖͔̤̹̹͈̤͐̇̐̌̾̽͂̈́̈́̉͌́̆ͅŠ̶͎͖͓͚͓̲͝ ̵̢̡͈̦̪̪̝͙̟̫͊̇̓̀̃̎͒͗̕̕ͅĨ̶̡̹͇̯̭̣̼͚̺̣̦͈̬̺̗̳͉̑̎̀̐̍̊͑̃̅̆̒́͌̓̂̔ͅǸ̷͇͈̹͉̦̞̖̹̟̰̞̌̈́̿͊̄͂͘͝ ̶̢̥̗̦̙̦̝͔̥̠̗̭̫͔̜̐͜ͅÃ̷̧̢̭̫̟̯̹͇̊̉̇͊̚̚̕͜͝ ̸̛̲͈̣̗͔̹̭̳̳͕̀̋͗͑́̚͝ͅB̸̢̨̛͇̤̩̬͙̠͔̮̩̮͈͕̰̈̓͋̍͐͊̀̐́̿̂̾̎È̶͍͑̎̎͋̒̽͂̃̆͒Ţ̴̮̩͉̝̱͓̼̟̃̄̀̽̎̏͒̿̓͒͗́͘̕T̵̨̠͓̞̝͓͈̬̝͐́̈̈́̇̂͌̎̈́̒͝E̷͍̜̺̼̯̔̅̉̃Ŗ̸̪̝̰̝̇͐̓̅̔̽̏͛͆̐͆̈́̚̚ ̷̨̦͖̫̬̦̙̩̀̒̀͂̾͛̓̃̀̕P̴̛̘̺͈̬̺̱̒̋͆́͐͒̏̿̿͜Ļ̶̼͈̮̮̇A̷̯͎̩̼̙͙͊͑͒C̸͍̩̰̞̣̞͛̌̌̅́͝E̴̢̨̞̻͙̳̠̟̯̲͚͇̰͉̋̋̐͝')
    }

  }
}

module.exports = resolvers;