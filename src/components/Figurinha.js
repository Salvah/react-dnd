import React from "react";

export const Figurinha = ({ f }) => {
  return (
    <div
      style={{
        border: "solid 1px red",
        width: "55px",
        height: "75px",
      }}
    >
      {f.name}
    </div>
  );
};
