import axios, { AxiosResponse } from "axios";
import { IActivity } from "../models/activity";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";
axios.interceptors.response.use(async (res) => {
  try {
    await sleep(1000);
    return res;
  } catch (err) {
    console.log(err);
    return await Promise.reject(err);
  }
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: object) =>
    axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Activities = {
  list: () => request.get<IActivity[]>("/activities"),
  details: (id: string) => request.get<IActivity>(`/activities/${id}`),
  create: (activity: IActivity) => request.post<void>("/activities", activity),
  update: (activity: IActivity) =>
    request.put<void>(`/activities/${activity.id}`, activity),
  delete: (id: string) => request.delete<void>(`/activities/${id}`),
};

const agent = {
  Activities,
};

export default agent;
