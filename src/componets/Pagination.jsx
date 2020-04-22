import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="containter">
      <div className="row m-2">
        {" "}
        <h3 className='mx-5 font-weight-bolder' style={{color: 'black'}}>Ejercicios de Reacts</h3>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link bg-dark border border-primary" to="/">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link bg-dark border border-primary" to="/2">
                2
              </Link>
            </li>
            <li className="page-item ">
              <Link className="page-link bg-dark border border-primary " to="/3">
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
