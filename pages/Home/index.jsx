import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import { Element, scroller, animateScroll as scroll } from 'react-scroll';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import AvPlayCircleFilled from 'material-ui/svg-icons/av/play-circle-filled';
import { green50 } from 'material-ui/styles/colors';
import injectSheet from 'react-jss';

// components
import { IS_MOBILE } from 'consts/browser';
import GROUPS from 'consts/groups';
import {
  SIGN_UP,
  FEATURES_ANCHOR,
  PRICING_ANCHOR,
  FORM_ANCHOR,
} from 'consts/routes';
import { headerHeight } from 'theme/dimensions';
import segment from 'vendor/segment';
import {
  getToken, getEmailError, isFetching as getUserFetchingStatus, getUsernameError,
  getNewPasswordError, getUserAuthStatus,
} from 'schemes/user/selectors';
import { loginUser, forgotPassword, clearErrors, signupUser } from 'schemes/user/actions';
import { isCompanyFetching as getCompanyFetchingStatus } from 'schemes/company/selectors';
import { getFetchingStatus as getSorucesFetchingStatus } from 'schemes/sources/selectors';
import HomePageLayout from 'layouts/HomePageLayout';
import { MAIN_SCROLLBAR_ID } from 'layouts/App';
import RaisedButton from 'components/RaisedButton';
import FlipCardForm from 'components/FlipCardForm';

import NavHeader from './components/NavHeader';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FormLogin from './components/FormLogin';
import FormRegistration from './components/FormRegistration';
import FormForgot from './components/FormForgot';

import HomeParallax from './components/HomeParallax';
// images parallax
import circle from './images/circle.png';
import circleMobile from './images/circleMobile.png';
import circle1 from './images/circle1.png';
import circle2 from './images/circle2.png';
import circle3 from './images/circle3.png';

// images
import illustration from './img/illustration.png';
// import feature1 from './images/feature-1.gif';
// import feature2 from './images/feature-2.gif';
// import feature3 from './images/feature-3.gif';
// import featurePreview1 from './images/feature-preview-1.png';
// import featurePreview2 from './images/feature-preview-2.png';
// import featurePreview3 from './images/feature-preview-3.png';

import {
  styles,
  homeStyle,
} from './styles';


// const featureGifs = [feature1, feature2, feature3];
// const featurePreviews = [featurePreview1, featurePreview2, featurePreview3];

const AuthForms = {
  forgot: 'formForgot',
  login: 'formLogin',
  registration: 'formRegistration',
};

function scrollToBlock(hash) {
  const scrollProps = {
    offset: -(headerHeight + 60),
    containerId: MAIN_SCROLLBAR_ID,
    smooth: true,
    isDynamic: true,
    duration: 600,
  };

  if (hash) {
    scroller.scrollTo(hash.slice(1), scrollProps);
  } else {
    scroll.scrollToTop(scrollProps);
  }
}

