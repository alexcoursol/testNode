import _ from 'lodash';

export default {   
  User: {
    username: (user) => {
      return _.upperFirst(user.username);
    }
  }
};