import React from "react";
import {
  DEFAULT_COLOR
} from '../constants/colors';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center m-5">
      <div className="spinner-border" style={{color: DEFAULT_COLOR, width: '3rem', height: '3rem'}} role="status">
      </div>
    </div>
  );
}

export default Spinner;