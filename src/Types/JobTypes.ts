export type JOB_TYPE = {
  id?: string;
  jobTitle: string;
  companyName: string;
  industry: string;
  location: string;
  remoteType: string;
  experience: {
    min: string;
    max: string;
  };
  salary: {
    min: string;
    max: string;
  };
  totalEmployee: string;
  applyType: string;
};
