import PropTypes from "prop-types";
import React, {useState} from "react";


const Card = (props) => {

	const [ color, setColor ] = useState("red");
	const [ lights, setLight ] = useState(["red","yellow","green"])

  return (
    <div className="container justify-content-center">
    <div
      className=" container justify-content-center card rounded d-flex align-items-center"
      style={{
        background: "black",
        height: props.heigth ? props.heigth:"9vw",
        width: props.width ? props.width:"9%",
      }}
    >
      <div className="card-body">
          {lights.map((light, index) =>
						<button
						key={index}
						onClick={() => setColor(light)}
						className={`btn light ${light == color ? "active" : ""}`}
            style={{
							backgroundColor: light,
							width: "6rem",
							height: "6rem",
              margin: "0.5rem 0",
							borderRadius: "50%",
							cursor: "pointer", 
							boxShadow: light === color ? "0px 0px 40px 20px rgba(255, 255, 0, 1)" : "none",
						}}>
						</button>
					)}
      </div>
    </div>
    </div>
  );
};

Card.propTypes = {
    value: PropTypes.string,
    heigth: PropTypes.string,
    width: PropTypes.string,
}

export default Card;