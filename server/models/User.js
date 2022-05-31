const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,

    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },

    groupSpecialty: {
      type: String,
      required: false,
    },
    isCoach: {
      type: Boolean, 
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String
    },
    motto: {
      type: String
    },
    why: {
      type: String
    },
    events: [{
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("fullName").get(() => {
  return `${this.firstName} ${this.lastName}`
})

const User = model('User', userSchema);

module.exports = User;