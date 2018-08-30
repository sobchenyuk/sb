import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import styles from './style';

@injectSheet(styles)
export default class HomeParallax extends PureComponent {
  static propTypes = {
    parallaxPosition: PropTypes.string,
    parallaxSrc: PropTypes.string,
    parallaxContainerStyle: PropTypes.shape(), // eslint-disable-line react/require-default-props
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
    parallaxContentStyle: PropTypes.shape(), // eslint-disable-line react/require-default-props
  };
  static defaultProps = {
    parallaxPosition: '',
    parallaxSrc: '',
  };
  state = {
    position: 'Right',
  };
  render() {
    const {
      classes,
      parallaxPosition,
      parallaxSrc,
      parallaxContainerStyle,
      parallaxContentStyle,
    } = this.props;
    const positionMargin = parallaxPosition === 'left' ? 'Right' : 'Left';
    const margin = {
      [`margin${parallaxPosition ? positionMargin : this.state.position}`]: 'auto',
    };
    return (
      <div
        style={{ ...parallaxContainerStyle }}
        className={classes.homeParallax}
      >
        <div className={classes.container}>
          <img
            className={classes.img}
            style={{ ...margin, ...parallaxContentStyle }}
            src={parallaxSrc}
            alt=""
          />
        </div>
      </div>
    );
  }
}
