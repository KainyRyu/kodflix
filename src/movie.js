import React from "react";

export default function movie({ title, image }) {
  return (
    <div className="itemMargin">
      <div className="item">
        <img src={image} alt="{title}" />
        <h2 className="overlay">{title}</h2>
      </div>
    </div>
  );
}
