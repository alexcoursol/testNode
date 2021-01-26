import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    ratings (
      limit: Int = 10
      offset: Int = 0
    ): [Rating]
  }

  type Rating {
    id: ID!
    rating: Float
    comment: String
    date: String
    user: User
  }
`;