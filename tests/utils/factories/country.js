import models from '../../../src/models';

import faker from 'faker';

export default async (opts = {}) => {
  const defaultValues = {
    name: faker.random.word() + '-' + faker.random.number(10000),
    alpha2: faker.random.word() + '-' + faker.random.number(10000),
    alpha3: faker.random.word() + '-' + faker.random.number(10000),
    numeric: faker.random.number(1000)
  };

  return await models.Country.create({ ...defaultValues, ...opts });
};