function Listar_Producto({ datosForm }) {
  return (
    <div>
      <div className="container">
        {datosForm.map((datoForm, index) => (
          <div className="celular" key={index}>
            <img src={datoForm.imagenUrl} alt="iPhone" />
            <div className="celular-info">
              <h2>{datoForm.marca}</h2>
              <p>{datoForm.modelo}</p>
              <p className="precio">$: {datoForm.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Listar_Producto;
