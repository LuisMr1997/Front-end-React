
import { Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
function ModalEdit({ openModal, closeModal, textModal, items }) {
    console.log(items);
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
    const saveData = () => {
        closeModal(false);
      };
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
}
export default ModalEdit