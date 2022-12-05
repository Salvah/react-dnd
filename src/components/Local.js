import React from "react";

export const Local = ({ local, setAlbum, colaFigurinha }) => {
  return (
    <div style={{ border: "solid 1px blue", width: "60px", height: "80px" }}>
      {local.f?.name}
    </div>
  );
};
