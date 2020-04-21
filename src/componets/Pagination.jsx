import React from "react";

const Pagination = () => {
  return (
    <div className="containter">
      <div className="row m-2">
        {" "}
        <h3 className='mx-5 font-weight-bolder' style={{color: 'black'}}>Ejercicios de Reacts</h3>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link bg-dark border border-primary" href="/">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link bg-dark border border-primary" href="/2">
                2
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link bg-dark border border-primary " href="/3">
                3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
