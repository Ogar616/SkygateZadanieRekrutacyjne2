import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import withRoot from "./components/withRoot";
import NavBar from "./components/nav";
import Input from './components/input';
import AccordionPanel from './components/cities';

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
      <Input/>
      <AccordionPanel/>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
