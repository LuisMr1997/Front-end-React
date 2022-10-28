/** @format */
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import styles from "../styles/nav.module.css";

function nav({ name, date }) {
  const title = name + " - " + "FrontEnd Test";
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Collapse className={styles.h2}>
            <Navbar.Brand href="#home">{title}</Navbar.Brand>
          </Navbar.Collapse>

          <Navbar.Text>
            Fecha Actual: <a href="#login">{date}</a>
          </Navbar.Text>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
export default nav;
