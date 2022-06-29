import React from "react";

function Input({ type, placeholder, value, onChange, disabled }) {
  return (
    <input
      className="w-full bg-white font-normal text-[#040404] border border-[#4F826F] focus:border-[#4F826F] focus:ring-1 focus:ring-[#4F826F] p-1 pl-3"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      defaultValue={value}
    />
  );
}

export { Input };
