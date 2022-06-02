import { gql } from "@apollo/client";

export const ME = gql`
  query {
    me {
      _id
      email
      firstName
      lastName
      fullName
      groupSpecialty
      motto
      city
      state
      why
      isCoach
      events {
        _id
        title
        description
        location
        timeSlot
        duration
        ownerID {
          fullName
        }
        participants {
          _id
          email
          firstName
          lastName
          fullName
        }
      }

    }
  }
`

export const ALL_EVENTS_QUERY = gql`
  query {
    events {
      _id
      title
      description
      location
      timeSlot
      duration
      ownerID {
        fullName
        city
        state
      }
      participants {
        _id
        email
        firstName
        lastName
        fullName
      }
    }
  }
`