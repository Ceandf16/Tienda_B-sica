export function Lista_User({ datosForm, editarUsuario, eliminarUsuario }) {
  return (
    <div>
      <div className="container">
        {datosForm.map((datoForm, index) => (
          <div className="celular" key={index}>
            <img src={datoForm.contraseña} alt="Contraseña" />
            <div className="celular-info">
              <h2>{datoForm.nombreUser}</h2>
              <p>{datoForm.direccion}</p>
              <p className="precio">$: {datoForm.correo}</p>
              <button onClick={() => editarUsuario(index)}>Editar</button>
              <button onClick={() => eliminarUsuario(index)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Lista_User;
