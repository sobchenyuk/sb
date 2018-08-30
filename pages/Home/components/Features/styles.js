// images
import featuresImg from './images/features.png';
import featuresImgMobile from './images/features1.png';

const styles = {
  features: {
    zIndex: 2,
    position: 'relative',
    // backgroundImage: `url(${featuresImg})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundPositionY: '14em',
    paddingBottom: '96px',
  },
  featuresContainer: {
    width: '1110px',
    margin: '0 auto',
    position: 'relative',
    minHeight: '820px',
  },
  featuresText: {
    textAlign: 'center',
    margin: {
      bottom: '33px',
    },
  },
  featuresTextTitle: {
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
      bottom: '5px',
    },
  },
  featuresTextSubscribe: {
    fontSize: '48px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.4px',
    color: '#027cef',
    margin: 0,
  },
  animated: {},
  featuresMobile: {
    // mobile
    backgroundImage: `url(${featuresImgMobile})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundPositionY: '12em',
    backgroundSize: 'contain',
    zIndex: 11,
    paddingBottom: 150,
  },
  featuresTextMobile: {
    marginTop: 76,
    marginBottom: 16,
  },
  featuresTextTitleMobile: {
    fontSize: 20,
  },
  featuresTextSubscribeMobile: {
    fontSize: 20,
  },
  featuresContainerMobile: {
    width: '100%',
    overflow: 'hidden',
  },
};

const stylesTabs = {
  iconStyleActive: {},
  iconStyle: {
    fontWeight: 'normal',
    color: '#979797',
  },
  tabItemContainerStyle: {
    background: 'none',
  },
  tabStyle: {
    fontSize: '14px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
    textAlign: 'center',
    color: '#027cef',
    marginBottom: '15px',
    marginTop: '10px',
    textTransform: 'capitalize',
  },
  inkBarContainerStyle: {
    backgroundColor: '#e9e9e9',
    borderRadius: '1.5px',
  },
  inkBarStyle: {
    height: '3px',
    borderRadius: '1.5px',
  },
  featuresImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translate(-11em,7em)',
  },
  tabItemContainerStyleMobile: {
    // mobile
    background: 'none',
    overflowX: 'scroll',
    maxWidth: '830px',
  },
  tabStyleMobile: {
    width: 138,
    padding: '0 30px',
    fontSize: '14px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
    textAlign: 'center',
    color: '#027cef',
    marginBottom: '15px',
    marginTop: '10px',
    textTransform: 'capitalize',
  },
};

export { styles, stylesTabs };
