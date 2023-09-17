import { Form, Formik } from "formik";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import { JOB_TYPE } from "../../../Types/JobTypes";
import { firstFormValidation } from "../formUtils";

const FirstForm: React.FC<FirstFormProps> = ({ initialValues, submit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={firstFormValidation}
      onSubmit={submit}
      enableReinitialize
    >
      {(props: any) => {
        const { values, handleChange, errors } = props;
        return (
          <Form>
            <div className="flex flex-col gap-6">
              <Input
                id="jobTitle"
                name="jobTitle"
                label="Job Title"
                required
                value={values?.jobTitle}
                onChange={handleChange}
                placeholder="ex. UX UI Designer"
                error={errors?.jobTitle}
              />
              <Input
                id="companyName"
                name="companyName"
                label="Company Name"
                required
                value={values?.companyName}
                onChange={handleChange}
                placeholder="ex. Google"
                error={errors?.companyName}
              />
              <Input
                id="industry"
                name="industry"
                label="Industry"
                required
                value={values?.industry}
                onChange={handleChange}
                placeholder="ex. Information Technology "
                error={errors?.industry}
              />
              <div className="w-full flex gap-6">
                <Input
                  id="location"
                  name="location"
                  label="Location"
                  value={values?.location}
                  onChange={handleChange}
                  placeholder="ex. Chennai"
                />
                <Input
                  id="remoteType"
                  name="remoteType"
                  label="Remote type"
                  value={values?.remoteType}
                  onChange={handleChange}
                  placeholder="ex. In-office"
                />
              </div>
            </div>
            <div className="w-full mt-24 flex justify-end">
              <Button type="submit" text="Next" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

type FirstFormProps = {
  initialValues: JOB_TYPE;
  submit: (values: JOB_TYPE) => void;
};

export default FirstForm;
