import React from "react";
import ImgLogo from "./ImgLogo";
import CardBody from "./CardBody";

const Cards = (props) => {
  return (
    <div className="card mb-3 border-dark bg-dark p-1" style={{ maxWidth: "540px" }}>
      <div className="row no-gutters">
        <ImgLogo background={props.background} />
        <CardBody
          value={props.value}
          onChange={props.onChange}
          onClick={props.onClick}
        />
      </div>
    </div>
  );
};

export default Cards;

