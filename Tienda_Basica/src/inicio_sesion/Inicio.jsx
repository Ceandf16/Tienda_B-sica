import "./Inicio.css";
import { useState } from "react";
import Lista_User from "./Lista_User.jsx";
import FormUser from "./FormUser.jsx";
import { useNavigate } from "react-router-dom";

function Inicio() {
  const navigate = useNavigate();

  const handleRegistrarClick = () => {
    navigate("/registro"); // Navega al formulario de registro
  };
  const handleInicio = () => {
    navigate("/principal"); // Navega al formulario de registro
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>

      <form>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button className="botonI" onClick={handleInicio}>Log In</button>
        <button className="botonI" onClick={handleRegistrarClick}>Registrar</button>
      </form>
    </div>
  );
}
export default Inicio;
