import { useState } from "react";
export const useForm = (inicialForm = {}) => {
  const [formState, setformState] = useState(inicialForm);

  const onImputChange = ({ target }) => {
    const { name, value } = target;
    setformState({ ...formState, [name]: value });
  };

  return { ...formState, formState, onImputChange };
};
