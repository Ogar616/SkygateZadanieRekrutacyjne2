import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import withRoot from "./withRoot";
import NavBar from "./nav";
import DescriptionCard from './descriptionCard';
import List from './list';

const styles = theme => ({
  root: {
    textAlign: "center",
    backgroundColor: theme.palette.background.paper
  }
});

const App = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <NavBar />
      <DescriptionCard/>
      <List/>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
