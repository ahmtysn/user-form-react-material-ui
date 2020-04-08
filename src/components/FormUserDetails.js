import React, { useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaiseButton from "material-ui/RaisedButton";

const styles = {
  button: {
    margin: 15,
  },
};

export default function FormUserDetails({ nextStep, values, handleChange }) {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter User Details" />
        <TextField
          hintText="Enter Your First Name"
          floatingLabelText="First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          hintText="Enter Your Last Name"
          floatingLabelText="Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
        <RaiseButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={next}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
