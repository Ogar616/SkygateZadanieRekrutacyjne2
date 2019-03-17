import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import {clearData, addCity} from '../actions';

import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import getData from "../apiClient";

const styles = theme => ({
  root: {
    width: "70%",
    margin: "0 auto"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class AccordionPanel extends Component {
  componentDidMount = () => {
    const { addCity, countryCode } = this.props;
    getData(countryCode, addCity);
  };

  componentDidUpdate = prevProps => {
    const { addCity, countryCode, clearData } = this.props;
    if (prevProps.countryCode !== countryCode) {
      clearData();
      getData(countryCode, addCity);
    }
  }

  render() {
    const { classes, cities } = this.props;

    return (
      <div className={classes.root}>
        {cities.map((location, index) => (
          <ExpansionPanel key={index}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {location.city}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{cities[index].description}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}

AccordionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  cities: PropTypes.array,
  countryCode: PropTypes.string,
  addCity: PropTypes.func,
  clearData: PropTypes.func
};

const mapStateToProps = state => {
  return { cities: state.cities, countryCode: state.inputValue };
};

const mapDispatchToProps = dispatch => {
  return {
    addCity: city => dispatch(addCity(city)),
    clearData: () => dispatch(clearData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AccordionPanel));
