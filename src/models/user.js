const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATEONLY
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATEONLY
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATEONLY
    }
  });

  User.findByUsername = async (username) => {
    let user = await User.findOne({
      where: { username },
    });
 
    return user;
  };
  
  return User;
};
  
export default user;