@connect(
  state => ({
    token: getToken(state),
    isFetching: getUserFetchingStatus(state) ||
      getCompanyFetchingStatus(state) ||
      getSorucesFetchingStatus(state),
    isAuthenticated: getUserAuthStatus(state),
    emailError: getEmailError(state),
    passwordError: getNewPasswordError(state),
    usernameError: getUsernameError(state),
  }),
  dispatch => ({
    loginHandler: (email, password) => dispatch(loginUser(email, password)),
    forgotPasswordHandler: email => dispatch(forgotPassword(email)),
    registerUser: (...args) => dispatch(signupUser(...args)),
    clearErrors: () => dispatch(clearErrors()),
    toRegistrationPage: () => dispatch(push(SIGN_UP)),
    toSystem: () => dispatch(push(GROUPS.communication.getTableLink(
      GROUPS.communication.categories.global.name,
      GROUPS.communication.getDefaultStatus(GROUPS.communication.categories.global.name),
    ))),
  }),
)
@injectSheet(styles)
export default class Home extends Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string,
    emailError: PropTypes.string,
    passwordError: PropTypes.string,
    usernameError: PropTypes.string,
    toRegistrationPage: PropTypes.func,
    toSystem: PropTypes.func,
    forgotPasswordHandler: PropTypes.func,
    registerUser: PropTypes.func,
    loginHandler: PropTypes.func,
    clearErrors: PropTypes.func,
    location: PropTypes.shape({
      hash: PropTypes.string,
    }),
  };

  static defaultProps = {
    isFetching: false,
    isAuthenticated: false,
    token: '',
    emailError: '',
    passwordError: '',
    usernameError: '',
    forgotPasswordHandler: () => {},
    toRegistrationPage: () => {},
    toSystem: () => {},
    registerUser: () => {},
    loginHandler: () => {},
    clearErrors: () => {},
    location: {
      hash: '',
    },
  };

  state = {
    open: false,
    forms: AuthForms.login,
  };

  componentDidMount() {
    const { hash } = this.props.location;
    if (hash === `#${FORM_ANCHOR}`) {
      setTimeout(() => this.scrollToRegister(), 500);
    } else {
      setTimeout(() => scrollToBlock(hash), 500);
    }
  }

  openPopup = (link, analyticsText) => {
    segment.track(analyticsText);
    window.open(link, '_blank', 'width=600, height=350');
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  changeForms = (value) => {
    this.setState({ forms: value });
    this.props.clearErrors();
  };

  toForgot = () => this.changeForms(AuthForms.forgot);

  toLogin = () => this.changeForms(AuthForms.login);

  toRegistration = () => this.changeForms(AuthForms.registration);

  wrapInSpinner(child) {
    if (this.props.isFetching) {
      return (
        <Fragment>
          {child}
          <div className={this.props.classes.formProgress}>
            <CircularProgress size={80} thickness={5} />
          </div>
        </Fragment>
      );
    }
    return child;
  }

  scrollToRegister = () => {
    this.toRegistration();
    scrollToBlock(`#${FORM_ANCHOR}`);
  };

  scrollToLogin = () => {
    this.toLogin();
    scrollToBlock(`#${FORM_ANCHOR}`);
  };

  renderAuthCard = (formName) => {
    const {
      loginHandler, emailError, passwordError, usernameError, forgotPasswordHandler, registerUser,
      toSystem, toRegistrationPage,
    } = this.props;

    switch (formName) {
      case AuthForms.login: {
        return (
          <FormLogin
            submit={loginHandler}
            toForgot={this.toForgot}
            toRegistration={this.toRegistration}
            emailError={emailError}
            passwordError={passwordError}
            onLogin={toSystem}
          />
        );
      }
      case AuthForms.forgot: {
        return (
          <FormForgot
            submit={forgotPasswordHandler}
            toRegistration={this.toRegistration}
            toLogin={this.toLogin}
            emailError={emailError}
          />
        );
      }
      case AuthForms.registration: {
        return (
          <FormRegistration
            submit={registerUser}
            toLogin={this.toLogin}
            toForgot={this.toForgot}
            usernameError={usernameError}
            emailError={emailError}
            passwordError={passwordError}
            onSuccess={toRegistrationPage}
          />
        );
      }
      default: {
        return null;
      }
    }
  };

  render() {
    const {
      classes, emailError, passwordError, usernameError, isAuthenticated, isFetching,
    } = this.props;

    return (
      <HomePageLayout propsStyle={homeStyle.homePageLayout}>
        <header>
          <NavHeader
            hash={this.props.location.hash}
            toLogin={this.scrollToLogin}
            toFeatures={() => scrollToBlock(`#${FEATURES_ANCHOR}`)}
            toPrices={() => scrollToBlock(`#${PRICING_ANCHOR}`)}
            toRegistration={this.scrollToRegister}
          />
          <div
            className={classNames(
              classes.header,
              { [`${classes.headerMobile}`]: IS_MOBILE },
            )}
          >
            <div
              className={classNames(
                classes.headerContainer,
                { [`${classes.headerContainerMobile}`]: IS_MOBILE },
                )}
            >
              <Element name={FORM_ANCHOR}>
                <div className={classes.headerBody}>
                  <h1
                    className={classNames(
                      classes.headerBodyTitle,
                      { [`${classes.headerBodyTitleMobile}`]: IS_MOBILE },
                      )}
                  >
                    eBay Customer Support - Made Easy
                  </h1>
                  <p
                    className={classNames(
                      classes.headerBodySubscribe,
                      { [`${classes.headerBodySubscribeMobile}`]: IS_MOBILE },
                      )}
                  >
                    <b>Increase sales</b> by making sure your customers are always <b>happy</b>
                  </p>
                </div>
              </Element>
              <div>
                <div
                  className={classNames(
                  classes.headerFeaturesRow,
                    { [`${classes.headerFeaturesRowMobile}`]: IS_MOBILE },
                    )}
                >
                  <div
                    className={classNames(
                      classes.headerFeaturesColumn,
                      { [`${classes.headerFeaturesColumnMobile}`]: IS_MOBILE },
                      { [`${classes.hidden}`]: IS_MOBILE },
                      )}
                    style={IS_MOBILE ? homeStyle.emptilyStyle : homeStyle.headerFeaturesColumnImg}
                  >
                    <img src={illustration} alt="illustration" />
                  </div>
                  <div
                    className={classNames(
                      classes.headerFeaturesColumn,
                      { [`${classes.headerFeaturesColumnMobile}`]: IS_MOBILE },
                      )}
                    style={
                      IS_MOBILE ? homeStyle.emptilyStyle : homeStyle.headerFeaturesColumnFeatures
                    }
                  >
                    <ul className={classes.features}>
                      <li
                        className={classNames(
                          classes.headerFeaturesItem,
                          { [`${classes.headerFeaturesItemMobile}`]: IS_MOBILE },
                          )}
                      >
                        <CheckIcon
                          color={green50}
                          style={homeStyle.checkIcon}
                          className={classNames(
                            classes.headerFeaturesIcon,
                            { [`${classes.headerFeaturesIconMobile}`]: IS_MOBILE },
                            )}
                        />
                        Full eBay support, cases & returns included
                      </li>
                      <li
                        className={classNames(
                          classes.headerFeaturesItem,
                          { [`${classes.headerFeaturesItemMobile}`]: IS_MOBILE },
                          )}
                      >
                        <CheckIcon
                          color={green50}
                          style={homeStyle.checkIcon}
                          className={classNames(
                            classes.headerFeaturesIcon,
                            { [`${classes.headerFeaturesIconMobile}`]: IS_MOBILE },
                            )}
                        />
                        Save time by using Subivi’s automation
                      </li>
                      <li
                        className={classNames(
                        classes.headerFeaturesItem,
                          { [`${classes.headerFeaturesItemMobile}`]: IS_MOBILE },
                          )}
                      >
                        <CheckIcon
                          color={green50}
                          style={homeStyle.checkIcon}
                          className={classNames(
                            classes.headerFeaturesIcon,
                            { [`${classes.headerFeaturesIconMobile}`]: IS_MOBILE },
                            )}
                        />
                        Manage multiple stores in 1 place
                      </li>
                    </ul>
                    <RaisedButton
                      id="animationBlock"
                      label="Whatch how it works"
                      className={classes.headerFeaturesButton}
                      labelStyle={
                        IS_MOBILE ? homeStyle.raisedButtonFeaturesMobile.labelStyle : homeStyle.raisedButtonFeatures.labelStyle
                      }
                      style={
                        IS_MOBILE ? homeStyle.raisedButtonFeaturesMobile.style : homeStyle.raisedButtonFeatures.style
                      }
                      icon={<AvPlayCircleFilled />}
                      buttonStyle={homeStyle.raisedButtonFeatures.buttonStyle}
                      overlayStyle={
                        IS_MOBILE ? homeStyle.raisedButtonFeaturesMobile.overlayStyle : homeStyle.raisedButtonFeatures.overlayStyle
                      }
                      onClick={this.handleOpen}
                    />
                    <Dialog
                      modal={false}
                      autoDetectWindowHeight
                      paperClassName={classes.dialogPaperClassName}
                      open={this.state.open}
                      onRequestClose={this.handleClose}
                      contentStyle={homeStyle.dialog.contentStyle}
                      bodyStyle={homeStyle.dialog.bodyStyle}
                    >
                      <iframe
                        title="iframe"
                        src="https://www.youtube.com/embed/9OO5TBT-GGE?rel=0"
                        frameBorder="0"
                        allowFullScreen
                        className={classes.videoContainer__iframe}
                      />
                    </Dialog>
                  </div>
                  {
                    !isAuthenticated || isFetching ? (
                      <div
                        style={{ minHeight: !IS_MOBILE ? 410 : 380 }}
                        className={classNames(
                          classes.headerFeaturesColumn,
                          { [`${classes.headerFeaturesColumnMobile}`]: IS_MOBILE },
                        )}
                      >
                        <FlipCardForm
                          value={this.state.forms}
                          renderComponent={name => this.wrapInSpinner(this.renderAuthCard(name))}
                          rerender={emailError || passwordError || usernameError}
                          containerClassName={classes.flipCard}
                        />
                      </div>
                    ) : null
                  }
                </div>
              </div>
            </div>
          </div>
        </header>
        <main
          style={{ position: 'relative', paddingTop: !IS_MOBILE ? 200 : 6 }}
          className={classNames({ [`${classes.main}`]: IS_MOBILE })}
        >
          <HomeParallax
            parallaxSrc={!IS_MOBILE ? circle : circleMobile}
            parallaxContainerStyle={
              IS_MOBILE ? homeStyle.circle.circle__mobile__parallaxContainerStyle : {}
            }
          />
          <Element name={FEATURES_ANCHOR} style={homeStyle.element}>
            <Features />
            <HomeParallax
              parallaxSrc={circle1}
              parallaxPosition={IS_MOBILE ? 'left' : 'right'}
              parallaxContainerStyle={
                IS_MOBILE ? homeStyle.circle1.circle__mobile__parallaxContainerStyle : homeStyle.circle1.circle__parallaxContainerStyle
              }
            />
          </Element>
          <div style={homeStyle.element}>
            <HomeParallax
              parallaxSrc={circle2}
              parallaxContainerStyle={
                IS_MOBILE ? homeStyle.circle2.circle__mobile__parallaxContainerStyle : homeStyle.circle2.circle__parallaxContainerStyle
              }
            />
            <Testimonials toRegistration={this.scrollToRegister} />
          </div>
          <Element name={PRICING_ANCHOR} style={homeStyle.element}>
            <HomeParallax
              parallaxSrc={circle3}
              parallaxContainerStyle={
                IS_MOBILE ? homeStyle.circle3.circle__mobile__parallaxContainerStyle : homeStyle.circle3.circle__parallaxContainerStyle
              }
            />
            <Pricing toRegistration={this.scrollToRegister} />
          </Element>
        </main>
      </HomePageLayout>
    );
  }
}
