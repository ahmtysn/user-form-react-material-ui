import React, { useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaiseButton from "material-ui/RaisedButton";

const styles = {
  button: {
    margin: 15,
  },
};

export default function Success({ origin }) {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Confirmation" />
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with further instructors</p>
        <RaiseButton
          label="New User"
          primary={true}
          style={styles.button}
          onClick={origin}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
