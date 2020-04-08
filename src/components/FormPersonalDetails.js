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

export default function FormPersonalDetails({
  nextStep,
  prevStep,
  values,
  handleChange,
}) {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };
  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter Personal Details" />
        <TextField
          hintText="Enter Your Occupation"
          floatingLabelText="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          hintText="Enter Your City"
          floatingLabelText="City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <TextField
          hintText="Enter Your Bio"
          floatingLabelText="Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />
        <RaiseButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={back}
        />
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
