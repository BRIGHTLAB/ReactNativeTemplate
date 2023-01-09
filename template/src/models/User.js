import Realm from 'realm';

class User extends Realm.Object {}
User.schema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: {type: 'string'},
    email: {type: 'string', optional: true, default: ''},
    name: {type: 'string', optional: true, default: ''},
   
    // auth
    token: {type: 'string'},
    refreshToken: {type: 'string'},
  },
};

export default User;
