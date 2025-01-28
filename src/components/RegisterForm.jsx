import PropTypes from "prop-types";

const RegisterForm = (props) => {
  // fieldset - component to group inputs

  return (
    <form>
      <fieldset>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" />
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

RegisterForm.propTypes = {};

export default RegisterForm;
