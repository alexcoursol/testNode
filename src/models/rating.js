import moment from 'moment';
import _ from 'lodash';
import { Op } from 'sequelize';

const rating = (sequelize, DataTypes) => {
  var Rating = sequelize.define(
    'ratings',
    {
      ratableId: {
        type: DataTypes.INTEGER,
        field: 'ratable_id'
      },
      movieId: {
        type: DataTypes.INTEGER,
        field: 'ratable_id'
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id'
      },
      rating: {
        type: DataTypes.FLOAT
      },
      comment: {
        type: DataTypes.TEXT
      },
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATEONLY,
        get: function() {
          // Frontend should format this.
          return moment.utc(this.getDataValue('createdAt')).startOf('second').fromNow();
        }
      },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATEONLY,
      },
      deletedAt: {
        field: 'deleted_at',
        type: DataTypes.DATEONLY,
      }
    },
    {
      defaultScope: {
        where: {
          createdAt: {
            [Op.gt]: moment().subtract(1, "years")
          }
        }
      },
      scopes: {
        filterByRatings(ratings = []) {
          // TODO More accurate filter.
          return (_.isEmpty(ratings)) ? {} : { where: { rating: ratings.map((rating) => rating * 2) } };
        }
      }
    }
  );

  Rating.associate = (models) => {
    Rating.belongsTo(models.User);
  };

  return Rating;
};
   
export default rating;