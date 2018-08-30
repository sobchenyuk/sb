import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import { IS_MOBILE } from 'consts/browser';
import RaisedButton from 'components/RaisedButton';
import {
  styles,
  formStyle,
} from './styles';

@injectSheet(styles)
export default class FormLogin extends PureComponent {
  static propTypes = {
    submit: PropTypes.func.isRequired,
    toForgot: PropTypes.func.isRequired,
    emailError: PropTypes.string,
    passwordError: PropTypes.string,
    toRegistration: PropTypes.func,
    onLogin: PropTypes.func,
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
  };

  static defaultProps = {
    emailError: '',
    passwordError: '',
    toRegistration: () => {},
    onLogin: () => {},
  };

  state = {
    email: '',
    password: '',
  };

  changeName = e => this.setState({ email: e.target.value });

  changePassword = e => this.setState({ password: e.target.value });

  submitData = (event) => {
    const { email, password } = this.state;
    event.preventDefault();
    this.props.submit(email, password).then((err) => {
      if (!err) {
        this.props.onLogin();
      }
    });
  };

  render() {
    const {
      classes, emailError, passwordError, toForgot, toRegistration,
    } = this.props;
    const { email, password } = this.state;

    return (
      <form className={classNames(classes.form, { [`${classes.formMobile}`]: IS_MOBILE })} >
        <legend
          className={classNames(classes.formLegend, { [`${classes.formLegendMobile}`]: IS_MOBILE })}
        >
          Login
        </legend>
        <div className={classNames({ [`${classes.fieldMobile}`]: IS_MOBILE })}>
          <TextField
            floatingLabelText="Email"
            floatingLabelFixed
            floatingLabelStyle={IS_MOBILE ? formStyle.LabelStyleMobile : formStyle.LabelStyle}
            errorText={emailError}
            fullWidth
            onChange={this.changeName}
            value={email}
          />
          <TextField
            floatingLabelText="Password"
            floatingLabelFixed
            floatingLabelStyle={IS_MOBILE ? formStyle.LabelStyleMobile : formStyle.LabelStyle}
            type="password"
            errorText={passwordError}
            fullWidth
            onChange={this.changePassword}
            value={password}
            style={formStyle.textField}
          />
        </div>
        <br />
        <div
          className={classNames(
            classes.isGrouped,
            { [`${classes.isGroupedMobile}`]: IS_MOBILE },
            )}
        >
          <RaisedButton
            label="Login"
            type="submit"
            primary
            onClick={this.submitData}
            labelStyle={
              IS_MOBILE ? formStyle.raisedButtonMobile.labelStyle : formStyle.labelStyle
            }
            buttonStyle={
              IS_MOBILE ? formStyle.raisedButtonMobile.buttonStyle : formStyle.buttonStyle
            }
            overlayStyle={
              IS_MOBILE ? formStyle.raisedButtonMobile.overlayStyle : formStyle.overlayStyle
            }
          />
          <span className={classNames(classes.formOr, { [`${classes.formOrMobile}`]: IS_MOBILE })}>
            OR
          </span>
          <RaisedButton
            label="Get Started"
            onClick={toRegistration}
            labelStyle={
              IS_MOBILE ? formStyle.raisedButtonMobile.labelStyle : formStyle.labelStyle
            }
            buttonStyle={
              IS_MOBILE ? formStyle.raisedButtonMobile.buttonStyle : formStyle.buttonStyle
            }
            overlayStyle={
              IS_MOBILE ? formStyle.raisedButtonMobile.overlayStyle : formStyle.overlayStyle
            }
          />
        </div>
        <br />
        <div className={classes.formForgot}>
          <ul className={classes.formForgotItem}>
            <li className={classes.formForgotItemLi}>
              Forgot
            </li>
            <li className={classes.formForgotItemLi}>
              <a
                href="#/"
                className={classes.formForgotItemLiA}
                onClick={toForgot}
              >
                Username
              </a>
            </li>
            <li className={classes.formForgotItemLi}>
              <a
                href="#/"
                className={classes.formForgotItemLiA}
                onClick={toForgot}
              >
                /
              </a>
            </li>
            <li className={classes.formForgotItemLi}>
              <a
                className={classes.formForgotItemLiA}
                href="#/"
                onClick={toForgot}
              >
                Password?
              </a>
            </li>
          </ul>
        </div>
      </form>
    );
  }
}
