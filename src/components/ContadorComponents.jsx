import { useConter } from "../hooks/useConter";

export const ContadorComponents = () => {
  const { counter, increment, decrement, reset } = useConter(0);

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>
      <button className="btn btn-danger" onClick={() => reset()}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(1, false)}>
        -1
      </button>
    </>
  );
};
