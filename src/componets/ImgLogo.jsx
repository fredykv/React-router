import React from 'react';
import logo from "../logo.svg";

const ImgLogo = (props) => {
    return (
          <div
                  className="col-md-4 border border-primary"
                  style={{ backgroundColor: props.background }}
                >
                  <img
                    src={logo}
                    className="App-logo class-img h-100 w-100 "
                    alt="logo"
                  />
                </div>   
    );
};

export default ImgLogo;