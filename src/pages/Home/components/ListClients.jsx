/** @format */

import React, { useState } from "react";
import Buttons from "./Buttons/Buttons";

export const ListClients = ({clients}) => {
    console.log("🚀 ~ file: ListClients.jsx ~ line 7 ~ ListClients ~ clients", clients)
    
  const textColor = { color: "red" };

  return (
    <div className="mt-5">
      {clients
        ? clients.length > 0
          ? clients.map((items) => (
              <section
                key={items.id}
                className="
                      
                      border 
                      border-1
                      mt-1
                      py-2
                      px-4
                      border-dark 
                      d-flex justify-content-between
                      align-items-center"
              >
                <article>
                  <h5>
                    {items.name} {items.correo}
                  </h5>
                  <span>{items.correo}</span>
                </article>
                <article>
                  <span>{items.telefono}</span> <br />
                  <span>{items.telefono}</span>
                </article>
                <article>
                  {/* <span style={{ color: items.color }}>{items.estado}</span> */}
                </article>
                <Buttons
                  text="Editar"
                  items={items}
                  activo={true}
                  textedit="Editar Cliente"
                />
              </section>
            ))
          : "ESPERANDO DATOS"
        : <span></span>}
    </div>
  );
};
