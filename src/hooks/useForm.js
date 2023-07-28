export const useForm = () => {
  const [formState, setformState] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const { userName, email, password } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({ ...formState, [name]: value });
  };

  return { formState, onInputChange };
};
