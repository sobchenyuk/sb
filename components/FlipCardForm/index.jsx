import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// styles
import './styles.scss';

export default class FlipCardForm extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    containerClassName: PropTypes.string,
    renderComponent: PropTypes.func,
  };

  static defaultProps = {
    value: '',
    containerClassName: '',
    renderComponent: () => {},
  };

  state = {
    first: '',
    value: this.props.value,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState(oldVal => ({
        flipped: !oldVal.flipped,
        first: true,
      }));
      setTimeout(() => {
        this.setState({
          value: nextProps.value,
        });
      }, 400);
    }
  }

  render() {
    const { renderComponent, containerClassName } = this.props;
    const { flipped, first, value } = this.state;
    const flippedCSS = flipped ? ' FlipCard-Back-Flip' : ' FlipCard-Front-Flip';

    const form = renderComponent(value);

    return (
      <div className="FlipCard">
        <div className={classNames(`FlipCard-Front${first ? flippedCSS : ''}`, containerClassName)}>
          {form}
        </div>
        <div className={classNames(`FlipCard-Back${first ? flippedCSS : ''}`, containerClassName)}>
          {form}
        </div>
      </div>
    );
  }
}
