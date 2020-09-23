import { observable, computed } from 'mobx';

class UserStore {
  @observable user;

  constructor() {
    this.user = null;
  }

  @computed get email() {
    return !this.user || !this.user.email ? 'Guest' : this.user.email;
  }

}

export default new UserStore();