import { gql } from 'apollo-server-express';
 
import userSchema from './user';
import movieSchema from './movie';
import ratingSchema from './rating';
 
const rootSchema = gql`
  type Query {
    _: Boolean
  }

  input OrderInput {
    column: String
    direction: OrderDirection
  }

  enum OrderDirection {
    ASC
    DESC
  }
`;
 
export default [rootSchema, userSchema, movieSchema, ratingSchema];