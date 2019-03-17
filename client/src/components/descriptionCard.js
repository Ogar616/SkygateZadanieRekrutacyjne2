import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275,
    marginBottom: 10
  }
};

const DescriptionCard = props => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          List of top 10 air pollution stations according to a measurements
          count.
        </Typography>
      </CardContent>
    </Card>
  );
};

DescriptionCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DescriptionCard);
