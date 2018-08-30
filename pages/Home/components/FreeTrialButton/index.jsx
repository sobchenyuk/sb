import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import injectStyles from 'react-jss';
import classNames from 'classnames';

import { SIGN_UP } from 'consts/routes';
import segment from 'vendor/segment';

const FreeTrialButton = ({ classes, className }) => (
  <Link
    href={SIGN_UP}
    to={SIGN_UP}
    onClick={() => segment.track('Clicked on main registration button')}
    className={classNames(classes.button, className)}
  >
    Try free for 14 days
  </Link>
);

FreeTrialButton.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
};

FreeTrialButton.defaultProps = {
  className: '',
};

export default injectStyles({
  button: {
    background: '#b15ad6 !important', // remove important after remove scss from home page
    fontWeight: 500,
    borderRadius: 3,
    width: 190,
    height: 60,
    lineHeight: '60px',
    color: '#fff',
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'center',
    boxShadow: '0 0 20px #000',
    textDecoration: 'none',
  },
})(FreeTrialButton);
