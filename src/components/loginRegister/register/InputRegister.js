import React, { useState } from "react";

const InputRegister = ({ list, changeInput, data, success }) => {
  const { error, id, name, ...attr } = list;
  const [focused, setFocused] = useState(false);
  const changefocus = () => {
    setFocused(true);
  };
  return (
    <>
      <input
        {...attr}
        onChange={changeInput}
        id={id}
        name={name}
        value={data[Object.keys(data).find((val) => val === name)]}
        onBlur={changefocus}
        focused={success ? false : focused.toString()}
      />
      <p className="errorInput">{error}</p>
    </>
  );
};

export default InputRegister;
