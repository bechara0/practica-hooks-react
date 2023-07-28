import React from "react";
import { ContadorComponents } from "./src/components/ContadorComponents";
import { FomularioComponent } from "./src/components/FomularioComponent";

export const HooksApp = () => {
  return (
    <>
      <h1>Aplicación de Hooks</h1>
      <hr />
      <FomularioComponent></FomularioComponent>
      <hr />
      <hr />
      <ContadorComponents></ContadorComponents>
    </>
  );
};
