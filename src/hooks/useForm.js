import { useState } from "react";

export const useForm = (data, onSubmitHandler) => {
  const [values, setValues] = useState(data);

  const changeHandler = (e) => {
    setValues(state => ({...state, [e.target.name]: e.target.value}))
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onSubmitHandler(values);
  }

  const changeValues = (newValues) => {
    
    setValues(newValues);
};

  return {
    values,
    changeHandler,
    onSubmit,
    changeValues
  }
}