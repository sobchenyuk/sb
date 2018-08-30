import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

// components
import {
  List,
  ListItem,
} from 'material-ui/List';
import QueueAnim from 'rc-queue-anim';
import Avatar from 'material-ui/Avatar';
import FeaturesComponent from '../../components/FeaturesComponent';
import classNames from 'classnames';
import { IS_MOBILE } from 'consts/browser';

// images
import automaticMessages from './images/automaticMessages.jpg';

// svg
import Subivi from './svg-icons/Subivi';
import Robot from './svg-icons/Robot';
import Alert from './svg-icons/Alert';

// styles
import { styles, stylesComponent } from './styles';

@injectSheet(styles)
export default class AutomaticMessages extends PureComponent {
  static propTypes = {
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.parent}>
        <div className={classNames(classes.row, { [`${classes.rowMobile}`]: IS_MOBILE })}>
          <div className={classes.column}>
            <h3 className={classNames(classes.title, { [`${classes.titleMobile}`]: IS_MOBILE })}>
              It’s the 21st century -
              <span className={classes.titleBold}>
                    About time to automate your business
              </span>
            </h3>

            <div>
              <p className={classNames(
                classes.content,
                { [`${classes.contentMobile}`]: IS_MOBILE },
                )}
              >
                <span>
                  As business owners, we are often required to perform tedious, repetitive tasks, whether it’s constantly
                  opening and closing an excel sheet with your template message, copy-pasting the customer’s information
                  or sending a ‘thank-you’ message after each new order.
                </span>
              </p>
              <p className={classNames(classes.content, { [`${classes.contentMobile}`]: IS_MOBILE })}>
                <span>
                  In Subivi our mission is to identify the most time consuming (and let’s be honest - boring) parts of
                  your customer support operation and making you forget them by giving you the tools fully automate them
                  and save your time and effort.
                </span>
              </p>
            </div>
          </div>
          <div className={classes.column}>
            <FeaturesComponent>
              <div
                className={classNames(
                classes.componentBody,
                { [`${classes.componentBodyMobile}`]: IS_MOBILE },
                )}
              >
                <List style={{ padding: '0px 0px 0px 0' }}>
                  <QueueAnim
                    interval={200}
                    delay={500}
                    duration={1000}
                  >
                    <ListItem
                      key="1"
                      disabled
                      hoverColor="transparent"
                      innerDivStyle={stylesComponent.innerDivStyle}
                    >
                      <div className={classes.columnItem}>
                        <div className={classes.avatarItem}>
                          <Avatar
                            size={39}
                            src={automaticMessages}
                          />
                        </div>
                        <div className={classNames(
                              classes.listItem,
                              { [`${classes.listItemMobile}`]: IS_MOBILE },
                               )}
                        >
                          “Hi, how cool are those jeans?”
                        </div>
                      </div>
                    </ListItem>

                    <ListItem
                      key="2"
                      disabled
                    >
                      <List style={
                        IS_MOBILE ? stylesComponent.listMobile : stylesComponent.list}
                      >
                        <ListItem
                          disabled
                          hoverColor="transparent"
                          innerDivStyle={stylesComponent.innerDivStyle}
                        >
                          <div className={classes.columnItem}>
                            <div className={classes.avatarItem}>
                              <Avatar
                                size={39}
                                style={stylesComponent.avatarStyle}
                                icon={<Subivi viewBox="0 0 16 22" style={stylesComponent.avatarIconStyle} />}
                              />
                            </div>
                            <div className={classNames(
                              classes.listItem,
                              classes.listItemBlue,
                              { [`${classes.listItemMobile}`]: IS_MOBILE },
                               )}
                            >
                              “Hello, thank you for writing us. <br />
                              We are currently out of office. Our office hours <br />
                              are Monday-Friday 9am-5pm. <br />
                              One of representatives would contact you once we’re back. <br />
                              <br />
                              Best wishes, <br />
                              <div className={classes.listItemEnd}>
                                Cloth&hip team.” <Robot viewBox="0 0 22 17" style={stylesComponent.robotIcon} />
                              </div>
                            </div>
                          </div>
                        </ListItem>
                      </List>
                    </ListItem>

                    <ListItem
                      key="3"
                      disabled
                      hoverColor="transparent"
                      innerDivStyle={stylesComponent.innerDivStyle}
                    >
                      <div className={classes.columnItem}>
                        <div className={classes.avatarItem}>
                          <Avatar
                            size={39}
                            src={automaticMessages}
                          />
                        </div>
                        <div className={classNames(
                              classes.listItem,
                              classes.listItemBlue,
                              { [`${classes.listItemMobile}`]: IS_MOBILE },
                               )}
                        >
                          <div className={classes.listItemEnd}>
                            Kyle has ordered the item –&nbsp; <a href="#/" className={classes.listItemLink}>Cool Tight Jeans</a>
                            &nbsp;&nbsp;
                            <Robot viewBox="0 0 22 17" style={stylesComponent.robotIcon} />
                            &nbsp;
                            <Alert viewBox="0 0 18 18" style={stylesComponent.alertIcon} />
                          </div>
                        </div>
                      </div>
                    </ListItem>

                    <ListItem
                      key="4"
                      disabled
                      style={{ padding: '16px 0px 3px 16px' }}
                    >
                      <List style={
                        IS_MOBILE ? stylesComponent.listMobile : stylesComponent.list}
                      >
                        <ListItem
                          disabled
                          hoverColor="transparent"
                          innerDivStyle={stylesComponent.innerDivStyle}
                        >
                          <div className={classes.columnItem}>
                            <div className={classes.avatarItem}>
                              <Avatar
                                size={39}
                                style={stylesComponent.avatarStyle}
                                icon={<Subivi viewBox="0 0 16 22" style={stylesComponent.avatarIconStyle} />}
                              />
                            </div>
                            <div className={classNames(
                              classes.listItem,
                              classes.listItemBlue,
                              { [`${classes.listItemMobile}`]: IS_MOBILE },
                               )}
                            >
                              “Hello Kyle,<br />
                              We’ve received your order and it’ll be shipped shortly,<br />
                              you will receive an update once it does.<br />
                              <br />
                              Please feel free to contact us on any matter,<br />
                              <div className={classes.listItemEnd}>
                                Cloth&hip team.” <Robot viewBox="0 0 22 17" style={stylesComponent.robotIcon} />
                              </div>
                            </div>
                          </div>
                        </ListItem>
                      </List>
                    </ListItem>

                  </QueueAnim>
                </List>
              </div>
            </FeaturesComponent>
          </div>
        </div>
      </div>
    );
  }
};