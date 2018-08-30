import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

// components
import classNames from 'classnames';
import QueueAnim from 'rc-queue-anim';
import Avatar from 'material-ui/Avatar';
import RaisedButton from "components/RaisedButton";
import FeaturesComponent from '../../components/FeaturesComponent';
import { IS_MOBILE } from 'consts/browser';

// images
import oval from './images/oval.png';
import duck from './images/duck.png';

// svg
import Phone from './svg-icons/Phone';
import Mail from './svg-icons/Mail';

// styles
import { styles, stylesComponent } from './styles';

@injectSheet(styles)
export default class ThreeHundredSixty extends PureComponent {
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
              Stop looking for bits and pieces of information -
              <span className={classes.titleBold}>
                    All of it could be in 1 screen right in front of you.
              </span>
            </h3>

            <div>
              <p className={classNames(classes.content, { [`${classes.contentMobile}`]: IS_MOBILE })}>
                <span>
                You’ve just received a message, and you want to close it as fast as possible, now you only need to - open the document with your ready templates, find the necessary order information, check the tracking status of it and then replace all of the placeholders in the template, piece of cake.
                </span>
              </p>
              <p className={classNames(classes.content, { [`${classes.contentMobile}`]: IS_MOBILE })}>
                <span>
                In Subivi all of this would’ve been done in 2 clicks. Just beside the ticket, you’ll see the entire customer and order information, his order history and all of his past tickets. Also, you can implement pre-made quick replies with smart tags which will pull and implement the required information in the reply instantly.
                </span>
              </p>
            </div>
          </div>
          <div className={classes.column}>
            <FeaturesComponent>
              <div className={classes.componentBody}>
                <QueueAnim
                  interval={200}
                  delay={500}
                  duration={1000}
                  className={classNames(
                  classes.columns,
                  { [`${classes.columnsMobile}`]: IS_MOBILE },
                )}
                >
                  <div className={classNames(classes.columnItem, classes.columnFirst)} key="1">
                    <div className={classes.duck}>
                      <img
                        src={duck}
                        alt=""
                      />
                    </div>

                    <h3 className={classes.tileItem}>
                      Order #159
                    </h3>
                    <ul className={classes.item}>
                      <li className={classes.textItem}>
                        Order ID:&nbsp;
                        <span className={classes.textItemBlue}>
                          122756791709-1920821111002
                        </span>
                      </li>
                      <li className={classes.textItem}>
                        Status:&nbsp;
                        <span className={classes.textItemBlue}>
                          completed
                        </span>
                      </li>
                      <li className={classes.textItem}>
                        Customer name:&nbsp;
                        <span className={classes.textItemBlue}>
                          Leila Moran
                        </span>
                      </li>
                      <li className={classes.textItem}>
                        Ordered at:&nbsp;
                        <span className={classes.textItemBlue}>
                          March 5th 2018 15:03
                        </span>
                      </li>
                      <li className={classes.textItem}>
                        Updated at:&nbsp;
                        <span className={classes.textItemBlue}>
                          May 9th 2018 14:05
                        </span>
                      </li>
                      <li className={classes.textItem}>
                        Product name:
                        <br />
                        <span className={classes.textItemBlue}>
                          The Best Rubber Shower Duck
                        </span>
                      </li>
                      <li className={classes.textItem}>
                        SKU:&nbsp;
                        <span className={classes.textItemBlue}>
                          window_088_small
                        </span>
                      </li>
                      <li className={classes.textItem}>
                        Tracking number:
                        <br />
                        <span className={classes.textItemBlue}>
                          1Z 987 AA1 01 2441 1224
                        </span>
                      </li>
                      <li className={classes.textItem}>
                        Price:&nbsp;
                        <span className={classes.textItemBlue}>
                          $12.00
                        </span>
                      </li>
                      <li className={classes.textItem}>
                        Quantity:&nbsp;
                        <span className={classes.textItemBlue}>
                          1
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={classNames(classes.columnItem, classes.columnLast)} key="2">
                    <div className={classes.columnLastAvatar}>
                      <Avatar
                        size={65}
                        src={oval}
                      />
                      <div className={classNames(
                        classes.columnLastAvatarBadge,
                        { [`${classes.columnLastAvatarBadgeMobile}`]: IS_MOBILE },
                        )}
                      />
                    </div>
                    <h3>
                      Leila Moran
                      <span className={classes.subscribe}>
                        buyer_768
                      </span>
                    </h3>
                    <p>
                      mail@gmail.com
                    </p>
                    <p>
                      +3 321 123 321
                    </p>
                    <p>
                      Primary Address:
                    </p>
                    <p>
                      Jack Johnson <br />
                      2516 Mission St, <br />
                      San Francisco, CA, 94110-2512 <br />
                      United States <br />
                    </p>
                    <div className={classes.button}>
                      <RaisedButton
                        className={classes.raisedButton}
                        style={stylesComponent.raisedButton}
                        icon={<Phone viewBox="0 0 20 20" style={{ width: 20, height: 20 }} />}
                        buttonStyle={stylesComponent.raisedButton}
                        overlayStyle={stylesComponent.raisedButton}
                      />

                      <RaisedButton
                        className={classes.raisedButton}
                        style={stylesComponent.raisedButton}
                        icon={<Mail viewBox="0 0 21 17" style={{ width: 21, height: 17 }} />}
                        buttonStyle={stylesComponent.raisedButton}
                        overlayStyle={stylesComponent.raisedButton}
                      />
                    </div>
                  </div>
                </QueueAnim>
              </div>
            </FeaturesComponent>
          </div>
        </div>
      </div>
    );
  }
}
