// import PropTypes from "prop-types";
import { useState } from "react";

const RegisterForm = () => {
  // fieldset - component to group inputs
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("username >>>>>", username);
    console.log("age >>>>>", age);
    console.log("password >>>>>", password);

    // TODO: Submit to API
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={username}
          onChange={(event) => {
            // console.log(event.target.value);
            setUsername(event.target.value);
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

// RegisterForm.propTypes = {};

export default RegisterForm;
