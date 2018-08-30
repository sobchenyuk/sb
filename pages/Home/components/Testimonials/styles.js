// images
import tastimonialsImg from './images/tastimonials.png';
import oval from './images/oval.png';
import rightQuoteSign from './images/rightQuoteSign.png';

const styles = {
  testimonials: {
    backgroundImage: `url(${tastimonialsImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top',
    paddingTop: 159,
    marginTop: '-11em',
    position: 'relative',
    zIndex: 1,
  },
  testimonialsContainer: {
    maxWidth: '1110px',
    margin: '0 auto',
    width: '100%',
    position: 'relative',
  },
  testimonialsText: {
    textAlign: 'center',
    margin: {
      top: '0',
      bottom: '13px',
    },
  },
  testimonialsTextTitle: {
    fontSize: '24px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '0.79',
    letterSpacing: 'normal',
    color: '#979797',
    margin: {
      top: 0,
      left: 0,
      right: 0,
      bottom: '20px',
    },
  },
  testimonialsTextSubscribe: {
    fontSize: 48,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.4,
    color: '#027cef',
    margin: 0,
  },
  owlCarouselItem: {
    backgroundImage: `url(${rightQuoteSign})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 6,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    boxShadow: '0 0 13px 4px rgba(0, 0, 0, 0.09)',
    padding: '24px 50px',
    margin: '10px 20px',
    marginBottom: 45,
  },
  dotClass: {
    position: 'relative',
    top: '-2px',
    display: 'inline-block',
    zoom: 1,
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundImage: `url(${oval})`,
    margin: '0 8px',
    cursor: 'pointer',
    '&.active': {
      width: 14,
      height: 14,
      backgroundImage: `url(${oval})`,
      backgroundSize: 'cover',
      top: 0,
      position: 'relative',
    },
  },
  owlCarouselItemText: {
    fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#979797',
    marginBottom: '2em',
    marginTop: 0,
  },
  owlCarouselItemAvatar: {
    display: 'flex',
    alignItems: 'center',
  },
  owlCarouselItemAvatarText: {
    fontSize: '14px',
    fontWeight: '400',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.1px',
    color: '#979797',
    marginLeft: '30px',
  },
  owlCarouselItemAvatarBold: {
    fontWeight: '500',
    fontSize: '16px',
    letterSpacing: '0.5px',
    color: '#878787',
    marginBottom: '8px',
    display: 'block',
  },
  btn: {
    textAlign: 'center',
    marginTop: '65px',
  },
  testimonialsTextTitleMobile: {
    // mobile
    fontSize: 16,
  },
  testimonialsTextSubscribeMobile: {
    fontSize: 20,
  },
  testimonialsMobile: {
    background: 'none',
    marginTop: '-18em',
    paddingTop: 129,
  },
  btnMobile: {
    marginTop: 16,
  },
  owlCarouselItemMobile: {
    padding: 16,
    marginBottom: 16,
  },
};

const btnStyle = {
  link: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.8,
    textAlign: 'center',
    color: '#ffffff',
    padding: '20px 42px',
    textTransform: 'uppercase',
  },
  buttonStyle: {
    height: '56px',
    boxShadow: 'rgba(3, 110, 237, 0.09) 0px 15px 11px 0px',
  },
  overlayStyle: {
    height: '56px',
    alignItems: 'center',
    display: 'flex',
  },
};

export { styles, btnStyle };
