import "./Vista_principal.css";
import Menu from "./Menu.jsx";
import AcordionImagenes from "./AcordionImagenes.jsx";
import ModalRegistro from "./Form_Registrar.jsx";
import image1 from "./cel1.jpg";
import image2 from "./cel2.jpg";
import image3 from "./cel3.jpg";
import image4 from "./cel4.jpg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Vista_Principal() {
  ///imaganes
  const coolImages = [
    {
      image: image2,
    },

    {
      image: image1,
    },
    {
      image: image3,
    },

    {
      image: image4,
    },
  ];

  return (
    <div className="App">
      <Menu />

      <main>
        <section className="hero">
          <AcordionImagenes items={coolImages} />
        </section>
        <section className="tabs">
          <div className="container">
            <ModalRegistro />
          </div>
        </section>
      </main>
    </div>
  );
}
export default Vista_Principal;
