const { Schema, model } = require('mongoose');

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      required: true,
      trim: true
    },
    timeSlot: {
      type: Date,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    ownerID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    participants: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);


const Event = model('Event', eventSchema);

module.exports = Event;