/** @format */
import Navbar from "./components/Navbar";
import { Panelclient, ListUser, List } from "./components/PanelClient";
import { useState } from "react";

function App({ date }) {
  const username = "Luis Marin";

  return (
    <>
      <Navbar name={username} date={date} />
      <div className="container">
        <Panelclient title="Panel De Clientes"/>
        <ListUser
          subtitle="Lista de Usuarios"
          span="Escoja un cliente para visualizar los detalles"
        />
      </div>
    </>
  );
}
export default App;
