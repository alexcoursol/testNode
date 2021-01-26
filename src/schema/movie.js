import { gql } from 'apollo-server-express';
 
export default gql`
  extend type Query {
    movies (
      ratings: [Int]
      ratingsOrder: OrderInput
      limit: Int = 10
      offset: Int = 0
    ): [Movie]

    movie (
      id: ID!
      ratings: [Int]
      ratingsOrder: OrderInput
    ): Movie
  }
 
  type Movie {
    id: ID
    title: String
    poster: String
    date: String
    rating: Float
    ratings: [Rating]
  }
`;