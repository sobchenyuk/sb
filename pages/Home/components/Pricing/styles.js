// images
import pricingImg from './images/pricing.png';
import pricingImgMobile from './images/pricing1.png';

const styles = {
  pricing: {
    position: 'relative',
    zIndex: 10,
    backgroundImage: `url(${pricingImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 39,
    paddingBottom: '3em',
    height: 826,
  },
  pricingContainer: {
    maxWidth: '1110px',
    margin: '0 auto',
    width: '100%',
    position: 'relative',
  },
  pricingText: {
    textAlign: 'center',
    margin: {
      top: '188px',
      bottom: '35px',
    },
  },
  pricingTextTitle: {
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
  pricingTextSubscribe: {
    fontSize: '48px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.4px',
    color: '#027cef',
    margin: 0,
  },
  pricingColumns: {
    display: 'flex',
    marginLeft: '-.75rem',
    marginRight: '-.75rem',
    marginTop: '-.75rem',
  },
  pricingTable: {
    padding: 33,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
    borderRadius: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '5px -2px 14px 1px rgba(0, 0, 0, 0.04)',
    marginTop: '32px',
    marginBottom: '30px',
    position: 'relative',
    transition: '0.5s',
  },
  pricingTableLeft: {
    left: 32,
  },
  pricingTableRight: {
    right: 32,
  },
  pricingTableHeader: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.3,
    position: 'relative',
    marginBottom: 16,
    transition: '0.5s',
  },
  priceTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#027cef',
    marginTop: 0,
    marginBottom: 20,
    transition: '0.5s',
  },
  priceValue: {
    fontSize: 48,
    color: '#979797',
    fontWeight: 'bold',
    fontFamily: "'Roboto Slab' , serif",
    letterSpacing: 0.4,
    transition: '0.5s',
  },
  priceValueBg: {
    position: 'absolute',
    right: -50,
    opacity: '0.6',
    fontSize: 85,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: -1,
    textAlign: 'center',
    color: 'rgba(28, 113, 251, 0.08)',
    fontFamily: '"Roboto Slab" , serif',
    top: 0,
    transition: '0.5s',
  },
  pricingTableFooter: {
    textAlign: 'center',
    position: 'absolute',
    bottom: -38,
  },
  priceListItem: {
    marginLeft: 0,
    paddingLeft: 0,
    transition: '0.5s',
  },
  priceListItemText: {
    listStyleType: 'none',
    color: '#979797',
    fontSize: '14px',
    letterSpacing: '0.3px',
    marginBottom: '16px',
    fontWeight: 'bold',
    transition: '0.5s',
  },
  billed: {
    fontSize: '12px',
    letterSpacing: '0.4px',
    color: '#cfcdcd',
    paddingBottom: '12px',
    display: 'block',
    fontWeight: 300,
    transition: '0.5s',
  },
  pricingTableLiner: {
    border: '2px solid #f6f6f7',
    borderRadius: 0.5,
    width: '100%',
    transition: '0.5s',
  },
  pricingTableBody: {
    fontSize: '14px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.3px',
    color: '#878787',
    marginTop: '30px',
    transition: '0.5s',
  },
  priceBodyListItem: {
    marginLeft: 0,
    paddingLeft: 0,
  },
  priceBodyListItemText: {
    listStyleType: 'none',
    margin: '30px 0',
  },
  priceBodyListItemTextIcon: {
    marginRight: 10,
  },
  colorBlue: {
    color: '#027cef',
    fontWeight: '500',
  },
  pricingSwitchButton: {
    display: 'table',
    margin: '0 auto',
    marginBottom: 60,
    borderRadius: 24,
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 20px 0 rgba(0, 0, 0, 0.07)',
    position: 'relative',
  },
  activePlan: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  activePlanLeft: {
    transform: 'translate(0, 0)',
  },
  activePlanRight: {
    transform: 'translate(100%, 0)',
  },
  pricingTableFooterRadius: {
    borderRadius: '50%',
    boxShadow: '#c0f0fe 0px -6px 0px 0px',
    position: 'relative',
  },
  pricingTableFooterRadiusEdge: {
    position: 'absolute',
    left: -11,
    width: '130%',
    height: 30,
    top: 5,
    backgroundColor: 'rgb(192, 240, 254)',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
  },
  activePricingTable: {
    // active
    padding: '71px',
    paddingTop: '46px',
    paddingBottom: '25px',
    margin: 0,
    zIndex: 1,
    boxShadow: '5px -2px 14px 1px rgba(0, 0, 0, 0.04)',
  },
  activePricingTextTitle: {
    fontSize: '60px',
    transition: '0.5s',
  },
  activePriceValue: {
    fontSize: '96px',
    transition: '0.5s',
  },
  activePriceValueBg: {
    fontSize: 170,
    letterSpacing: -1.1,
    right: -70,
    top: -17,
    transition: '0.5s',
  },
  activePriceListItemTextPer: {
    fontSize: '34px',
    fontWeight: '500',
  },
  activePricingTableBody: {
    fontSize: '16px',
    marginTop: '0px',
    transition: '0.5s',
  },
  activePricingTableFooter: {
    bottom: '-30px',
  },
  activePriceListItemText: {
    fontSize: '16px',
    transition: '0.5s',
  },
  activeBilled: {
    fontSize: '16px',
    paddingBottom: 0,
  },
  activePriceListItem: {
    marginTop: 0,
  },
  activePricingTableFooterText: {
    fontSize: '16px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
    textAlign: 'center',
    color: '#878787',
    position: 'absolute',
    width: '100%',
    whiteSpace: 'nowrap',
  },
  activePricingTableHeader: {
    marginBottom: 0,
    transition: '0.5s',
  },
  activePricingTableFooterRadius: {
    boxShadow: '#c0f0fe 0px 0px 0px 0px',
    height: 56,
    transition: '0.5s',
  },
  activePricingTableFooterRadiusEdge: {
    width: '114%',
    left: -14,
    top: 0,
    height: 26,
  },
  actionPricingRaisedButton: {
    backgroundColor: 'rgb(192, 240, 254)',
    width: '100%',
    height: 26,
    position: 'absolute',
    top: -8,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
  },
  pricingMobile: {
    // mobile
    backgroundImage: `url(${pricingImgMobile})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right',
    height: 'auto',
  },
  pricingTextMobile: {
    marginTop: 82,
  },
  pricingTextTitleMobile: {
    fontSize: 16,
  },
  pricingTextSubscribeMobile: {
    fontSize: 20,
  },
  pricingContainerMobile: {
    width: '100%',
  },
  pricingTextSubscribeSmalMobile: {
    display: 'block',
    fontWeight: 500,
  },
  hidden: {
    opacity: 0,
  },
  pricingColumnMobile: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  pricingTableMobile: {
    display: 'block',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    boxShadow: '0 0 13px 4px rgba(0, 0, 0, 0.09)',
    padding: '17px 20px',
    marginBottom: '3.5em',
  },
  pricingTableBodyMobile: {
    marginLeft: '2em',
    marginRight: '2em',
  },
  priceValueBgMobile: {
    right: 0,
    transform: 'translateX(-0.3em)',
  },
  pricingSwitchButtonMobile: {
    marginBottom: 18,
  },
  pricingTableFooterMobile: {
    transform: 'translate(3.28em, -5px)',
  },
  pricingTableFooterTextMobile: {
    marginTop: 8,
    color: '#fff',
    textShadow: '1px 1px 5px #000',
  },
  textMobile: {
    marginTop: 8,
    color: '#fff',
    textShadow: '1px 1px 5px #000',
  },
  pricingTableFooterRadiusEdgeMobile: {
    top: -1,
    width: '112%',
    height: 24,
  },
};

