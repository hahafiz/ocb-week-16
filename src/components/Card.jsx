// shortcut: rafcp

import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div>
      <p>Hello, {props.user.name}</p>
      <img src={props.user.avatar} alt={props.user.name} />
    </div>
  );
};

Card.propTypes = {
  // name: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    city: PropTypes.string,
    follower: PropTypes.number,
    following: PropTypes.number,
  }),
};

export default Card;
