import { useState } from "react";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import CreateJob from "./Forms/CreateJobForm";
import JobTile from "./Components/JobTile";
import Spinner from "./Components/Spinner";
import { deleteJobById, useAllJobs } from "./Apis/Jobs";

const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [jobId, setJobId] = useState<string>();

  // API call
  const { jobs, isLoading, mutate } = useAllJobs();

  // Function called on click of onClose of Modal
  const handleCloseModal = async () => {
    setJobId(undefined);
    setOpen(false);
  };

  // Function called when user clicks on delete button
  const handleDelete = (id?: string) => {
    if (!id) return;
    deleteJobById(id)
      .then(() => mutate())
      .catch((e: any) => console.error("Error: ", e.message));
  };

  // Function called when user clicks on edit button
  const handleEdit = (id?: string) => {
    if (!id) return;
    setJobId(id);
    setOpen(true);
  };

  if (isLoading) return <Spinner />;
  return (
    <>
      <Header onClick={() => setOpen((prev) => !prev)} />

      <div className="h-full p-6 bg-bgGrey">
        {!!jobs?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px]">
            {jobs.map((job) => (
              <JobTile
                key={job.id}
                job={job}
                handleDelete={handleDelete.bind(this, job.id)}
                handleEdit={handleEdit.bind(this, job.id)}
              />
            ))}
          </div>
        ) : (
          <div className="p-4 bg-cardColor rounded-md">
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
