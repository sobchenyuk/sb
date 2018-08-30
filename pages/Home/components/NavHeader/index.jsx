import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classNames from 'classnames';
import MenuItem from 'material-ui/MenuItem';
import {
  Toolbar,
  ToolbarGroup,
} from 'material-ui/Toolbar';
import ImageDehaze from 'material-ui/svg-icons/image/dehaze';

// components
import { MAIN_SCROLLBAR_ID } from 'layouts/App';

import {
  HOME,
  HOME_FORM,
  HOME_FORM_REGISTER,
  HOME_PRICING,
  HOME_FEATURES,
} from 'consts/routes';
import { IS_MOBILE } from 'consts/browser';

import IconButton from 'components/IconButton';
import RaisedButton from 'components/RaisedButton';
import NavHeaderMobile from './components/NavHeaderModile';
import Help from './svg-icons/Help';
import logo from './images/logo.png';

// style
import {
  styles,
  navHeaderStyle,
} from './styles';

@injectSheet(styles.header)
export default class NavHeader extends PureComponent {
  static propTypes = {
    otherPage: PropTypes.bool,
    hash: PropTypes.string,
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
    propsStyle: PropTypes.shape(), // eslint-disable-line react/require-default-props
    toRegistration: PropTypes.func,
    toLogin: PropTypes.func,
    toFeatures: PropTypes.func,
    toPrices: PropTypes.func,
  };

  static defaultProps = {
    otherPage: false,
    toLogin: () => {},
    toRegistration: () => {},
    toFeatures: () => {},
    toPrices: () => {},
    hash: '',
  };

  state = {
    fixed: false,
    open: false,
  };

  componentDidMount() {
    this.scrollGetBlock(this.findPosY(document.querySelector('#dataLabelNav')));
  }

