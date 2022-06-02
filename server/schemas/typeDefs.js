const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    fullName: String
    email: String
    groupSpecialty: String
    isCoach: Boolean
    city: String!
    events: [Event]
    state: String
    motto: String
    why: String

    
  }
  type Event {
    _id: ID
    title: String
    description: String
    location: String
    timeSlot: String
    duration: Int
    ownerID: User
    participants: [User]
  }
  input EventInput {
    title: String
    description: String
    location: String
    timeSlot: String
    duration: Int
    ownerID: ID
  }
  input UpdateUserInput {
    groupSpecialty: String
    city: String!
    state: String
    motto: String
    why: String
  }
  type Auth {
    token: ID!
    user: User!
  }
  type Query {
    users: [User]
    user(id: ID): User
    event(id: ID): Event
    events: [Event]
    me: User
  }
  

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, groupSpecialty: String, isCoach: Boolean!, city: String!): Auth
    addEvent(eventInput: EventInput): Event
    userUpdate(userUpdateInput: UpdateUserInput): User
    registerEvent(eventId: ID): User
  }
  `;
// Added mutation for login and adduser (From Class Module 21) will see if this is usable.


module.exports = typeDefs;
