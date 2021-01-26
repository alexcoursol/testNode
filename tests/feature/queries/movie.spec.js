import {expect} from 'chai';

import createMovie from '../../utils/factories/movie';

describe('Query movie', () => {
  it('should return right format', async () => {
    const movie = await createMovie();

    testingServer.post('/graphql')
      .send({
        query: '{ movie (id: ' + movie.id + ') { id, title, poster, rating } }'
      })
      .end((err, { body: { data: { movie: movieResponse } } }) => {
        expect(movieResponse.id).to.eq(movie.id.toString());
        expect(movieResponse.title).to.eq(movie.title);
        expect(movieResponse.poster).to.eq(movie.getPosterPath());
        expect(movieResponse.rating).to.eq(movie.rating);
      });
  });
  // TODO More accurate tests for output values and filters.
});