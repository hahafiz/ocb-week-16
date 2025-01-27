import PropTypes from "prop-types";

const Counter = (props) => {
  return <div>Hi {props.name}!</div>;
};

Counter.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Counter;
