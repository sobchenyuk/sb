import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';

import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { HOME, PRIVACY, TERMS, BLOG } from 'consts/routes';
// components
import classNames from 'classnames';
import { IS_MOBILE } from 'consts/browser';

// fonts
import './fonts.scss';

// svg
import MailIcon from './svg-icons/Mail';
import TwitterIcon from './svg-icons/Twitter';
import LinkIcon from './svg-icons/Link';
import FacebookIcon from './svg-icons/Facebook';

// images
import logo from './images/logo.png';

import { styles, defaultStyle } from './style';

@injectSheet(styles)
export default class HomePageLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
    propsStyle: PropTypes.shape(), // eslint-disable-line react/require-default-props
  };

  static defaultProps = {
    children: '',
  };

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { classes, propsStyle, children } = this.props;
    return (
      <div style={{ ...defaultStyle.styleOne, ...propsStyle }}>
        {children}

        <footer className={classNames(classes.footer, { [`${classes.footerMobile}`]: IS_MOBILE })}>
          <div
            className={classNames(classes.container, { [`${classes.containerMobile}`]: IS_MOBILE })}
          >
            <div className={classNames(classes.row, { [`${classes.rowMobile}`]: IS_MOBILE })}>
              <div className={classes.col2} style={defaultStyle.styleTwo}>
                <Link to={HOME}>
                  <img src={logo} alt="" className="logo" />
                </Link>
              </div>
              <div
                className={classNames(classes.col2, { [`${classes.hidden}`]: IS_MOBILE })}
                style={{ marginRight: 'auto', marginLeft: 61 }}
              >
                <h6>Company</h6>
                <ul className={classes.footerText}>
                  <li>
                    <Link to={TERMS}>
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to={PRIVACY}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={BLOG}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="intercom_button"
                      href="#/"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={classNames(classes.col2, { [`${classes.colMobile}`]: IS_MOBILE })}>

                <div
                  className={classNames(classes.footerSocial, {
                    [`${classes.footerSocialMobile}`]: IS_MOBILE,
                  })}
                >
                  <ul
                    className={classNames(classes.footerText, classes.footerSocialUl, {
                      [`${classes.footerSocialUlMobile}`]: IS_MOBILE,
                    })}
                  >
                    <li
                      className={classNames(classes.footerSocialUlLi, {
                        [`${classes.footerSocialUlLiMobile}`]: IS_MOBILE,
                      })}
                    >
                      <a
                        href="mailto:michael@subivi.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                        tabIndex="0"
                      >
                        <MailIcon
                          viewBox="0 0 20 16"
                          style={{ width: 20, height: 16, fill: 'none' }}
                        />
                      </a>
                    </li>
                    <li
                      className={classNames(classes.footerSocialUlLi, {
                        [`${classes.footerSocialUlLiMobile}`]: IS_MOBILE,
                      })}
                    >
                      <a
                        href="https://twitter.com/subivi"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                        tabIndex="0"
                      >
                        <TwitterIcon
                          viewBox="0 0 20 17"
                          style={{ width: 20, height: 17, fill: 'none' }}
                        />
                      </a>
                    </li>
                    <li
                      className={classNames(classes.footerSocialUlLi, {
                        [`${classes.footerSocialUlLiMobile}`]: IS_MOBILE,
                      })}
                    >
                      <a
                        href="https://www.linkedin.com/company-beta/18008304/"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                        tabIndex="0"
                      >
                        <LinkIcon
                          viewBox="0 0 20 18"
                          style={{ width: 20, height: 18, fill: 'none' }}
                        />
                      </a>
                    </li>
                    <li
                      className={classNames(classes.footerSocialUlLi, {
                        [`${classes.footerSocialUlLiMobile}`]: IS_MOBILE,
                      })}
                    >
                      <a
                        href="https://www.facebook.com/subivi.crm"
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                        tabIndex="0"
                      >
                        <FacebookIcon
                          viewBox="0 0 20 20"
                          style={{ width: 20, height: 20, fill: 'none' }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={classes.footerCopir}>© {new Date().getFullYear()} Subivi</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
