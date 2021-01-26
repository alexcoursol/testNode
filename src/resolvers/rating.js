export default {
  Query: {
    ratings: async (
      parent,
      { offset = 0, limit = 10 } = {},
      { models } = {}
    ) => {
      return await models.Rating.findAll({ offset: offset * limit, limit });
    }
  },
  Rating: {
    date: (rating) => {
      return rating.createdAt;
    }
  }
};