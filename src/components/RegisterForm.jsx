// import PropTypes from "prop-types";
import { useState } from "react";

const RegisterForm = () => {
  // fieldset - component to group inputs
  const [username, setUsername] = useState("");

  return (
    <form>
      <fieldset>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          onChange={(event) => {
            // console.log(event.target.value);
            setUsername(event.target.value);
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

// RegisterForm.propTypes = {};

export default RegisterForm;
