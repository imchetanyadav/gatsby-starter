import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { fonts, colors } from '../../theme'

const styles = {
  para: {
    fontWeight: '200',
    fontFamily: fonts.secondary,
    letterSpacing: '0.3px',
    color: 'white',
  }
};

const Para = (props) => {
  const { classes } = props;

  return (
    <Typography gutterBottom 
      className={classes.para}
      variant="title" 
      component="p"
      style={{color: props.color}}
    >
        {props.children}
    </Typography>
  )
}

export default withStyles(styles)(Para);