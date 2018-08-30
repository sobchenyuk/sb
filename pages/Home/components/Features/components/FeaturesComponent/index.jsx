import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';

// components
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IS_MOBILE } from 'consts/browser';

// styles
import { styles, defaultStyle } from './styles';

// svg
import Logo from './svg-icons/Logo/index';

@injectSheet(styles)
export default class FeaturesComponent extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    propsClassName: PropTypes.string,
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
  };

  static defaultProps = {
    children: '',
    propsClassName: '',
  };
  state = {};
  render() {
    const { classes, children, propsClassName } = this.props;
    return (
      <div
        className={classNames(
          classes.featuresComponent,
          { [`${classes.featuresComponentMobile}`]: IS_MOBILE },
          { [propsClassName]: propsClassName },
        )}
      >
        <div className={classes.featuresComponentHeader}>
          <Logo viewBox="0 0 16 22" style={defaultStyle.logo} />
        </div>
        <div className={classes.featuresComponentBody}>{children}</div>
      </div>
    );
  }
}
