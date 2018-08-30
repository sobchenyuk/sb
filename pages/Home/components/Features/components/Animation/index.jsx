import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

export default class Animation extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    fadeIn: PropTypes.bool,
    fadeOut: PropTypes.bool,
  };
  static defaultProps = {
    children: '',
  };
  render() {
    const { children, fadeIn, fadeOut } = this.props;
    return (
      <div
        className={
          classNames({
            In: fadeIn,
            Out: fadeOut,
          })}
      >
        {children}
      </div>
    );
  }
}
