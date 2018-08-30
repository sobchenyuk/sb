import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import TextField from 'material-ui/TextField';
import RaisedButton from 'components/RaisedButton';

import { IS_MOBILE } from 'consts/browser';
import classNames from 'classnames';
import {
  styles,
  formStyle,
} from './styles';

@injectSheet(styles)
export default class FormRegistration extends PureComponent {
  static propTypes = {
    submit: PropTypes.func.isRequired,
    usernameError: PropTypes.string,
    emailError: PropTypes.string,
    passwordError: PropTypes.string,
    toLogin: PropTypes.func,
    toForgot: PropTypes.func,
    onSuccess: PropTypes.func,
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
  };

  static defaultProps = {
    usernameError: '',
    emailError: '',
    passwordError: '',
    toLogin: () => {},
    toForgot: () => {},
    onSuccess: () => {},
  };

  state = {
    username: '',
    email: '',
    password: '',
  };

  changeName = e => this.setState({ username: e.target.value });
  changeEmail = e => this.setState({ email: e.target.value });
  changePassword = e => this.setState({ password: e.target.value });

  submitData = (event) => {
    const { submit, onSuccess } = this.props;
    const { username, email, password } = this.state;
    event.preventDefault();
    const name = username.split(' ');
    submit(name[0], name[1], email, password).then((err) => {
      if (!err) {
        onSuccess();
      }
    });
  };

  render() {
    const {
      classes, toLogin, toForgot, usernameError, emailError, passwordError,
    } = this.props;
    const { username, email, password } = this.state;

    return (
      <form className={classNames(classes.form, { [`${classes.formMobile}`]: IS_MOBILE })} >
        <legend className={classNames(
          classes.formLegend,
          { [`${classes.formLegendMobile}`]: IS_MOBILE },
          )}
        >
          Get Started
        </legend>

        <div className={classNames({ [`${classes.fieldMobile}`]: IS_MOBILE })}>
          <TextField
            floatingLabelText="Username"
            floatingLabelFixed
            floatingLabelStyle={
              IS_MOBILE ? formStyle.LabelStyleMobile : formStyle.LabelStyle
            }
            fullWidth
            errorText={usernameError}
            onChange={this.changeName}
            value={username}
            style={formStyle.textField}
          />
          <TextField
            floatingLabelText="Email"
            floatingLabelFixed
            floatingLabelStyle={
              IS_MOBILE ? formStyle.LabelStyleMobile : formStyle.LabelStyle
            }
            type="email"
            fullWidth
            errorText={emailError}
            onChange={this.changeEmail}
            value={email}
            style={formStyle.textField}
          />
          <TextField
            floatingLabelText="Password"
            floatingLabelFixed
            floatingLabelStyle={
              IS_MOBILE ? formStyle.LabelStyleMobile : formStyle.LabelStyle
            }
            type="password"
            fullWidth
            errorText={passwordError}
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
            label="Get Started"
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
            label="Login"
            onClick={toLogin}
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
