import React, { useState } from "react";

const InputLogin = ({ list, changeInput }) => {
  const { error, id, ...attr } = list;
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
        onBlur={changefocus}
        focused={focused.toString()}
      />
      <p className="errorInput">{error}</p>
    </>
  );
};

export default InputLogin;
