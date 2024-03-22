import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./pagina_principal/Vista_principal.css";
import Vista_Principal from "./pagina_principal/vista_principal";
import Inicio from "./inicio_sesion/Inicio.jsx";
import FormUser from "./inicio_sesion/FormUser.jsx";

function App() {
  return (
<<<<<<< HEAD
            
    <Vista_Principal />
    
  )
=======
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<FormUser />} />
        <Route path="/principal" element={<Vista_Principal />} />
      </Routes>
    </Router>
  );
>>>>>>> 94c292bd1848c6ab421e3cd55a06372065a1df3b
}

export default App;
