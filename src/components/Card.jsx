// shortcut: rafcp

import PropTypes from "prop-types";

const Card = (props) => {
  if (props.hidden) return null;

  return (
    <div
      style={{
        border: "1px solid #000",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <p>Hello, {props.user.name}</p>
      <img src={props.user.avatar} alt={props.user.name} />
    </div>
  );
};

// define the props that this component will receive
Card.propTypes = {
  // name: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    city: PropTypes.string,
    follower: PropTypes.number,
    following: PropTypes.number,
  }),
  hidden: PropTypes.bool,
};

export default Card;
