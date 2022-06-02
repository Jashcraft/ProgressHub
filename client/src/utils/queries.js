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
        ownerID
        participants {
          _id
          email
          firstName
          lastName
        }
      }

    }
  }
`