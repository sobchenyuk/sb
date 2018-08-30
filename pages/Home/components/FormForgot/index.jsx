import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

// components
import TextField from 'material-ui/TextField';
import injectSheet from 'react-jss';
import RaisedButton from 'components/RaisedButton';
import { IS_MOBILE } from 'consts/browser';
import classNames from 'classnames';

// style
import {
  styles,
  formStyle,
} from './styles';

@injectSheet(styles)
export default class FormForgot extends PureComponent {
  static propTypes = {
    submit: PropTypes.func.isRequired,
    emailError: PropTypes.string,
    toLogin: PropTypes.func,
    toRegistration: PropTypes.func,
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
  };

  static defaultProps = {
    toLogin: () => {},
    toRegistration: () => {},
    emailError: '',
  };

  state = {
    email: '',
    stage: 1,
  };

  changeEmail = e => this.setState({ email: e.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submit(this.state.email).then((err) => {
      if (!err) {
        this.setState({ stage: 2 });
      }
    });
  };

  render() {
    const {
      classes, toRegistration, toLogin, emailError,
    } = this.props;
    const { email, stage } = this.state;

    const body = stage === 1 ? (
      <Fragment>
        <div className={classNames({ [`${classes.fieldMobile}`]: IS_MOBILE })}>
          <TextField
            floatingLabelText="Email"
            floatingLabelFixed
            floatingLabelStyle={
              IS_MOBILE ? formStyle.LabelStyleMobile : formStyle.LabelStyle
            }
            type="email"
            errorText={emailError}
            fullWidth
            onChange={this.changeEmail}
            value={email}
            style={formStyle.textField}
          />
        </div>
        <div className={classes.singleBtn}>
          <RaisedButton
            label="Submit"
            primary
            onClick={this.handleSubmit}
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
      </Fragment>
    ) : (
      <p className={classes.formField}>
        We&apos;ve just sent you an email with instructions
        to the address - {email}, please check your email.
      </p>
    );

    return (
      <form className={classNames(classes.form, { [`${classes.formMobile}`]: IS_MOBILE })} >
        <legend className={classNames(
          classes.formLegend,
          { [`${classes.formLegendMobile}`]: IS_MOBILE },
          )}
        >
          Forgot Password
        </legend>
        {body}
        <br />
        <div
          className={classNames(
            classes.isGrouped,
            { [`${classes.isGroupedMobile}`]: IS_MOBILE },
            )}
        >
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
          <span className={classNames(classes.formOr, { [`${classes.formOrMobile}`]: IS_MOBILE })}>
            &nbsp;OR&nbsp;
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
      </form>
    );
  }
}
