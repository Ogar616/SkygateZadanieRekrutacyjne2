import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { changeInputValue } from '../../actions';
import Select from "react-select";

import { withStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import Divider from "@material-ui/core/Divider";

import { components, suggestions } from "./inputComponents";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
    width: 200,
    maxWidth: 350,
    position: "absolute",
    right: 10,
    top: 6,
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      left: 0,
      right: 0,
      margin: "0 auto"
    }
  },
  input: {
    display: "flex",
    paddingLeft: 20,
    backgroundColor: "white"
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    )
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 16,

  },
  placeholder: {
    position: "absolute",
    fontSize: 16
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  }
});

class Input extends Component {
  state = {
    country: null,
    multi: null
  };

  render() {
    const { classes, theme, changeInputValue } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        "& input": {
          font: "inherit"
        }
      })
    };

    return (
      <div className={classes.root}>
        <Select
          classes={classes}
          styles={selectStyles}
          options={suggestions}
          components={components}
          onChange={changeInputValue}
          placeholder="Search a country"
          isClearable
        />
        <Divider />
      </div>
    );
  }
}

Input.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  changeInputValue: PropTypes.func,
};

const mapStateToProps = state => {
  return { inputValue: state.inputValue };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInputValue: value => dispatch(changeInputValue(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Input));
