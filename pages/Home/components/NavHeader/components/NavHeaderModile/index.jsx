import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

// components
import Dialog from 'material-ui/Dialog';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';
import {
  HOME_FORM,
  HOME_PRICING,
  HOME_FEATURES,
} from 'consts/routes';

// images
import circle from './images/circle.png';

// svg-icons
import IconButton from 'material-ui/IconButton';
import Closed from './svg-icons/Closed';
import Features from './svg-icons/Features';
import Help from './svg-icons/Help';
import Login from './svg-icons/Login';
import Pricing from './svg-icons/Pricing';

// style
import { styles, navHeaderStyle } from './styles';

@injectSheet(styles)
export default class NavHeader extends PureComponent {
  static propTypes = {
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
    toLogin: PropTypes.func,
    updateData: PropTypes.func,
    open: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    updateData: () => {},
    toLogin: () => {},
  };

  render() {
    const {
      classes,
      open,
      toLogin,
      updateData,
    } = this.props;
    return (
      <Dialog
        className={classes.dialog}
        moda
        contentStyle={navHeaderStyle.dialog}
        open={open}
        bodyClassName={classes.dialogBody}
      >
        <div className={classes.dialogScroll}>
          <div className={classes.closed}>
            <IconButton
              onClick={() => {
                updateData(false);
              }}
            >
              <Closed />
            </IconButton>
          </div>
          <List>
            <ListItem
              onClick={() => {
                updateData(false);
              }}
              style={navHeaderStyle.listItem}
              leftIcon={<Features style={navHeaderStyle.icon} />}
            >
              <Link
                style={navHeaderStyle.listItem__link}
                href={HOME_FEATURES}
                to={HOME_FEATURES}
              >
                Features
              </Link>
            </ListItem>
            <ListItem
              onClick={() => {
                updateData(false);
              }}
              style={navHeaderStyle.listItem}
              leftIcon={<Pricing style={navHeaderStyle.icon} />}
            >
              <Link
                style={navHeaderStyle.listItem__link}
                href={HOME_PRICING}
                to={HOME_PRICING}
              >
                Pricing
              </Link>
            </ListItem>
            <ListItem
              onClick={() => {
                updateData(false);
                toLogin();
              }}
              style={navHeaderStyle.listItem}
              leftIcon={<Login style={navHeaderStyle.icon} />}
            >
              <Link
                style={navHeaderStyle.listItem__link}
                to={HOME_FORM}
                href={HOME_FORM}
              >
                Login
              </Link>
            </ListItem>
            <ListItem
              onClick={() => {
                updateData(false);
              }}
              id="intercom_button"
              style={navHeaderStyle.listItem}
              primaryText="How can we help?"
              leftIcon={<Help style={navHeaderStyle.icon} />}
            />
          </List>
          <img src={circle} alt="" />
        </div>
      </Dialog>
    );
  }
}
