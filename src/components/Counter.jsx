import PropTypes from "prop-types";
import { useState } from "react";
import "./Counter.css";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((previousCount) => {
      return previousCount + 1;
    });
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
      }}
    >
      <p className="title">Hi {props.name}!</p>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Add 1</button>
    </div>
  );
};

Counter.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Counter;
