import React, { useState } from "react";
import "./Lista_User.css";
import { Lista_User } from "./Lista_User.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function FormUser() {
  const navigate = useNavigate();
  const [datosUser, setDatosUser] = useState({
    nombreU: "",
    correo: "",
    password: "",
    direccion: "",
  });
  const [listaU, setListaU] = useState([]);

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  useEffect(() => {
    if (usuarioSeleccionado !== null) {
      setDatosUser(usuarioSeleccionado);
    } else {
      setDatosUser({
        nombreU: "",
        correo: "",
        password: "",
        direccion: "",
      });
    }
  }, [usuarioSeleccionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosUser((prevDatos) => ({ ...prevDatos, [name]: value }));
  };

  const guardarUsuario = (event) => {
    event.preventDefault();
    if (usuarioSeleccionado) {
      // Actualizar usuario
      const index = listaU.indexOf(usuarioSeleccionado);
      const updatedList = listaU.map((item, idx) =>
        idx === index ? { ...item, ...datosUser } : item
      );
      setListaU(updatedList);
      setUsuarioSeleccionado(null);
    } else {
      // Guardar nuevo usuario
      setListaU((value) => [...value, datosUser]);
    }
  };

  const editarUsuario = (index) => {
    const usuarioSeleccionado = listaU[index];
    setUsuarioSeleccionado(usuarioSeleccionado);
  };

  const cancelarEdicion = () => {
    setUsuarioSeleccionado(null);
  };

  const eliminarUsuario = (index) => {
    const newList = listaU.filter((_, i) => i !== index);
    setListaU(newList);
};

  const handleRegresarHome = () => {
    navigate("/"); // Navega al formulario de registro
    
  };

  //////LOCALSTORAGE////
  const guardarUserLocalStorage =(event) =>{
    event.preventDefault();
    const usuario = {
      nombres: datosUser.nombreU,
      correo: datosUser.correo,
      password: datosUser.password,
      direccion: datosUser.direccion
    }
    let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    listaUsuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    console.log("Se guardo el usuario")

    // Limpiar los campos del formulario después de guardar
    navigate("/");

  }
  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={guardarUserLocalStorage}>
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
        <button className="botonI" type="button" onClick={cancelarEdicion}>
          Cancelar Edición
        </button>
        <button className="botonI" type="button" onClick={handleRegresarHome}>
          Volver al Inicio
        </button>
      </form>
      <div>
        <Lista_User
          datosForm={listaU}
          editarUsuario={editarUsuario}
          eliminarUsuario={eliminarUsuario}
        />
      </div>
    </div>
  );
}

export default FormUser;
