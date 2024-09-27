import PropTypes from "prop-types";
import React from "react";


const Mastil = (props) => {
  return (
    <div
      className="container justify-content-center d-flex align-items-center"
      style={{
        background: "black",
        height: props.heigth ? props.heigth : "9vw",
        width: props.width ? props.width : "9%",
      }}
    >
    </div>
  );
};

Mastil.propTypes = {
    value: PropTypes.string,
    heigth: PropTypes.string,
    width: PropTypes.string,
}

export default Mastil;