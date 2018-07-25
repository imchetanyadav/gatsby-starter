import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { fonts } from '../../theme'

const styles = {
  title: {
    fontWeight: '400',
    fontFamily: fonts.primary,
    color: 'white',
  }
};

const Title = (props) => {
  const { classes } = props;

  return (
    <Typography gutterBottom 
      className={classes.title}
      variant="display3" 
      component="h1"
    >
        {props.children}
    </Typography>
  )
}

export default withStyles(styles)(Title);