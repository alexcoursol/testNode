const movie = (sequelize, DataTypes) => {
  var Movie = sequelize.define(
    'movies',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      countryId: {
        type: DataTypes.INTEGER,
        field: 'country_id'
      },
      description: {
        type: DataTypes.TEXT
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      // This column has to be updated on RateMutation.
      rating: {
        type: DataTypes.FLOAT
      },
      runtime: {
        type: DataTypes.INTEGER,
      },
      budget: {
        type: DataTypes.BIGINT,
      },
      revenue: {
        type: DataTypes.BIGINT,
      },
      tmdb_id: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
      },
      deletedAt: {
        field: 'deleted_at',
        type: DataTypes.DATE,
      }
    }
  );
  
  Movie.associate = (models) => {
    Movie.belongsTo(models.Country);
    Movie.hasMany(models.Rating);
  };

  Movie.prototype.getPosterPath = () => {
    return 'public/path/to/poster/image';
  };
  
  return Movie;
};
   
export default movie;