import React from "react";
import ImgLogo from "./ImgLogo";

const CardsReact = (props) => {
  return (
    <div className="col-3">
      <div className="card mb-3 border-dark bg-dark p-1" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <ImgLogo background={props.color} />
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-white">{props.color}</h5>
              <button
                onClick={() => props.delete(props.id)}
                className="btn btn-primary"
              >
                Borrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsReact;
