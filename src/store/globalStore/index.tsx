import { observable, action } from 'mobx';

export class GlobalStore {
  @observable
  num: number = 0;

  // 增加数字
  @action
  add = (num: number) => {
    this.num += 1;
  }

  // 减少数字
  @action
  dec = (num: number) => {
    this.num -= 1;
  }

}

export default new GlobalStore();
