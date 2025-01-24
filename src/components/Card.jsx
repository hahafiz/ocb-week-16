// shortcut: rafcp

import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div>
      {props.name}
      <p>Hello</p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
};

export default Card;
