import React, { useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaiseButton from "material-ui/RaisedButton";

const styles = {
  button: {
    margin: 15,
  },
};

export default function Confirm({ nextStep, prevStep, values }) {
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
        <AppBar title="Confirmation" />
        <List>
          <ListItem primaryText="First Name" secondaryText={values.firstName} />
          <ListItem primaryText="Last Name" secondaryText={values.lastName} />
          <ListItem primaryText="Email" secondaryText={values.email} />
          <ListItem
            primaryText="Occupation"
            secondaryText={values.occupation}
          />
          <ListItem primaryText="City" secondaryText={values.city} />
          <ListItem primaryText="Bio" secondaryText={values.bio} />
        </List>
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
