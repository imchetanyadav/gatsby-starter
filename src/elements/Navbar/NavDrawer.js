import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { Flex } from 'rebass'
import MenuIcon from 'mdi-react/MenuIcon'
import NavLink from './NavLink'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  button: {
    padding: 0,
    minWidth: '50px',
  }
};

class NavDrawer extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
          <Flex flexDirection='column' mt={3} ml={2}>
          <NavLink
            to='/#news'
            children='News'
          />
          <NavLink
            to='/#contest'
            children='Contest'
          />
          <NavLink
            to='/#about'
            children= 'About'
          />
          <NavLink
            to='/#join'
            children='Join'
          />
          </Flex>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('right', true)} className={classes.button}>
          <MenuIcon color='#000' />
        </Button>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer) ;
