/** @format */

import { Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ModalClient({ openModal, closeModal, textModal, list }) {
  const [inputnombre, setInputNombre] = useState("");
  const [inputCorreo, setInputCorreo] = useState("");
  const [inputCedula, setInputCedula] = useState("");
  const [inputTelefono, setInputTelefono] = useState("");
  const [inputEstado, setInputEstado] = useState({});
  const [initDB, setInitDB] = useState("");
  const [dataGlobal, setDataGlobal] = useState([]);

  const handleClose = () => {
    closeModal(false);
  };

  const listStatus = [
    { name: "Activo", color: "green" },
    { name: "Inactivo", color: "red" },
    { name: "Pendiente", color: "orange" },
  ];

  function selectValue(event) {
    console.log(event.target.value);
    setInputEstado(event.target.value);
  }

  const client = {
    name: inputnombre,
    correo: inputCorreo,
    cedula: inputCedula,
    telefono: inputTelefono,
    estado: inputEstado,
  };

  const DB_NAME = "listClients";
  const DB_VERSION = 1;
  const DB_STORE_NAME = "clients";

  const createdDB = () => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = function (evt) {
      setInitDB(this.result);
      console.log("on DB successful");
    };
    req.onerror = function (evt) {
      console.error("openDb:", evt.target.errorCode);
    };

    req.onupgradeneeded = function (evt) {
      console.log("Created new DB");
      var store = evt.currentTarget.result.createObjectStore(DB_STORE_NAME, {
        keyPath: "id",
        autoIncrement: true,
      });
    };
  };

  useEffect(() => {
    createdDB();
  }, []);

  function getObjectStore(store_name, mode) {
    var tx = initDB.transaction(store_name, mode);
    return tx.objectStore(store_name);
  }

  const saveData = () => {
    let obj = client;
    let nombre = "-";
    if (typeof obj != "undefined") obj.nombre = nombre;
    var store = getObjectStore("clients", "readwrite");
    var req;
    try {
      req = store.add(obj);
    } catch (e) {
      if (e.name == "DataCloneError") alert("Error, data clone");
      throw e;
    }

    req.onsuccess = function (evt) {
      alert("Insertion in DB successful");
      closeModal(false);
      displayPubList(store);
    };

    req.onerror = function () {
      alert("addPublication error", this.error);
    };
  };

  function displayPubList(store) {
    const target = store.getAll();
    target.onsuccess = function () {
      setDataGlobal(target.result);
    };
    list(dataGlobal);
  }

  return (
    <Modal show={openModal}>
      <Modal.Header>
        <Modal.Title>{textModal}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="Nombre">
            <Form.Control
              type="text"
              placeholder="Nombre"
              onChange={(e) => setInputNombre(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Correo">
            <Form.Control
              type="email"
              placeholder="Correo"
              onChange={(e) => setInputCorreo(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Cedula">
            <Form.Control
              type="number"
              maxLength={13}
              placeholder="Cédula"
              onChange={(e) => setInputCedula(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefono">
            <Form.Control
              type="number"
              maxLength={13}
              placeholder="Teléfono"
              onChange={(e) => setInputTelefono(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="telefono">
            <Form.Control
              type="text"            
              placeholder="Estado"
              onChange={(e) => setInputEstado(e.target.value)}
            />
          </Form.Group>
{/* 
          <Form.Group className="mb-3" controlId="Estado">
            <Form.Select
              aria-label="Default select example"
           
              onChange={(e) => setInputEstado(e.target.value)}
            >
              <option>Selecione el estado</option>
              {listStatus.map((value) => (
                <option key={value.name} value={value}>
                  {value.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={saveData}>
          Guardar
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


ModalClient.propTypes = {
  openModal: PropTypes.bool,
};
ModalClient.defaultProps = {
  openModal: false,
};
export default ModalClient;
