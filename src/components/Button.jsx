import React from "react";

function Button(props) {
  return (
    <button className="bg-[#4F826F] text-[#F2F2F0] font-bold text-base rounded-md p-2 pl-4 pr-4 w-full" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export { Button };
