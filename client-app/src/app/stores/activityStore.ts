import { action, makeObservable, observable } from "mobx";

export default class ActivityStore {
  title = "hello from store";

  constructor() {
    makeObservable(this, {
      title: observable,
      setTitle: action,
    });
  }

  setTitle = () => {
    this.title = this.title + "!";
  };
}
