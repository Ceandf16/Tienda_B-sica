import React, { useState } from "react";
import "./Lista_User.css";
import { Lista_User } from "./Lista_User.jsx";
import { useNavigate } from "react-router-dom";
function FormUser() {
  const navigate = useNavigate();
  const [datosUser, setDatosUser] = useState({
    nombreU: "",
    correo: "",
    password: "",
    direccion: "",
  });
  const [listaU, serListaU] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosUser({ ...datosUser, [name]: value });
  };

  const guardarProducto = (event) => {
    serListaU((value) => [...value, datosUser]);
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    // Aquí puedes agregar la lógica para guardar los datos del usuario
    console.log("Datos del usuario:", datosUser);
    setDatosUser({
      nombreU: "",
      correo: "",
      password: "",
      direccion: "",
    });
  };

  const handleRegresarHome = () => {
    navigate("/"); // Navega al formulario de registro
  };
  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={guardarProducto}>
        <label htmlFor="nombreU">Nombre:</label>
        <input
          onChange={handleChange}
          value={datosUser.nombreU}
          type="text"
          id="nombreU"
          name="nombreU"
          required
        />
        <label htmlFor="correo">Correo:</label>
        <input
          onChange={handleChange}
          value={datosUser.correo}
          type="email"
          id="correo"
          name="correo"
          required
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          onChange={handleChange}
          value={datosUser.password}
          type="password"
          id="password"
          name="password"
          required
        />
        <label htmlFor="direccion">Dirección:</label>
        <input
          onChange={handleChange}
          value={datosUser.direccion}
          type="text"
          id="direccion"
          name="direccion"
          required
        />
        <button className="botonI" type="submit">
          Registrar
        </button>
        <button className="botonI" type="button" onClick={handleRegresarHome}>
          Volver al Inicio
        </button>
      </form>
      <div>
        <Lista_User datosForm={listaU} />
      </div>
    </div>
  );
}

export default FormUser;
