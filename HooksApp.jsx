import React from "react";
import { ContadorComponents } from "./src/components/ContadorComponents";
import { FomularioComponent } from "./src/components/FomularioComponent";
import { UsuariosComponent } from "./src/components/UsuariosComponent";
import { CalculosPesados } from "./src/components/CalculosPesados";
import { CallBackComponent } from "./src/components/CallBackComponent";

export const HooksApp = () => {
  return (
    <>
      <h1>Hook callback</h1>
      <CallBackComponent></CallBackComponent>
      <hr />
      <hr />
      <h1>Hook useMemo</h1>
      <CalculosPesados></CalculosPesados>
      <hr />

      <hr />
      <UsuariosComponent></UsuariosComponent>
      <hr />
      <hr />
      <FomularioComponent></FomularioComponent>
      <hr />
      <hr />
      <ContadorComponents></ContadorComponents>
    </>
  );
};
