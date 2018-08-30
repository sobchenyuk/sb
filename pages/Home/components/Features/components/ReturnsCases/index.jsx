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
import oneImg from './images/1.jpg';
import twoImg from './images/2.jpg';
import threeImg from './images/3.jpg';
import fourImg from './images/4.png';

// styles
import { styles, stylesComponent } from './styles';

@injectSheet(styles)
export default class ReturnsCases extends PureComponent {
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
              Starting today -
              <span className={classes.titleBold}>
                    Close all of your tickets without opening eBay
              </span>
            </h3>

            <div>
              <p className={classNames(classes.content, { [`${classes.contentMobile}`]: IS_MOBILE })}>
                <span>
                We know how frustrating eBay’s messaging, and ticketing system can be, this is precisely why in Subivi
                you could handle all of your tickets without opening eBay at all.
                </span>
              </p>
              <p className={classNames(classes.content, { [`${classes.contentMobile}`]: IS_MOBILE })}>
                <span>
                Upload labels, issue refunds (full or partial) and update tracking numbers. Subivi is built to support
                all of eBay’s ticket types including returns, cases, INS cases, cancellations, and messages.
                </span>
              </p>
            </div>
          </div>
          <div className={classes.column}>
            <FeaturesComponent>
              <div className={classes.componentBody}>
                <List>
                  <QueueAnim
                    interval={200}
                    delay={500}
                    duration={1000}
                  >
                    <ListItem
                      key="1"
                      disabled
                      style={stylesComponent.listItem}
                      hoverColor="transparent"
                      innerDivStyle={stylesComponent.innerDivStyle}
                    >
                      <div className={classes.columnItem}>
                        <div className={classes.avatarItem}>
                          <Avatar
                            size={50}
                            src={oneImg}
                          />
                        </div>
                        <div className={classes.listItem}>
                          “I wish to involve eBay resolution center”
                        </div>
                      </div>
                    </ListItem>
                    <ListItem
                      key="2"
                      disabled
                      style={stylesComponent.listItem}
                      hoverColor="transparent"
                      innerDivStyle={stylesComponent.innerDivStyle}
                    >
                      <div className={classes.columnItem}>
                        <div className={classes.avatarItem}>
                          <Avatar
                            size={50}
                            src={twoImg}
                          />
                        </div>
                        <div className={classes.listItem}>
                          “Please cancel this order”
                        </div>
                      </div>
                    </ListItem>
                    <ListItem
                      key="3"
                      disabled
                      style={stylesComponent.listItem}
                      innerDivStyle={stylesComponent.innerDivStyle}
                    >
                      <div className={classes.columnItem}>
                        <div className={classes.avatarItem}>
                          <Avatar
                            size={50}
                            src={threeImg}
                          />
                        </div>
                        <div className={classes.listItem}>
                          “Send me a replacement, please”
                        </div>
                      </div>
                    </ListItem>
                    <ListItem
                      key="4"
                      disabled
                      style={stylesComponent.listItemLast}
                      innerDivStyle={stylesComponent.innerDivStyle}
                    >
                      <div className={classes.columnItem}>
                        <div className={classes.avatarItem}>
                          <Avatar
                            size={50}
                            src={fourImg}
                          />
                        </div>
                        <div className={classes.listItem}>
                          “Where is my package? I didn’t receive it”
                        </div>
                      </div>
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
}
