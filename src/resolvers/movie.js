export default {
  Query: {
    movies: async (
      parent,
      { offset = 0, limit = 10, ratingsOrder = {}, ratings = [] } = {},
      { models } = {}
    ) => {
      // TODO Find a way to select and eager load in comparism with graphQL query fields.
      const { Movie, User, Rating } = models;
      const { column: ratingColumn, direction: ratingDirection } = ratingsOrder;

      const options = {
        offset,
        limit,
        include: {
          model: Rating.scope('defaultScope', { method: ['filterByRatings', ratings] }),
          required: true,
          include: User
        },
        order: [
          ['release_date', 'DESC'] // TODO Dynamic "order" argument.
        ]
      };
      
      if (ratingColumn) {
        options.order.push([Rating, ratingColumn, ratingDirection]);
      }

      return await Movie.findAll(options); // Maybe use with count.
    },
    movie: async (parent, { id, ratingsOrder = {}, ratings = [] }, { models }) => {
      // TODO Find a way to select and eager load in comparism with graphQL query fields.
      const { Movie, Rating, User } = models;
      const { column: ratingColumn, direction: ratingDirection } = ratingsOrder;

      const options = {
        include: {
          model: Rating.scope('defaultScope', { method: ['filterByRatings', ratings] }),
          include: User
        },
        order: []
      };

      if (ratingColumn) {
        options.order.push([Rating, ratingColumn, ratingDirection]);
      }

      return await Movie.findByPk(
        id,
        options
      );
    }
  },
  Movie: {
    poster: (movie) => {
      return movie.getPosterPath();
    },
    date: (movie) => {
      return movie.release_date;
    }
  }
};