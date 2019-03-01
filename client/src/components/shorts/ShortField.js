import React from "react";

export default ({ input, placeholder, meta: { error, touched } }) => {
  return (
    <div>
      <input
        {...input}
        style={{ marginBottom: "5px" }}
        placeholder={placeholder}
      />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
