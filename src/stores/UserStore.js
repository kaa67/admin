import { observable } from 'mobx';

class UserStore {
  @observable user;

  constructor() {
    this.user = null;
  }
}

export default new UserStore();