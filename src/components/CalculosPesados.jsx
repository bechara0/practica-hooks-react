import { useMemo } from "react";
import { useState } from "react";

export const CalculosPesados = () => {
  const [show, setShow] = useState(true);
  const [listaNumeros, setListaNumeros] = useState([
    100, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  const getCalculo = (listaNumeros) =>
    useMemo(() => {
      console.log("Calculando....");
      return listaNumeros.reduce((a, b) => a * b);
    }, [listaNumeros]);

  const agregarNumero = () => {
    setListaNumeros([
      ...listaNumeros,
      listaNumeros[listaNumeros.length - 1] + 1,
    ]);
  };

  return (
    <div>
      <h2>Cálculo:</h2>
      <p>{getCalculo(listaNumeros)}</p>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        {show ? "Show" : "hide"}
      </button>
      <button className="btn btn-danger" onClick={() => agregarNumero()}>
        Agregar número
      </button>
    </div>
  );
};
