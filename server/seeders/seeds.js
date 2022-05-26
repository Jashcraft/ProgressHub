const userSeeds = require('./userSeed.json');
const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
    try {

      await User.deleteMany({});

      await User.create(userSeeds);

      // copied from module. is this the right setup to add a client to
     // for (let i = 0; i < thoughtSeeds.length; i++) {
       // const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
        // const user = await User.findOneAndUpdate(
          //{ username: thoughtAuthor },
          //{
           // $addToSet: {
             // thoughts: _id,
            //},
          //}
        //);
     // }


    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });