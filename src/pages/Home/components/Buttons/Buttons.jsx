/** @format */

import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ListClients } from "../ListClients";
import ModalClient from "../Modal/Modal";
const Buttons = ({ text, textModal, textedit }) => {
  const [varModal, setvarModal] = useState();
  const [clients, setClients] = useState();

  const openModal = (t) => {
    setvarModal(t);
  };

  const closeModal = () => {
    setvarModal(false);
  };
  console.log(clients);
  return (
    <>
      <Button
        type="button"
        className="btn btn-warning float-end text-white"
        onClick={() => openModal(true)}
      >
        {
          <span>
            {text} {varModal}
          </span>
        }
      </Button>

      <ListClients clients={clients}/>

      <ModalClient
        openModal={varModal}
        closeModal={closeModal}
        textModal={textModal}
        textedit={textedit}
        list={setClients}
      />
    </>
  );
};

Buttons.propTypes = {};

export default Buttons;
