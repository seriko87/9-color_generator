import React, { useState, useEffect } from "react";

const SingleColor = ({ item }) => {
  const { hex, type, weight } = item;
  const [text, setText] = useState("");
  let col = "";

  if (type === "shade") {
    col = "white";
  } else {
    col = "black";
  }

  const myStyle = {
    backgroundColor: `#${hex}`,
    color: `${col}`,
  };

  const handleClick = () => {
    setText("COPIED TO CLIPBOARD!");
  };
  useEffect(() => {
    let value = setInterval(() => {
      setText("");
    }, 3000);
    return () => clearInterval(value);
  });

  return (
    <div
      style={myStyle}
      onClick={() => {
        navigator.clipboard.writeText("#" + hex);
        handleClick();
      }}
    >
      {weight}% : #{hex}
      <p className='copy'>{text}</p>
    </div>
  );
};

export default SingleColor;
