import React from "react";
import Card from "./Card";

const CardList = ({ pokemon }) => {
  return (
    <div className="flex flex-wrap justify-between w-100 garamond">
      {pokemon.map(a => {
        return (
          <Card name={a.name} price={a.price} type={a.type} image={a.image} />
        );
      })}
    </div>
  );
};

export default CardList;
