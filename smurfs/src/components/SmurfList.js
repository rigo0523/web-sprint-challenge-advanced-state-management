import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../store/actions";

const SmurfList = (props) => {
  useEffect(() => {
    props.getSmurfs();
    console.log(props.getSmurfs, "get smurfs action button");
  }, []);

  return (
    <div>
      {props.smurfs.map((e) => {
        return (
          <div key={e.id} maxWidth="sm">
            <div>
              <div>
                <h3>Name: {e.name}</h3>
                <h4>Age: {e.age}</h4>
                <h5>Height: {e.height}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state INSIDE mapstate to props SMURFLIST", state);
  return {
    smurfs: state.smurfs,
    errors: state.errors,
  };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