  componentWillUnmount() {
    const scroll = document.getElementById(MAIN_SCROLLBAR_ID);
    if (scroll) {
      scroll.removeEventListener('scroll', this.eventFunc);
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  updateData = (value) => {
    this.setState({ open: value });
  };

  scrollGetBlock = (y) => {
    if (y > 0) {
      this.eventFunc = data => this.handleScroll(data, y);
      document.getElementById(MAIN_SCROLLBAR_ID).addEventListener('scroll', this.eventFunc);
    }
  };

  handleScroll = (data, y) => {
    if ((data.target.scrollTop + 30) > y) {
      this.setState({
        fixed: true,
      });
    } else {
      this.setState({
        fixed: false,
      });
    }
  };

  findPosY = (obj) => {
    let curtop = 0;
    if (obj.offsetParent) {
      while (1) {
        curtop += obj.offsetTop;
        if (!obj.offsetParent) {
          break;
        }
        obj = obj.offsetParent;
      }
    } else if (obj.y) {
      curtop += obj.y;
    }
    return curtop;
  };

  render() {
    const {
      classes, toRegistration, toLogin, hash, otherPage, propsStyle, toFeatures, toPrices,
    } = this.props;
    const { fixed, open } = this.state;

    const toolbarBg = !otherPage ? navHeaderStyle.toolbar : navHeaderStyle.toolbarFixed;

    return (
      <Toolbar
        id="dataLabelNav"
        className={classNames({ [`${classes.appBarMobile}`]: IS_MOBILE })}
        style={{ ...(fixed ? navHeaderStyle.toolbarFixed : toolbarBg), ...propsStyle }}
      >
        <div className={classNames(
          classes.toolbarContainer,
          { [`${classes.containerMobile}`]: IS_MOBILE },
          )}
        >
          <ToolbarGroup firstChild style={navHeaderStyle.toolbarGroup}>
            <nav className={classes.nav}>
              <div className={classes.navbarLeft}>
                <Link
                  className={classes.navbarLogo}
                  to={HOME}
                >
                  <span
                    className={classNames(
                      classes.navbarLogoTextBig,
                      { [`${classes.navbarLogoTextBigMobile}`]: IS_MOBILE },
                    )}
                  >
                    <span
                      className={classNames(
                        classes.navbarLogoTextBigSpanFirst,
                        { [`${classes.navbarLogoTextBigSpanFirstMobile}`]: IS_MOBILE },
                      )}
                    >
                      <img
                        src={logo}
                        className={classNames({ [`${classes.logoMobile}`]: IS_MOBILE })}
                        alt=""
                      />
                    </span>
                    <span className={classes.navbarLogoTextBigSpanLast} />
                  </span>
                  <span
                    className={classNames(
                      classes.navbarLogoText,
                      { [`${classes.navbarLogoTextMobile}`]: IS_MOBILE },
                    )}
                  >
                    Subivi
                  </span>
                </Link>
                <ul className={classes.navbarNav}>
                  <li className={classNames(
                    { [`${classes.navbarNavLi}`]: !IS_MOBILE },
                    { [`${classes.navbarNavLiMobile}`]: IS_MOBILE },
                    )}
                  >
                    <MenuItem
                      primaryText={
                        <Link
                          className={classNames(
                             classes.navbarNavLiA,
                             { [`${classes.activeNavbarNavLiA}`]: hash === '#features' },
                          )}
                          to={HOME_FEATURES}
                        > Features
                        </Link>
                      }
                      onClick={toFeatures}
                      style={
                        hash === '#features' ? navHeaderStyle.navbarNavLiASpan : navHeaderStyle.activeNavbarNavLiASpan
                      }
                    />
                  </li>
                  <li className={classNames(
                    { [`${classes.navbarNavLi}`]: !IS_MOBILE },
                    { [`${classes.navbarNavLiMobile}`]: IS_MOBILE },
                  )}
                  >
                    <MenuItem
                      primaryText={
                        <Link
                          className={classNames(
                            classes.navbarNavLiA,
                            { [`${classes.activeNavbarNavLiA}`]: hash === '#pricing' },
                          )}
                          to={HOME_PRICING}
                        >
                          Pricing
                        </Link>
                      }
                      onClick={toPrices}
                      style={
                        hash === '#pricing' ? navHeaderStyle.navbarNavLiASpan : navHeaderStyle.activeNavbarNavLiASpan
                      }
                    />
                  </li>
                  <li className={classNames(
                    { [`${classes.navbarNavLi}`]: !IS_MOBILE },
                    { [`${classes.navbarNavLiMobile}`]: IS_MOBILE },
                  )}
                  >
                    <MenuItem
                      primaryText={
                        <Link
                          className={classNames(
                            classes.navbarNavLiA,
                            { [`${classes.activeNavbarNavLiA}`]: hash === '#form' },
                          )}
                          to={HOME_FORM}
                          onClick={toLogin}
                        >
                          Login
                        </Link>
                      }
                      style={
                        hash === '#form' ? navHeaderStyle.navbarNavLiASpan : navHeaderStyle.activeNavbarNavLiASpan
                      }
                    />
                  </li>
                  <li
                    className={classNames(
                      classes.btn,
                      { [`${classes.btnMobile}`]: IS_MOBILE },
                    )}
                  >
                    <RaisedButton
                      className={classes.button}
                      buttonStyle={
                        IS_MOBILE ? navHeaderStyle.raisedButtonMobile.labelStyle : navHeaderStyle.raisedButton.buttonStyle
                      }
                      overlayStyle={
                        IS_MOBILE ? navHeaderStyle.raisedButtonMobile.labelStyle : navHeaderStyle.raisedButton.overlayStyle
                      }
                    >
                      <Link
                        to={HOME_FORM_REGISTER}
                        style={
                          IS_MOBILE ? navHeaderStyle.raisedButtonMobile.labelStyle : navHeaderStyle.raisedButton.labelStyle
                        }
                        onClick={toRegistration}
                      >
                        Get Started
                      </Link>
                    </RaisedButton>
                  </li>
                  <li
                    className={classNames(
                      classes.navbarNavLiLine,
                      { [`${classes.navbarNavLiMobile}`]: IS_MOBILE },
                    )}
                  />
                  <li className={classNames({ [`${classes.navbarNavLiMobile}`]: IS_MOBILE })}>
                    <Link
                      className={classes.navbarNavLiA}
                      style={navHeaderStyle.liLastA}
                      id="intercom_button"
                      href="#/"
                    >How can we help?
                      <span className={classes.navbarNavLiLastIcon}>
                        <Help viewBox="0 0 20 17" style={navHeaderStyle.helpIcon} />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <NavHeaderMobile
                toLogin={toLogin}
                updateData={this.updateData}
                open={open}
              />
            </nav>
          </ToolbarGroup>
          <ToolbarGroup style={{ zIndex: 1 }}>
            <IconButton
              style={
                IS_MOBILE ? navHeaderStyle.appBarStyleMobile.iconStyleRight : navHeaderStyle.hidden
              }
              onClick={this.handleOpen}
            >
              <ImageDehaze className={classes.imageDehaze} />
            </IconButton>
          </ToolbarGroup>
        </div>
      </Toolbar>
    );
  }
}
