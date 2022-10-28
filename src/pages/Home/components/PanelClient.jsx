/** @format */

import PropsTypes from "prop-types";
import Buttons from "./Buttons/Buttons";
import { ListClients } from "./ListClients";
import { useState } from "react";

export const Panelclient = ({ title }) => {
  Panelclient.PropsTypes = {
    title: PropsTypes.string.isRequired,
  };
  Panelclient.defaultProps = {
    title: "Esperando titulo ...",
  };

  return (
    <>
      <div>
        <h2>{title}</h2>
        <hr />
      </div>
    </>
  );
};
//valida las propiedades

export const ListUser = ({ subtitle, span }) => {
  return (
    <div>
      <h5>{subtitle}</h5>
      <span>{span}</span>
      <Buttons
        text="Nuevo Cliente"
        textModal="Crear Nuevo Cliente"
        activo={true}
      />
    </div>
  );
};

ListUser.PropsTypes = {
  subtitle: PropsTypes.string.isRequired,
};
ListUser.defaultProps = {
  subtitle: "Esperando subtitle ...",
};
