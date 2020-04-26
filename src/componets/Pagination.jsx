import React from "react";
import { Link } from "react-router-dom";
import Mode from "./Mode";


const Pagination = (props) => {
  
  return (
    <div className="containter">
      <div className="row m-2">
        {" "}
        <div className="">
          <h3 className="mx-5 font-weight-bolder" style={{ color: "black" }}>
            Ejercicios de Reacts
          </h3>
          <div className="ml-5 pl-5">
            {" "}
            <Mode mode={props.mode} changeMode={props.changeMode} />
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <Link
                className="page-link bg-dark border border-primary"
                to="/"
              >
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link bg-dark border border-primary" to="/2">
                2
              </Link>
            </li>
            <li className="page-item ">
              <Link
                className="page-link bg-dark border border-primary "
                to="/3"
              >
                3
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
