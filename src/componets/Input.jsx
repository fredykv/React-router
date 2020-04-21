import React from 'react';

const Input = (props) => {
    return (
        <div className="input-group">
                      <form onSubmit={props.onClick}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="por ejemplo 'Blue'"
                          aria-label=""
                          aria-describedby="basic-addon1"
                          value={props.value}
                          onChange={props.onChange}
                        />
                      </form>
                      <div className="input-group-append">
                        <button
                          className="btn btn-success"
                          type="button"
                          onClick={props.onClick}
                        >
                          Guardar
                        </button>
                      </div>
                    </div>
    );
};

export default Input;