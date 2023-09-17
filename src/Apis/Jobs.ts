import axios from "axios";
import useSWR from "swr";
import { JOB_TYPE } from "../Types/CreateJobTypes";

const API_BASE_URL = "https://64f33cc9edfa0459f6c66bed.mockapi.io";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const createJob = (data: JOB_TYPE) => {
  try {
    return axios.post(`${API_BASE_URL}/jobs`, data);
  } catch (error: any) {
    return error.message;
  }
};

export const useAllJobs = (fetch = true) => {
  const url = fetch ? `${API_BASE_URL}/jobs` : null;
  const { data, error, mutate } = useSWR<JOB_TYPE[]>(url, fetcher);
  return { jobs: data, isLoading: fetch && !error && !data, mutate };
};

export const useGetJobById = (jobId?: string) => {
  const url = jobId ? `${API_BASE_URL}/jobs/${jobId}` : null;
  const { data, error, mutate } = useSWR<JOB_TYPE>(url, fetcher);
  return { job: data, isLoading: !error && !data, mutate };
};

export const editJobById = (data: JOB_TYPE) => {
  try {
    return axios.put(`${API_BASE_URL}/jobs/${data.id}`, data);
  } catch (error: any) {
    return error.message;
  }
};

export const deleteJobById = (jobId: string) => {
  try {
    return axios.delete(`${API_BASE_URL}/jobs/${jobId}`);
  } catch (error: any) {
    return error.message;
  }
};
