import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import CreateJob from "./Forms/JobForm";
import JobCard from "./Components/JobCard";
import Spinner from "./Components/Spinner";
import { axiosInstance } from "./Apis/Jobs";
import { JOB_TYPE } from "./Types/JobTypes";

const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [jobId, setJobId] = useState<string>();
  const [jobs, setJobs] = useState<JOB_TYPE[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    setLoading(true);
    axiosInstance
      .get("/jobs")
      .then((res: any) => {
        if (res.status === 200) {
          setLoading(false);
          setJobs(res.data);
        }
      })
      .catch((e: any) => {
        console.log("All Jobs Error: ", e.message);
      });
  };

  // Function called when user clicks on edit button
  const handleEdit = (id?: string) => {
    if (!id) return;
    setJobId(id);
    setOpen(true);
  };

  // Function called when user clicks on delete button
  const handleDelete = (id?: string) => {
    if (!id) return;
    axiosInstance
      .delete(`/jobs/${id}`)
      .then(() => getAllJobs())
      .catch((e: any) => console.error("Error: ", e.message));
  };

  // Function called on click of onClose of Modal
  const handleCloseModal = async () => {
    setJobId(undefined);
    setOpen(false);
    getAllJobs();
  };

  if (loading) return <Spinner />;
  return (
    <>
      <Header onClick={() => setOpen((prev) => !prev)} />

      <div className="h-full p-6 bg-background">
        {!!jobs?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px]">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                handleEdit={handleEdit.bind(this, job.id)}
                handleDelete={handleDelete.bind(this, job.id)}
              />
            ))}
          </div>
        ) : (
          <div className="p-4 bg-white rounded-md">
            There are no Jobs at the moment, please check later!
          </div>
        )}
      </div>

      <Modal open={open} onClose={handleCloseModal}>
        <CreateJob onClose={handleCloseModal} jobId={jobId} />
      </Modal>
    </>
  );
};

export default App;
