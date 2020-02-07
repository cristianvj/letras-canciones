import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion';
import Info from './components/Info';

function App() {
  //Definir el State
  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');
  const [info, setInfo] = useState({});

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0) return;

    const consultarAPILetra = async ()=>{
      const {artista, cancion} = busquedaLetra;
      const URL = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const URL2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      
      const [letra, informacion] = await Promise.all([
        axios(URL),
        axios(URL2)
      ])

      setLetra(letra.data.lyrics);
      setInfo(informacion.data.artists[0]);

    };
    consultarAPILetra();
  }, [busquedaLetra, info]);

  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra = {guardarBusquedaLetra}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info 
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
