import * as Yup from "yup";
import { JOB_TYPE } from "../../Types/JobTypes";

export const INITIAL_VALUES: JOB_TYPE = {
  jobTitle: "",
  companyName: "",
  industry: "",
  location: "",
  remoteType: "",
  experience: {
    min: "",
    max: "",
  },
  salary: {
    min: "",
    max: "",
  },
  totalEmployee: "",
  applyType: "",
};

export const firstFormValidation = () => {
  return Yup.object().shape({
    jobTitle: Yup.string().required("Job Title is required").nullable(),
    companyName: Yup.string().required("Company Name is required").nullable(),
    industry: Yup.string().required("Industry is required").nullable(),
  });
};
