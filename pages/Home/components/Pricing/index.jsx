import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import AnimatedNumber from 'react-animated-number';
import { formatMoney } from 'accounting';

// components
import {
  BASIC,
  PREMIUM,
  ENTERPRISE,
  MONTHLY,
  ANNUALLY,
  PLANS,
  CURRENCY,
} from 'consts/paypal';
import { HOME_FORM_REGISTER } from 'consts/routes';
import { IS_MOBILE } from 'consts/browser';
import RaisedButton from 'components/RaisedButton';
import classNames from 'classnames';
import { Link } from 'react-router';

// svg
import ActionDone from './svg-icons/ActionDone';
import Done from './svg-icons/Done';

// styles
import { styles, pricingStyle } from './styles';

@injectSheet(styles)
export default class Pricing extends PureComponent {
  static propTypes = {
    toRegistration: PropTypes.func,
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
  };

  static defaultProps = {
    toRegistration: () => {},
  };

  state = {
    period: MONTHLY,
    cardHover: 1,
  };

  switchPeriod = period => this.setState({ period });

  hoverCard = (index) => {
    this.setState({ cardHover: index });
  };

  removeHoverCard = () => {
    this.setState({ cardHover: 1 });
  };

  renderPrice = (plan, booll) => {
    const { period } = this.state;
    const price = PLANS[plan][period];
    const money = booll !== false ? n => formatMoney(n, CURRENCY, 0) : n => n;

    return (
      <AnimatedNumber
        initialValue={0}
        value={price}
        stepPrecision={0}
        duration={300}
        formatValue={money}
      />
    );
  };

