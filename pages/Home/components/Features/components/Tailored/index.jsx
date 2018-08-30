import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

// components
import {
  List,
  ListItem,
} from 'material-ui/List';
import QueueAnim from 'rc-queue-anim';
import FeaturesComponent from '../../components/FeaturesComponent';
import classNames from 'classnames';
import { IS_MOBILE } from 'consts/browser';

// styles
import { styles, stylesComponent } from './styles';

// svg
import Done from './svg-icons/Done';

@injectSheet(styles)
export default class Tailored extends PureComponent {
  static propTypes = {
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
    showAnimation: PropTypes.bool,
  };
  render() {
    const { classes, showAnimation } = this.props;
    return (
      <div className={classes.parent}>
        <div className={classNames(classes.row, { [`${classes.rowMobile}`]: IS_MOBILE })}>
          <div className={classes.column}>
            <h3 className={classNames(classes.title, { [`${classes.titleMobile}`]: IS_MOBILE })}>
              Built for eBay sellers -
              <span className={classes.titleBold}>
                By eBay sellers
              </span>
            </h3>

            <div>
              <p className={classNames(classes.content, { [`${classes.contentMobile}`]: IS_MOBILE })}>
                <span>
                As former eBay sellers ourselves we are aware of the small things that matter to you, familiar with the
                different workflows and know what exactly you need to manage your customer support seamlessly.
                </span>
              </p>
              <p className={classNames(classes.content, { [`${classes.contentMobile}`]: IS_MOBILE })}>
                <span>
                We’ve built Subivi so that you could manage your entire customer support cycle most easily and
                intuitively. Our platform is packed with features especially built so that you could close your tickets
                in the minimum time possible while keeping your customers satisfied and ready for future purchases.
                </span>
              </p>
            </div>
          </div>
          <div className={classes.column}>
            <FeaturesComponent>
              <div className={classes.componentBody}>
                <List>
                  {showAnimation ?
                    <QueueAnim
                      interval={200}
                      delay={500}
                      duration={1000}
                    >
                      <ListItem
                        key="1"
                        primaryText="No reason to login to your account to provide customer service"
                        leftIcon={
                          <Done
                            viewBox="0 0 21 14"
                            style={stylesComponent.IconStyle}
                          />
                        }
                        style={stylesComponent.listItem}
                        innerDivStyle={stylesComponent.innerDivStyle}
                      />
                      <ListItem
                        key="2"
                        primaryText="Mark conversation as read on eBay"
                        leftIcon={
                          <Done
                            viewBox="0 0 21 14"
                            style={stylesComponent.IconStyle}
                          />
                        }
                        style={stylesComponent.listItem}
                        innerDivStyle={stylesComponent.innerDivStyle}
                      />
                      <ListItem
                        key="3"
                        primaryText="Get valuable data points & analytics on your store"
                        leftIcon={
                          <Done
                            viewBox="0 0 21 14"
                            style={stylesComponent.IconStyle}
                          />
                        }
                        style={stylesComponent.listItem}
                        innerDivStyle={stylesComponent.innerDivStyle}
                      />
                      <ListItem
                        key="4"
                        primaryText="Shortcuts to eBay order pages & tracking information"
                        leftIcon={
                          <Done
                            viewBox="0 0 21 14"
                            style={stylesComponent.IconStyle}
                          />
                        }
                        style={stylesComponent.listItemLast}
                        innerDivStyle={stylesComponent.innerDivStyle}
                      />
                    </QueueAnim>
                    : ''
                  }
                </List>
              </div>
            </FeaturesComponent>
          </div>
        </div>
      </div>
    );
  }
}