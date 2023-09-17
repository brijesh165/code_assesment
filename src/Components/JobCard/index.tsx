import DeleteIcon from "../../Icons/DeleteIcon";
import EditIcon from "../../Icons/EditIcon";
import { JOB_TYPE } from "../../Types/JobTypes";
import Button from "../Button";
import IconButton from "../IconButton";
import logo from "../../images/logo.png";

const JobCard: React.FC<JobCardProps> = ({ job, handleDelete, handleEdit }) => {
  const {
    jobTitle,
    companyName,
    industry,
    location,
    remoteType,
    experience,
    salary,
    totalEmployee,
    applyType,
  } = job;

  const experienceText = (() => {
    if (!experience || !(experience.min && experience.max)) return undefined;
    let str = "Experience ";
    if (experience.min && experience.max)
      str += `(${experience.min} - ${experience.max} years)`;
    if (experience.min && !experience.max) str += `(${experience.min} years)`;
    if (!experience.min && experience.max) str += `(${experience.max} years)`;
    return str;
  })();

  const salaryText = (() => {
    if (!salary || !(salary.min && salary.max)) return undefined;
    let str = "INR (₹) ";
    if (salary.min && salary.max)
      str += `${salary.min} - ${salary.max} / Month`;
    if (salary.min && !salary.max) str += `${salary.min} / Month`;
    if (!salary.min && salary.max) str += `${salary.max} / Month`;
    return str;
  })();

  return (
    <div className="flex item-start justify-between w-full rounded-[10px] bg-white text-left shadow-sm transition-all border border-gray1 py-4 px-6">
      <div className="flex flex-col sm:flex-col md:flex-row items-start gap-2">
        <img src={logo} alt="Company Logo" height="48px" width="48px" />
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-normal leading-8">{jobTitle}</h1>
            <p className="text-base font-normal leading-6">
              {companyName} - {industry}
            </p>
            <p className="text-base text-gray2 font-normal leading-6">{`${location} ${
              remoteType ? `(${remoteType})` : ""
            }`}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-normal leading-6 text-[#212427]">
              Part-Time (9.00 am - 5.00 pm IST)
            </p>
            {experienceText && (
              <p className="font-normal leading-6 text-[#212427]">
                {experienceText}
              </p>
            )}
            {salaryText && (
              <p className="font-normal leading-6 text-[#212427]">
                {salaryText}
              </p>
            )}
            {totalEmployee && (
              <p className="font-normal leading-6 text-[#212427]">
                {`${totalEmployee} employees`}
              </p>
            )}
          </div>
          <div className="flex items-center gap-6">
            {applyType === "externalApply" ? (
              <Button
                text="External Apply"
                className="bg-transparent border border-primary text-primary"
              />
            ) : (
              <Button text="Apply Now" />
            )}
          </div>
        </div>
      </div>
      <div className="flex item-start gap-2">
        <IconButton onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

type JobCardProps = {
  job: JOB_TYPE;
  handleEdit: () => void;
  handleDelete: () => void;
};

export default JobCard;
