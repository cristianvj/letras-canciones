import React, {useState} from 'react';

const Formulario = ({guardarBusquedaLetra}) => {

  const [busqueda, guardarBusqueda] = useState({
    artista: '',
    cancion: '',
  });

  const [error, guardarError] = useState(false);

  const {artista, cancion} = busqueda;

  //Función a cada input para leer su contenido

  const actualizarState = e =>{
    guardarBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  //Consultar las APIS
  const buscarInformacion = e => {
    e.preventDefault();
    if(artista.trim() === '' || cancion.trim() === ''){
      guardarError(true);
      return;
    }
    guardarError(false)

    //Pasar al componente padre
    guardarBusquedaLetra(busqueda);
  }

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form 
            onSubmit={buscarInformacion} 
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Buscador de Letras de Canciones</legend>
              {
                error ? 
                  <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p>
                :
                  null
              }
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Artista</label>
                    <input 
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre del Artista"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Canción</label>
                    <input 
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre de la canción"
                      onChange={actualizarState}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button className="btn btn-primary float-right">Buscar</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
