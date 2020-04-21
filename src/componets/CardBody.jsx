import React from 'react';
import Input from './Input'

const CardBody = (props) => {
    return (
        <div className="col-md-8 ">
        <div className="card-body">
          <h5 className="card-title text-white">Administrador de colores</h5>
          <p className="card-text text-white">
            Ingrese el nombre de un color en ingles
          </p>
          <Input onSubmit={props.onClick} value={props.value} onChange={props.onChange} onClick={props.onClick} />
        </div>
      </div>
    );
};

export default CardBody;