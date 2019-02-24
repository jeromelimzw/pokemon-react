import React from "react";
import Card from "./Card";

const CardList = ({ pokemon, filter }) => {
  return (
    <div className="flex flex-wrap justify-between w-100 garamond">
      {pokemon
        .filter(
          a =>
            a.name.toLowerCase().includes(filter.toLowerCase()) ||
            a.type.toLowerCase().includes(filter.toLowerCase())
        )
        .map(a => {
          return (
            <Card
              name={a.name}
              price={a.price}
              type={a.type}
              image={a.image}
              key={a.name}
            />
          );
        })}
    </div>
  );
};

export default CardList;