  render() {
    const { classes, toRegistration } = this.props;
    const { period, cardHover } = this.state;
    return (
      <section
        className={
          classNames({
          [classes.pricing]: true,
          [classes.pricingMobile]: IS_MOBILE,
        })}
      >

        <div
          className={classNames(
            classes.pricingText,
            { [`${classes.pricingTextMobile}`]: IS_MOBILE },
            )}
        >
          <h2
            className={classNames(
              classes.pricingTextTitle,
              { [`${classes.pricingTextTitleMobile}`]: IS_MOBILE },
              )}
          >
            Pricing that fits you
          </h2>
          <p
            className={classNames(
              classes.pricingTextSubscribe,
              { [`${classes.pricingTextSubscribeMobile}`]: IS_MOBILE },
              )}
          >
            Unlimited 7 days trial
            <span
              className={classNames({ [`${classes.pricingTextSubscribeSmalMobile}`]: IS_MOBILE })}
            >
              <span
                className={IS_MOBILE ? classes.hidden : classes.visible}
              >
              &nbsp;-&nbsp;
              </span>
              no credit card required
            </span>
          </p>
        </div>
        <div
          className={
            classNames({
              [classes.pricingContainer]: true,
              [classes.pricingContainerMobile]: IS_MOBILE,
          })}
        >

          <div className={classNames(
            classes.pricingSwitchButton,
            { [`${classes.pricingSwitchButtonMobile}`]: IS_MOBILE },
          )}
          >
            <RaisedButton
              label={MONTHLY}
              onClick={() => this.switchPeriod(MONTHLY)}
              style={pricingStyle.pricingSwitchButton.style}
              labelStyle={pricingStyle.pricingSwitchButton.labelStyle}
              buttonStyle={pricingStyle.pricingSwitchButton.buttonStyle}
              overlayStyle={pricingStyle.pricingSwitchButton.overlayStyle}
            />
            <RaisedButton
              label={ANNUALLY}
              onClick={() => this.switchPeriod(ANNUALLY)}
              style={pricingStyle.pricingSwitchButton.style}
              labelStyle={pricingStyle.pricingSwitchButton.labelStyle}
              buttonStyle={pricingStyle.pricingSwitchButton.buttonStyle}
              overlayStyle={pricingStyle.pricingSwitchButton.overlayStyle}
            />
            <RaisedButton
              label={period}
              primary
              className={classNames({
                [classes.activePlan]: true,
                [classes.activePlanLeft]: period === MONTHLY,
                [classes.activePlanRight]: period !== MONTHLY,
              })}
              style={pricingStyle.pricingSwitchButton.style}
              labelStyle={pricingStyle.pricingSwitchButton.labelStyle}
              buttonStyle={pricingStyle.pricingSwitchButton.buttonStyle}
              overlayStyle={pricingStyle.pricingSwitchButton.overlayStyle}
            />
          </div>
          <div
            className={
              classNames({
                [classes.pricingColumns]: true,
                [classes.pricingColumnMobile]: IS_MOBILE,
            })
            }
          >
            {/* card left */}
            <div
              onMouseOver={() => this.hoverCard(0)}
              onFocus={() => this.hoverCard(0)}
              onMouseOut={this.removeHoverCard}
              onBlur={this.removeHoverCard}
              className={
                classNames({
                  [classes.pricingTable]: true,
                  [classes.activePricingTable]: cardHover === 0 && !IS_MOBILE,
                  [classes.pricingTableMobile]: IS_MOBILE,
                  [classes.pricingTableLeft]: !IS_MOBILE,
                })}
            >
              <div className={
                classNames({
                  [classes.pricingTableHeader]: true,
                  [classes.activePricingTableHeader]: cardHover === 0 && !IS_MOBILE,
                })}
              >
                <h3 className={
                  classNames({
                    [classes.priceTitle]: true,
                    [classes.activePricingTextTitle]: cardHover === 0 && !IS_MOBILE,
                  })
                }
                >
                  {BASIC}
                </h3>
                <span className={
                  classNames({
                    [classes.priceValueBg]: true,
                    [classes.activePriceValueBg]: cardHover === 0 && !IS_MOBILE,
                    [classes.priceValueBgMobile]: IS_MOBILE,
                })}
                >
                  {this.renderPrice(BASIC, false)}
                </span>
                <span className={
                  classNames({
                    [classes.priceValue]: true,
                    [classes.activePriceValue]: cardHover === 0 && !IS_MOBILE,
                  })}
                >
                  {this.renderPrice(BASIC)}
                </span>
                <div>
                  <ul className={
                    classNames({
                      [classes.priceListItem]: true,
                      [classes.activePriceListItem]: cardHover === 0 && !IS_MOBILE,
                    })}
                  >
                    <li className={classes.priceListItemText}>
                      <span
                        className={
                          classNames({
                            [classes.billed]: true,
                            [classes.activeBilled]: cardHover === 0 && !IS_MOBILE,
                          })}
                        style={
                          period === MONTHLY ? pricingStyle.billedMONTHLY : pricingStyle.billedANNUALLY
                        }
                      >
                        * billed annually
                      </span>
                    </li>
                    <li className={
                      classNames({
                        [classes.priceListItemText]: true,
                        [classes.activePriceListItemTextPer]: cardHover === 0 && !IS_MOBILE,
                      })}
                    >
                        per agent/month
                    </li>
                  </ul>
                </div>
              </div>
              <div className={classes.pricingTableLiner} />
              <div className={
                classNames({
                  [classes.pricingTableBody]: true,
                  [classes.activePricingTableBody]: cardHover === 0 && !IS_MOBILE,
                  [classes.pricingTableBodyMobile]: IS_MOBILE,
                  })
                }
              >
                <div>
                  <ul className={classes.priceBodyListItem}>
                    <li className={classes.priceBodyListItemText}>
                      <i className={classes.priceBodyListItemTextIcon}>
                        <Done
                          viewBox="0 0 19 13"
                          style={pricingStyle.done}
                        />
                      </i>
                      Up to <span className={classes.colorBlue}> 2 sources</span> (eBay &amp; Gmail)
                    </li>
                    <li className={classes.priceBodyListItemText}>
                      <i className={classes.priceBodyListItemTextIcon}>
                        <Done
                          viewBox="0 0 19 13"
                          style={pricingStyle.done}
                        />
                      </i>
                      <span className={classes.colorBlue}>Unlimited</span> tickets/messages
                    </li>
                    <li className={classes.priceBodyListItemText}>
                      <i className={classes.priceBodyListItemTextIcon}>
                        <Done
                          viewBox="0 0 19 13"
                          style={pricingStyle.done}
                        />
                      </i>
                      <span className={classes.colorBlue}>All</span> features included
                    </li>
                  </ul>
                </div>
              </div>

              <div className={classNames({
                  [classes.pricingTableFooter]: true,
                  [classes.pricingTableFooterMobile]: IS_MOBILE,
                  [classes.activePricingTableFooter]: cardHover === 0 && !IS_MOBILE,
                })}
              >
                <div className={classNames({
                  [classes.pricingTableFooterRadius]: true,
                  [classes.activePricingTableFooterRadius]: cardHover === 0 && !IS_MOBILE,
                })}
                >
                  <div className={classNames({
                      [classes.pricingTableFooterRadiusEdge]: true,
                      [classes.pricingTableFooterRadiusEdgeMobile]: IS_MOBILE,
                      [classes.activePricingTableFooterRadiusEdge]: cardHover === 0 && !IS_MOBILE,
                    })}
                  />
                  <div className={classNames({
                      [`${classes.actionPricingRaisedButton}`]: IS_MOBILE || cardHover === 0,
                    })}
                  />
                  <RaisedButton
                    primary
                    style={pricingStyle.raisedButton.styleButton}
                    overlayStyle={
                      IS_MOBILE || cardHover === 0 ? pricingStyle.activeRaisedButton.overlayStyle : pricingStyle.raisedButton.overlayStyle
                    }
                    buttonStyle={
                      IS_MOBILE || cardHover === 0 ? pricingStyle.activeRaisedButton.buttonStyle : pricingStyle.raisedButton.buttonStyle
                    }
                    containerElement={<Link to={HOME_FORM_REGISTER} />}
                    onClick={toRegistration}
                    icon={
                      <ActionDone
                        viewBox="0 0 26 18"
                        fill="none"
                        style={
                          IS_MOBILE || cardHover === 0 ? pricingStyle.actionDoneMobile : pricingStyle.actionDone
                        }
                      />
                    }
                  >
                    {IS_MOBILE || cardHover === 0 ? 'Try free' : ''}
                  </RaisedButton>
                  <p
                    onMouseOver={e => e.stopPropagation()}
                    onFocus={e => e.stopPropagation()}
                    className={classNames({
                      [classes.activePricingTableFooterText]: true,
                      [classes.textMobile]: IS_MOBILE,
                      [classes.pricingTableFooterTextMobile]: IS_MOBILE && cardHover !== 0,
                      [classes.hidden]: !IS_MOBILE && cardHover !== 0,
                    })}
                  >
                    for 7 days trial
                  </p>
                </div>
              </div>
            </div>

            {/* card active default */}
            <div
              className={classNames(
                classes.pricingTable,
                { [`${classes.pricingTableMobile}`]: IS_MOBILE },
                { [`${classes.activePricingTable}`]: cardHover === 1 && !IS_MOBILE },
                )}
            >
              <div
                className={classNames(
                  classes.pricingTableHeader,
                  { [`${classes.activePricingTableHeader}`]: cardHover === 1 && !IS_MOBILE },
                )}
              >
                <h3
                  className={classNames({
                    [classes.priceTitle]: true,
                    [classes.activePricingTextTitle]: cardHover === 1 && !IS_MOBILE,
                  })}
                >
                  {PREMIUM}
                </h3>
                <span
                  className={classNames(
                    classes.priceValueBg,
                    { [`${classes.priceValueBgMobile}`]: IS_MOBILE },
                    { [`${classes.activePriceValueBg}`]: cardHover === 1 && !IS_MOBILE },
                    )}
                >
                  {this.renderPrice(PREMIUM, false)}
                </span>
                <span
                  className={classNames(
                    classes.priceValue,
                    { [`${classes.activePriceValue}`]: cardHover === 1 && !IS_MOBILE },
                     )}
                >
                  {this.renderPrice(PREMIUM)}
                </span>
                <div>
                  <ul className={
                    classNames(
                      classes.priceListItem,
                      { [`${classes.activePriceListItem}`]: cardHover === 1 && !IS_MOBILE },
                    )
                    }
                  >
                    <li className={classes.priceListItemText}>
                      <span
                        className={
                        classNames(
                          classes.billed,
                          { [`${classes.activeBilled}`]: cardHover === 1 && !IS_MOBILE },
                        )}
                        style={
                          period === MONTHLY ? pricingStyle.billedMONTHLY : pricingStyle.billedANNUALLY
                        }
                      >
                        * billed annually
                      </span>
                    </li>
                    <li
                      className={classNames(
                        classes.priceListItemText,
                        { [`${classes.activePriceListItemTextPer}`]: cardHover === 1 && !IS_MOBILE },
                      )}
                    >
                        per agent/month
                    </li>
                  </ul>
                </div>
              </div>
              <div className={classes.pricingTableLiner} />
              <div className={
                classNames(
                  classes.pricingTableBody,
                  { [`${classes.pricingTableBodyMobile}`]: IS_MOBILE },
                  { [`${classes.activePricingTableBody}`]: cardHover === 1 && !IS_MOBILE },
                  )}
              >
                <div>
                  <ul className={classes.priceBodyListItem}>
                    <li className={classes.priceBodyListItemText}>
                      <i className={classes.priceBodyListItemTextIcon}>
                        <Done
                          viewBox="0 0 19 13"
                          style={pricingStyle.done}
                        />
                      </i>
                      Up to <span className={classes.colorBlue}> 10 sources </span> (eBay &amp; Gmail)
                    </li>
                    <li className={classes.priceBodyListItemText}>
                      <i className={classes.priceBodyListItemTextIcon}>
                        <Done
                          viewBox="0 0 19 13"
                          style={pricingStyle.done}
                        />
                      </i>
                      <span className={classes.colorBlue}>Unlimited</span> tickets/messages
                    </li>
                    <li className={classes.priceBodyListItemText}>
                      <i className={classes.priceBodyListItemTextIcon}>
                        <Done
                          viewBox="0 0 19 13"
                          style={pricingStyle.done}
                        />
                      </i>
                      <span className={classes.colorBlue}>All</span> features included
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={classNames(
                  classes.pricingTableFooter,
                  { [`${classes.pricingTableFooterMobile}`]: IS_MOBILE },
                  { [`${classes.activePricingTableFooter}`]: cardHover === 1 && !IS_MOBILE },
                )}
              >
                <div
                  className={classNames(
                    classes.pricingTableFooterRadius,
                    { [`${classes.activePricingTableFooterRadius}`]: cardHover === 1 && !IS_MOBILE },
                  )}
                >
                  <div
                    className={classNames(
                      classes.pricingTableFooterRadiusEdge,
                      { [`${classes.pricingTableFooterRadiusEdgeMobile}`]: IS_MOBILE },
                      { [`${classes.activePricingTableFooterRadiusEdge}`]: cardHover === 1 && !IS_MOBILE },
                    )}
                  />
                  <div className={classNames({
                    [`${classes.actionPricingRaisedButton}`]: IS_MOBILE || cardHover === 1,
                  })}
                  />
                  <RaisedButton
                    primary
                    style={pricingStyle.raisedButton.styleButton}
                    overlayStyle={
                      IS_MOBILE || cardHover === 1 ? pricingStyle.activeRaisedButton.overlayStyle : pricingStyle.raisedButton.overlayStyle
                    }
                    buttonStyle={
                      IS_MOBILE || cardHover === 1 ? pricingStyle.activeRaisedButton.buttonStyle : pricingStyle.raisedButton.buttonStyle
                    }
                    containerElement={<Link to={HOME_FORM_REGISTER} />}
                    onClick={toRegistration}
                    icon={
                      <ActionDone
                        viewBox="0 0 26 18"
                        fill="none"
                        style={
                          IS_MOBILE || cardHover === 1 ? pricingStyle.actionDoneMobile : pricingStyle.actionDone
                        }
                      />
                    }
                  >
                    {IS_MOBILE || cardHover === 1 ? 'Try free' : ''}
                  </RaisedButton>
                </div>
                <p className={classNames({
                    [classes.activePricingTableFooterText]: true,
                    [classes.pricingTableFooterTextMobile]: IS_MOBILE,
                    [classes.hidden]: !IS_MOBILE && cardHover !== 1,
                  })}
                >
                  for 7 days trial
                </p>
              </div>
            </div>

            {/* card right */}
            <div
              onMouseOver={() => this.hoverCard(2)}
              onFocus={() => this.hoverCard(2)}
              onMouseOut={this.removeHoverCard}
              onBlur={this.removeHoverCard}
              className={
                classNames({
                  [classes.pricingTable]: true,
                  [classes.activePricingTable]: cardHover === 2 && !IS_MOBILE,
                  [classes.pricingTableMobile]: IS_MOBILE,
                  [classes.pricingTableRight]: !IS_MOBILE,
                })
              }
            >
              <div className={
                classNames({
                  [classes.pricingTableHeader]: true,
                  [classes.activePricingTableHeader]: cardHover === 2 && !IS_MOBILE,
                })}
              >
                <h3 className={
                  classNames({
                    [classes.priceTitle]: true,
                    [classes.activePricingTextTitle]: cardHover === 2 && !IS_MOBILE,
                  })
                }
                >
                  {ENTERPRISE}
                </h3>
                <span className={
                  classNames({
                    [classes.priceValueBg]: true,
                    [classes.activePriceValueBg]: cardHover === 2 && !IS_MOBILE,
                    [classes.priceValueBgMobile]: IS_MOBILE,
                  })}
                >
                  {this.renderPrice(ENTERPRISE, false)}
                </span>
                <span className={
                  classNames({
                    [classes.priceValue]: true,
                    [classes.activePriceValue]: cardHover === 2 && !IS_MOBILE,
                  })}
                >
                  {this.renderPrice(ENTERPRISE)}
                </span>
                <div>
                  <ul className={
                    classNames({
                      [classes.priceListItem]: true,
                      [classes.activePriceListItem]: cardHover === 2 && !IS_MOBILE,
                    })}
                  >
                    <li className={classes.priceListItemText}>
                      <span
                        className={
                          classNames({
                            [classes.billed]: true,
                            [classes.activeBilled]: cardHover === 2 && !IS_MOBILE,
                          })}
                        style={
                          period === MONTHLY ? pricingStyle.billedMONTHLY : pricingStyle.billedANNUALLY
                        }
                      >
                        * billed annually
                      </span>
                    </li>
                    <li className={
                      classNames({
                        [classes.priceListItemText]: true,
                        [classes.activePriceListItemTextPer]: cardHover === 2 && !IS_MOBILE,
                      })}
                    >
                      per agent/month
                    </li>
                  </ul>
                </div>
              </div>
              <div className={classes.pricingTableLiner} />
              <div className={
                classNames({
                  [classes.pricingTableBody]: true,
                  [classes.activePricingTableBody]: cardHover === 2 && !IS_MOBILE,
                  [classes.pricingTableBodyMobile]: IS_MOBILE,
                })
              }
              >
                <div>
                  <ul className={classes.priceBodyListItem}>
                    <li className={classes.priceBodyListItemText}>
                      <i className={classes.priceBodyListItemTextIcon}>
                        <Done
                          viewBox="0 0 19 13"
                          style={pricingStyle.done}
                        />
                      </i>
                      Up to <span className={classes.colorBlue}> 25 sources </span> (eBay &amp; Gmail)
                    </li>
                    <li className={classes.priceBodyListItemText}>
                      <i className={classes.priceBodyListItemTextIcon}>
                        <Done
                          viewBox="0 0 19 13"
                          style={pricingStyle.done}
                        />
                      </i>
                      <span className={classes.colorBlue}>Unlimited</span> tickets/messages
                    </li>
                    <li className={classes.priceBodyListItemText}>
                      <i className={classes.priceBodyListItemTextIcon}>
                        <Done
                          viewBox="0 0 19 13"
                          style={pricingStyle.done}
                        />
                      </i>
                      <span className={classes.colorBlue}>All</span> features included
                    </li>
                  </ul>
                </div>
              </div>

              <div className={classNames({
                [classes.pricingTableFooter]: true,
                [classes.pricingTableFooterMobile]: IS_MOBILE,
                [classes.activePricingTableFooter]: cardHover === 2 && !IS_MOBILE,
              })}
              >
                <div className={classNames({
                  [classes.pricingTableFooterRadius]: true,
                  [classes.activePricingTableFooterRadius]: cardHover === 2 && !IS_MOBILE,
                })}
                >
                  <div className={classNames({
                    [classes.pricingTableFooterRadiusEdge]: true,
                    [classes.pricingTableFooterRadiusEdgeMobile]: IS_MOBILE,
                    [classes.activePricingTableFooterRadiusEdge]: cardHover === 2 && !IS_MOBILE,
                  })}
                  />
                  <div className={classNames({
                    [`${classes.actionPricingRaisedButton}`]: IS_MOBILE || cardHover === 2,
                  })}
                  />
                  <RaisedButton
                    primary
                    style={pricingStyle.raisedButton.styleButton}
                    overlayStyle={
                      IS_MOBILE || cardHover === 2 ? pricingStyle.activeRaisedButton.overlayStyle : pricingStyle.raisedButton.overlayStyle
                    }
                    buttonStyle={
                      IS_MOBILE || cardHover === 2 ? pricingStyle.activeRaisedButton.buttonStyle : pricingStyle.raisedButton.buttonStyle
                    }
                    containerElement={<Link to={HOME_FORM_REGISTER} />}
                    onClick={toRegistration}
                    icon={
                      <ActionDone
                        viewBox="0 0 26 18"
                        fill="none"
                        style={
                          IS_MOBILE || cardHover === 2 ? pricingStyle.actionDoneMobile : pricingStyle.actionDone
                        }
                      />
                    }
                  >
                    {IS_MOBILE || cardHover === 2 ? 'Try free' : ''}
                  </RaisedButton>
                  <p
                    onMouseOver={e => e.stopPropagation()}
                    onFocus={e => e.stopPropagation()}
                    className={classNames({
                    [classes.activePricingTableFooterText]: true,
                    [classes.textMobile]: IS_MOBILE,
                    [classes.pricingTableFooterTextMobile]: IS_MOBILE && cardHover !== 2,
                    [classes.hidden]: !IS_MOBILE && cardHover !== 2,
                  })}
                  >
                    for 7 days trial
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
