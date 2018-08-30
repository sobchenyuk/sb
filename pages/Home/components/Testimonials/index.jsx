import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

// components
import { HOME_FORM_REGISTER } from 'consts/routes';
import { Link } from 'react-router';
import { IS_MOBILE } from 'consts/browser';
import Avatar from 'material-ui/Avatar';
import RaisedButton from "components/RaisedButton";
import OwlCarousel from 'react-owl-carousel3';
import classNames from 'classnames';

// styles
import {
  styles,
  btnStyle,
} from './styles';

const options = {
  className: 'owl-theme',
  loop: true,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
  },
};

@injectSheet(styles)
export default class Testimonials extends PureComponent {
  static propTypes = {
    toRegistration: PropTypes.func,
    classes: PropTypes.shape(), // eslint-disable-line react/require-default-props
  };

  static defaultProps = {
    toRegistration: () => {},
  };

  render() {
    const { classes } = this.props;
    return (
      <section
        className={classNames(
          classes.testimonials,
          { [`${classes.testimonialsMobile}`]: IS_MOBILE },
        )}
      >

        <div
          className={classes.testimonialsText}
        >
          <h2
            className={classNames(
              classes.testimonialsTextTitle,
              { [`${classes.testimonialsTextTitleMobile}`]: IS_MOBILE },
              )}
          >
              Testimonials
          </h2>
          <p
            className={classNames(
              classes.testimonialsTextSubscribe,
              { [`${classes.testimonialsTextSubscribeMobile}`]: IS_MOBILE },
              )}
          >
            Why Our Customers Love Us
          </p>
        </div>
        <div className={classes.testimonialsContainer}>
          <OwlCarousel
            {...options}
            dotClass={classes.dotClass}
          >
            <div className={classNames(classes.owlCarouselItem, { [`${classes.owlCarouselItemMobile}`]: IS_MOBILE })}>
              <p className={classes.owlCarouselItemText}>
                "Very easy and affordable to use, especially compared to other services...What REALLY impressed us was
                the phone call we received from your tech trainer in Austin, TX who was not just super-intelligent, but
                friendly and supportive."
              </p>
              <div className={classes.owlCarouselItemAvatar}>
                <Avatar
                  src="//v0.material-ui.com/images/uxceo-128.jpg"
                  size={56}
                />
                <div className={classes.owlCarouselItemAvatarText}>
                  <b className={classes.owlCarouselItemAvatarBold}>Caroline Andrews</b>
                  <span>
                    eBay Seller
                  </span>
                </div>
              </div>
            </div>
            <div className={classNames(classes.owlCarouselItem, { [`${classes.owlCarouselItemMobile}`]: IS_MOBILE })}>
              <p className={classes.owlCarouselItemText}>
                "I am extremely pleased with the outcome of this campaign; I would have never predicted such a high
                redemption rate. My weekly takings are up and I am now looking for more delivery drivers and this can
                only be down to the text marketing.
              </p>
              <p className={classes.owlCarouselItemText}>
                Low priced and incredibly efficient."
              </p >
              <div className={classes.owlCarouselItemAvatar}>
                <Avatar
                  src="//v0.material-ui.com/images/uxceo-128.jpg"
                  size={56}
                />
                <div className={classes.owlCarouselItemAvatarText}>
                  <b className={classes.owlCarouselItemAvatarBold}>Effie Brooks</b>
                  <span>
                    eBay Seller
                  </span>
                </div>
              </div>
            </div>
            <div className={classNames(classes.owlCarouselItem, { [`${classes.owlCarouselItemMobile}`]: IS_MOBILE })}>
              <p className={classes.owlCarouselItemText}>
                "We’ve had a huge success with our first campaign - thanks for help getting it set up."
              </p>
              <div className={classes.owlCarouselItemAvatar}>
                <Avatar
                  src="//v0.material-ui.com/images/uxceo-128.jpg"
                  size={56}
                />
                <div className={classes.owlCarouselItemAvatarText}>
                  <b className={classes.owlCarouselItemAvatarBold}>Brent Chambers</b>
                  <span>
                    eBay Seller
                  </span>
                </div>
              </div>
            </div>
            <div className={classNames(classes.owlCarouselItem, { [`${classes.owlCarouselItemMobile}`]: IS_MOBILE })}>
              <h4>4</h4>
            </div>
            <div className={classNames(classes.owlCarouselItem, { [`${classes.owlCarouselItemMobile}`]: IS_MOBILE })}>
              <h4>4</h4>
            </div>
            <div className={classNames(classes.owlCarouselItem, { [`${classes.owlCarouselItemMobile}`]: IS_MOBILE })}>
              <h4>4</h4>
            </div>
            <div className={classNames(classes.owlCarouselItem, { [`${classes.owlCarouselItemMobile}`]: IS_MOBILE })}>
              <h4>4</h4>
            </div>
          </OwlCarousel>
          <div
            className={classNames(
              classes.btn,
              { [`${classes.btnMobile}`]: IS_MOBILE },
            )}
          >
            <RaisedButton
              primary
              buttonStyle={btnStyle.buttonStyle}
              overlayStyle={btnStyle.overlayStyle}
            >
              <Link
                to={HOME_FORM_REGISTER}
                style={btnStyle.link}
                onClick={this.props.toRegistration}
              >
                Get Started Free
              </Link>
            </RaisedButton>
          </div>
        </div>
      </section>
    );
  }
}
