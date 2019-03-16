import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { getData } from "../apiClient";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class AccordionPanel extends Component {
  componentDidMount = () => {
     getData("PL", this.props.addCity);
  };

  render() {
    const { classes, cities, descriptions } = this.props;

    // console.log("render locations", cities);
    // console.log("render descriptions", descriptions);

    return (
      <>
        {cities.map((location, index) => (
          <ExpansionPanel key={index}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{location.city}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{cities[index].description}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </>
    );
  }
}

AccordionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return { cities: state.cities, descriptions: state.descriptions };
};

const mapDispatchToProps = dispatch => {
  return {
    getCities: cities => dispatch({ type: "GET_CITIES", cities }),
    addCity: city =>
      dispatch({ type: "ADD_CITY", city })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AccordionPanel));
