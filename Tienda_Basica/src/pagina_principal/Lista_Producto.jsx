import React, { useState } from "react";
import Gestionar_Producto from "./GestionProducto";
import './Vista_principal.css'
function Listar_Producto({ datosForm, actualizarListaB }) {
  const [mostrarGestionar, setMostrarGestionar] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  

 

  const handleAction = (datoForm) => {
    setMostrarGestionar(true);
    setProductoSeleccionado(datoForm);
  };

  const handleClose = () => {
    setMostrarGestionar(false);
  };

  const handleSaveChanges = (productoEditado) => {
  console.log("handle save change editar");
  
  const updatedList = datosForm.map(item => {
    if (item.id === productoEditado.id) {
      return productoEditado; 
    }
    return item; 
  });

  actualizarListaB(updatedList); 
  handleClose();
};
const handleDelete = (productoId) => {
  const updatedList = datosForm.filter(item => item.id !== productoId);
  actualizarListaB(updatedList);
  handleClose();
};
  

  return (
    <div>
      <div className="container">
        {datosForm.map((datoForm, index) => (
          <div className="celular" key={datoForm.id}>
            <img src={datoForm.imagenUrl}  />
            <div className="celular-info">
              <h2>{datoForm.marca}</h2>
              <p>{datoForm.modelo}</p>
              <p className="precio">$: {datoForm.precio}</p>
              <div>
                <button className="btnAccion" onClick={() => handleAction(datoForm)}>Acción</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {mostrarGestionar && (
        <Gestionar_Producto
          datosForm={productoSeleccionado}
          onClose={handleClose}
          onSave={handleSaveChanges}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default Listar_Producto;