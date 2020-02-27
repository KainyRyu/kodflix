import React from "react";
import Cover from "./cover/Cover";
import FilmDatas from "./FilmDatas";

export default function Cinema() {
  return (
    <div className="container">
      {FilmDatas().map(stack => {
        return (
          <Cover
            key={stack.title}
            id={stack.id}
            titleUrl={stack.id}
            title={stack.title}
            image={stack.image}
            rating={stack.rating}
            details={stack.detail}
          />
        );
      })}
    </div>
  );
}
