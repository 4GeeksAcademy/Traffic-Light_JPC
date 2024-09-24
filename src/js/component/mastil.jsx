import PropTypes from "prop-types";
import React from "react";


const Mastil = (props) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center justify-content-center"
      style={{
        background: "black",
        height: props.heigth ? props.heigth : "9vw",
        width: props.width ? props.width : "9%",
        marginLeft: "60px",
        color: "white",
        fontSize: "4vw",
        fontWeight: "bolder",
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