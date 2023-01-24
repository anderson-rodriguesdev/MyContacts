import { useState } from "react";

type Errors = {
  field?: string;
  message?: string;
};

export default function useErrors() {
  const [errors, setErrors] = useState(Array<Errors>);

  function setError({ field, message }: Errors) {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [...prevState, { field, message }]);
  }

  function removeError({ field }: Errors) {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== field)
    );
  }

  function getErrorMessageByFieldName({ field }: Errors) {
    return errors.find((error) => error.field === field)?.message;
  }

  return { errors, setError, removeError, getErrorMessageByFieldName };
}
