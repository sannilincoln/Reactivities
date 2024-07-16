import { makeAutoObservable } from "mobx";
import { IActivity } from "../models/activity";
import agent from "../api/agent";

export default class ActivityStore {
  activities: IActivity[] = [];
  selectedActivity: IActivity | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadActivities = async () => {
    this.setLoadingInitial(true);
    try {
      const activities = await agent.Activities.list();

      activities.forEach((x) => {
        x.date = x.date.split("T")[0];
        this.activities.push(x);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);

      this.setLoadingInitial(true);
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
  setEditMode = (state: boolean) => {
    this.editMode = state;
  };

  selectActivity = (id: string) => {
    this.selectedActivity = this.activities.find((x) => id === x.id);
  };

  cancelSelectedActivity = () => {
    this.selectedActivity = undefined;
  };

  openForm = (id?: string) => {
    id ? this.selectActivity(id) : this.cancelSelectedActivity();
    this.setEditMode(true);
  };

  closeForm = () => {
    this.setEditMode(false);
  };
}
