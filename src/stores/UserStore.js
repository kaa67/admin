import { observable, computed } from 'mobx';

class UserStore {
  @observable user;

  constructor() {
    this.user = null;
  }

  @computed get getEmail() {
    return (
      !this.user
      || !this.user.email
      ? '****'
      : this.user.email
    );
  }
}

export default new UserStore();