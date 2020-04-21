import React from "react";

const Mode = (props) => {
  return (
    <div>
      <button
        type="button"
        className={props.mode.clasName}
        onClick={() => props.changeMode(props.mode.mod)}
      >
        {props.mode.modInv}
      </button>
    </div>
  );
};

export default Mode;
