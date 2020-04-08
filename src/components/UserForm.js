import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const INITIAL_VALUES = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  occupation: "",
  city: "",
  bio: "",
};

export default function UserForm() {
  const [fields, setFields] = useState(INITIAL_VALUES);

  const origin = () => {
    setFields(INITIAL_VALUES);
  };
  const nextStep = () => {
    setFields({ ...fields, step: fields.step + 1 });
  };
  const prevStep = () => {
    setFields({ ...fields, step: fields.step - 1 });
  };
  const handleChange = (input) => (e) => {
    setFields({ ...fields, [input]: e.target.value });
  };

  switch (fields.step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={fields}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={fields}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={fields} />
      );
    case 4:
      return <Success origin={origin} />;
    default:
      return null;
  }
}
