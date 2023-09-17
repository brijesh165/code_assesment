import { useEffect, useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import { JOB_TYPE } from "../../Types/JobTypes";
import { INITIAL_VALUES } from "./formUtils";
import { axiosInstance } from "../../Apis/Jobs";

const CreateJob: React.FC<CreateJobProps> = ({ onClose, jobId }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [initialValues, setInitialValues] = useState<JOB_TYPE>(INITIAL_VALUES);

  useEffect(() => {
    if (jobId) {
      axiosInstance
        .get(`/jobs/${jobId}`)
        .then((res: any) => {
          if (res.status === 200) {
            setInitialValues(res.data);
          }
        })
        .catch((e: any) => console.error("Error: ", e.message));
    }
  }, [jobId]);

  // Function called when user submit's the form
  const onSubmit = (values: JOB_TYPE) => {
    const apiCall = jobId
      ? axiosInstance.put(`/jobs/${jobId}`, values)
      : axiosInstance.post(`/jobs`, values);
    setInitialValues(values);
    if (activeStep === 1) setActiveStep(2);
    else {
      return apiCall
        .then(() => onClose())
        .catch((e: any) => console.error("Error: ", e.message));
    }
  };

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex justify-between">
        <p className="text-xl font-normal leading-7 text-dark1">
          {jobId ? "Edit" : "Create"} a job
        </p>
        <p className="text-xl font-normal leading-7 text-dark1">{`Step ${activeStep}`}</p>
      </div>
      {activeStep === 1 && (
        <FirstForm initialValues={initialValues} submit={onSubmit} />
      )}
      {activeStep === 2 && (
        <SecondForm
          initialValues={initialValues}
          submit={onSubmit}
          onBackClick={() => setActiveStep(1)}
          isEditForm={!!jobId}
        />
      )}
    </div>
  );
};

type CreateJobProps = {
  onClose: () => void;
  jobId?: string;
};

export default CreateJob;