const pricingStyle = {
  done: {
    widths: 19,
    height: 13,
    transition: '0.5s',
  },
  actionDone: {
    widths: 26,
    height: 18,
    fill: 'none',
    transition: '0.5s',
  },
  billedMONTHLY: {
    opacity: 0,
  },
  billedANNUALLY: {
    opacity: 1,
  },
  raisedButton: {
    style: {
      minWidth: 'auto',
      borderRadius: '50%',
      transition: '0.5s',
    },
    styleButton: {
      borderRadius: '50%',
      minWidth: 'auto',
    },
    overlayStyle: {
      width: '72px',
      height: '72px',
      transition: '0.5s',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonStyle: {
      display: 'block',
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#ffffff',
      transition: '0.5s',
      width: '72px',
      height: '72px',
      borderRadius: '50%',
      boxShadow: 'rgba(3, 110, 237, 0.13) 0px 17px 20px 0px',
    },
  },
  activeRaisedButton: {
    overlayStyle: {
      width: '192px',
      height: '56px',
      transition: '0.5s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonStyle: {
      display: 'block',
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#ffffff',
      transition: '0.5s',
      width: '192px',
      height: '56px',
      boxShadow: 'rgba(3, 110, 237, 0.09) 0px 15px 11px 0px',
    },
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#ffffff',
      transition: '0.5s',
      whiteSpace: 'nowrap',
    },
  },
  pricingSwitchButton: {
    labelStyle: {
      padding: '16px 52px',
      fontSize: '14px',
    },
    buttonStyle: {
      height: '48px',
      borderRadius: 28,
    },
    overlayStyle: {
      height: '48px',
      alignItems: 'center',
      display: 'flex',
      borderRadius: 28,
    },
    style: {
      boxShadow: '0 0 0',
      borderRadius: 28,
      whiteSpace: 'nowrap',
    },
  },
  raisedButtonMobile: {
    // mobile
    overlayStyle: {
      width: 192,
      height: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonStyle: {
      width: 192,
      height: 48,
      boxShadow: 'rgba(3, 110, 237, 0.09) 0px 15px 11px 0px',
    },
  },
  actionDoneMobile: {
    display: 'none',
  },
};

export { styles, pricingStyle };
