import models from '../../../src/models';

import createCountry from './country';
import faker from 'faker';

const createMovie = async (opts = {}) => {
  const country = await createCountry();    
  
  const defaultValues = {
    title: faker.lorem.word(7) + '-' + faker.random.number(10000),
    countryId: country.id,
    description: faker.lorem.text(),
    release_date: faker.date.past(),
    rating: faker.random.number(10),
    runtime: faker.random.number(400),
    budget: faker.random.number(1000000000),
    revenue: faker.random.number(1000000000),
    tmdb_id: faker.random.number(10000)
  };

  return await models.Movie.create({ ...defaultValues, ...opts });
};

export {
  createMovie
};

export default createMovie;