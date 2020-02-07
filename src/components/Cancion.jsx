import React, {Fragment} from 'react';

const Cancion = ({letra}) => {
  if(letra.length === 0) return null;
  return (
    <Fragment>
      <h1>Letra de la Canción</h1>
      <p className="letra"> {letra} </p>
    </Fragment>
  );
}

export default Cancion;
