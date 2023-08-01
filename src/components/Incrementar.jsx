import React from "react";

export const Incrementar = React.memo(({ incrementar }) => {
  console.log("estoy renderizando de nuevo, soy la funcion incrementar");
  return (
    <>
      <button className="btn btn-primary" onClick={() => incrementar(5)}>
        Incrementar
      </button>
    </>
  );
});
