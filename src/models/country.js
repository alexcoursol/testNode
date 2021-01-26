const country = (sequelize, DataTypes) => {
  var Country = sequelize.define(
    'country',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      alpha2: {
        type: DataTypes.STRING,
        allowNull: false
      },
      alpha3: {
        type: DataTypes.STRING,
        allowNull: false
      },
      numeric: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
  
  return Country;
};
   
export default country;