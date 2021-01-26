import Sequelize from 'sequelize';
import movie from './movie';
import country from './country';
import rating from './rating';
import user from './user';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_DIALECT,
    logging: false
  },
);

const models = {
  Country: country(sequelize, Sequelize.DataTypes),
  Movie: movie(sequelize, Sequelize.DataTypes),
  Rating: rating(sequelize, Sequelize.DataTypes),
  User: user(sequelize, Sequelize.DataTypes)
};
 
Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});
 
export { sequelize };
 
export default models;