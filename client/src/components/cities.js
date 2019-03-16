import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { getCities, getDescriptions } from "../apiClient";

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
    getCities("PL", this.props.getCities, this.props.getDescriptions);
    // getDescriptions(this.props.locations, this.props.getDescriptions)
    console.log("dd", this.props.locations);
  };
  descriptions = [];
  render() {
    const { classes, locations, descriptions } = this.props;

    console.log("render locations", locations);
    console.log("render descriptions", descriptions);

    return (
      <>
        {locations.map((location, index) => (
          <ExpansionPanel key={index}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{location}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{descriptions[index]}</Typography>
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
  return { locations: state.cities, descriptions: state.descriptions };
};

const mapDispatchToProps = dispatch => {
  return {
    getCities: cities => dispatch({ type: "GET_CITIES", cities }),
    getDescriptions: descriptions =>
      dispatch({ type: "GET_DESCRIPTIONS", descriptions })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AccordionPanel));
