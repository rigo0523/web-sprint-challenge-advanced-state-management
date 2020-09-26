import React, { useState } from "react";

import { connect } from "react-redux";
import { postSmurfs } from "../store/actions.js";

const Form = (props) => {
  console.log(props, "props inside form");
  const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "" });
  const handleChange = (e) => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={newSmurf.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          value={newSmurf.age}
          placeholder="age"
          onChange={handleChange}
        />
        <input
          type="text"
          name="height"
          value={newSmurf.height}
          placeholder="height"
          onChange={handleChange}
        />
        <button
          onClick={() => {
            props.postSmurfs(newSmurf);
            setNewSmurf({ name: "", age: "", height: "" });
          }}
        >
          ADD NOTE
        </button>
      </form>
    </div>
  );
};

export default connect("", { postSmurfs })(Form);
