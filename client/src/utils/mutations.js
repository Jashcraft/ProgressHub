import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login ($email: String!, $password: String!){
    login(email: $email, password: $password){
      token
      user{
        _id
        email
      }
    }
  }
`

export const REGISTER = gql`
mutation register ($email: String!, $password: String!, $isCoach: Boolean!, $city: String!, $name: String!){
  addUser(email: $email, name: $name, city: $city, password: $password, isCoach: $isCoach){
    token
    user{
      _id
      email
    }
  }
}

`