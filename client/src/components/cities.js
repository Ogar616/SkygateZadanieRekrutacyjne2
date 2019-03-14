import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
    fetch(
      "https://api.openaq.org/v1/measurements?country=PL&parametr=pm10&limit=10&sort=desc",
      {
        mode: "cors",
        method: "GET"
      }
    )
      .then(response => {
        return response.json();
      })
      .then(items => {
        return this.props.getCities(items.results);
      });
    fetch(
      "https://en.wikipedia.org/w/api.php?action=query&titles=Warsaw&prop=revisions&rvprop=content&format=json",
      {
        mode: "cors",
          method: "GET",
      }
    )
      .then(response => {
        return response.json();
      })
      .then(items => {
        return this.props.getDescriptions(items);
      });
  };
  render() {
    const { classes, cities, descriptions } = this.props;

      console.log("render cities", cities);
    console.log("render desc",descriptions);
    return (
      <>
        {cities.map((city, index) => (
          <ExpansionPanel key={index}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {city.location}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
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
    getDescriptions: description =>
      dispatch({ type: "GET_DESCRIPTION", description })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AccordionPanel));
