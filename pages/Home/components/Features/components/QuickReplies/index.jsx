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
import one from './images/one.jpg';
import two from './images/two.jpg';

// styles
import { styles, stylesComponent } from './styles';

@injectSheet(styles)
export default class QuickReplies extends PureComponent {
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
              Stop wasting time on typing -
              <span className={classes.titleBold}>
                    Answer tickets instantly
              </span>
            </h3>
            <div>
              <p className={classNames(
                classes.content,
                { [`${classes.contentMobile}`]: IS_MOBILE },
                )}
              >
                <span>
                Whether you’re typing, you’re messages manually or each time you want to provide a customer with an answer you need to search some document for the correct template - there’s no doubt this process is time-consuming.
                </span>
              </p>
              <p className={classNames(classes.content, { [`${classes.contentMobile}`]: IS_MOBILE })}>
                <span>
                Join Subivi today, and you won’t need to waste that time ever again. With pre-made templates, you can implement with just a few quick clicks and smart tags which are replaced with the customer’s/order details instantly you could shorten your response time to a few seconds.
                </span>
              </p>
            </div>
          </div>
          <div className={classes.column}>
            <FeaturesComponent>
              <div className={classes.componentBody}>
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
                            size={60}
                            src={one}
                          />
                        </div>
                        <div className={classNames(
                              classes.listItem,
                              { [`${classes.listItemMobile}`]: IS_MOBILE },
                              )}
                        >
                          “When will I receive this order?”
                        </div>
                      </div>
                    </ListItem>
                    <ListItem
                      key="2"
                      disabled>
                      <List
                        style={
                          IS_MOBILE ? stylesComponent.listMobile : stylesComponent.list
                        }
                      >
                        <ListItem
                          key="3"
                          disabled
                          hoverColor="transparent"
                          innerDivStyle={stylesComponent.innerDivStyle}
                        >
                          <div className={classes.columnItem}>
                            <div className={classes.avatarItem}>
                              <Avatar
                                size={60}
                                src={two}
                              />
                            </div>
                            <div className={classNames(
                              classes.listItem,
                              { [`${classes.listItemMobile}`]: IS_MOBILE },
                              classes.listItemBlue,
                              )}
                            >
                              “Hello <span className={classes.inverText}>Miley,</span>
                              <br />
                              Your order was sent on <span className={classes.inverText}>23/08/18,</span>&nbsp;
                              and it’s expected delivery is <span className={classes.inverText}>01/09/18.</span>
                              <br />
                              <br />
                              Your tracking number is <span className={classes.inverText}>#US73999831IE.</span>
                              <br />
                              <br />
                              Please feel free to contact us with any question,
                              <br />
                              Cloth&amp;hip team.”
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
}
