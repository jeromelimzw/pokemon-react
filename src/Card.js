import React from "react";

const Card = ({ name, type, price, image }) => {
  return (
    <div
      className={`ma3 ba br3 bw3 pa1 b--yellow ${
        type === "fire"
          ? "bg-light-red"
          : type === "grass"
          ? "bg-light-green"
          : type === "psychic"
          ? "bg-light-purple"
          : type === "water"
          ? "bg-light-blue"
          : type === "thunder"
          ? "bg-light-yellow"
          : "bg-lightest-blue"
      } shadow-5 grow-large pointer`}
    >
      <div className="b--light-yellow ba bw2 pa2">
        <div>
          <small className="ttu br3 bg-blue ph2 white shadow-5">{type}</small>
          <span className="f3 mh1 fw6">{name}</span>
          <span className="f3 fw7 mh4">
            <small>HP</small>
            {`${price}`}
          </span>
        </div>
        <img
          src={image}
          alt={name}
          width="250"
          className="ba br2 b--silver db bg-near-white pa2 mv2 bw2 center"
        />
      </div>
    </div>
  );
};

export default Card;
