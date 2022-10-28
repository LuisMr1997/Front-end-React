/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

//? en public/index.html tenemos una etiquita <div></div> con el id = 'root';
//? ReactDom.createRoot crea nuestra aplicacion en esa etiqueta div;

const rootApp = ReactDOM.createRoot(document.getElementById("root"));

//? nombre de la constante .render espera el codigo html visual de la app,                           directo o documentos externos;

rootApp.render(<App />);
