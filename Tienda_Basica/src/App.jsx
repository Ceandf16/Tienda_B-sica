import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./pagina_principal/Vista_principal.css";
import Vista_Principal from "./pagina_principal/vista_principal";
import Inicio from "./inicio_sesion/Inicio.jsx";
import FormUser from "./inicio_sesion/FormUser.jsx";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<FormUser />} />
        <Route path="/principal" element={<Vista_Principal />} />
      </Routes>
    </Router>
  );
}

export default App;
