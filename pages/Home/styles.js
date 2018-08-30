const styles = {
  header: {
    paddingTop: '13em',
    paddingBottom: '5em',
    backgroundImage: 'linear-gradient(bottom,#035cea,#00c6fb)',
    clipPath: 'ellipse(1400px 81% at 45% 19%)',
  },
  headerContainer: {
    width: '1110px',
    margin: '0 auto',
  },
  headerBody: {
    textAlign: 'center',
  },
  headerBodyTitle: {
    fontSize: '56px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '0.89',
    letterSpacing: '0.4px',
    color: '#ffffff',
    margin: '0',
  },
  headerBodySubscribe: {
    fontSize: 37,
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.25',
    letterSpacing: '0.5px',
    color: '#ffffff',
    marginTop: 10,
  },
  headerFeaturesItem: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.7px',
    color: '#ffffff',
    margin: '32px 0',
    listStyleType: 'none',
  },
  headerFeaturesRow: {
    display: 'flex',
    margin: {
      left: '-.75rem',
      right: '-.75rem',
      top: '-.75rem',
      bottom: 0,
    },
  },
  flipCard: {
    position: 'relative',
  },
  formProgress: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    background: 'rgba(255,255,255,.4)',
  },
  headerFeaturesColumn: {
    minWidth: 450,
    display: 'block',
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
    padding: '.75rem',
  },
  features: {
    margin: '0',
    paddingLeft: '0',
  },
  headerFeaturesIcon: {
    marginRight: 15,
  },
  headerFeaturesButton: {
    marginTop: 40,
  },
  headerMobile: {
    // mobile
    padding: {
      top: 96,
      left: 16,
      right: 16,
      bottom: 42,
    },
  },
  headerContainerMobile: {
    width: '100%',
  },
  headerBodyMobile: {
    textAlign: 'center',
    marginBottom: 24,
  },
  headerFeaturesRowMobile: {
    flexDirection: 'column',
  },
  headerFeaturesColumnMobile: {
    display: 'grid',
    justifyContent: 'center',
    padding: '0 .75rem',
    minWidth: 'auto',
  },
  headerBodyTitleMobile: {
    fontSize: 20,
  },
  headerBodySubscribeMobile: {
    fontSize: 20,
    fontWeight: 300,
  },
  headerBodySubscribeMobileTwo: {
    fontWeight: 'normal',
    display: 'block',
  },
  hidden: {
    display: 'none',
  },
  headerFeaturesItemMobile: {
    margin: '9px 0',
    fontSize: 16,
  },
  headerFeaturesIconMobile: {
    marginRight: 6,
  },
  main: {
    overflow: 'hidden',
  },
  dialogPaperClassName: {
    borderRadius: '10px !important',
    padding: 6,
    backgroundImage: 'linear-gradient(rgb(0, 198, 251), rgb(3, 92, 234))',
    '& > div': {
      position: 'relative',
      borderRadius: '10px !important',
      height: '80vh !important',
      maxHeight: 'inherit !important',
    },
  },
  videoContainer__iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
};

const homeStyle = {
  homePageLayout: {
    overflow: 'hidden',
  },
  headerFeaturesColumnImg: {
    marginLeft: '-168px',
    minWidth: 'auto',
  },
  headerFeaturesColumnFeatures: {
    paddingTop: '2em',
  },
  checkIcon: {
    width: '17px',
    height: '17px',
  },
  raisedButtonFeatures: {
    labelStyle: {
      padding: '0 20px 0 10px',
      fontSize: '14px',
      color: '#035cea',
    },
    buttonStyle: {
      height: '56px',
    },
    overlayStyle: {
      height: '56px',
      alignItems: 'center',
      display: 'flex',
    },
    style: {
      marginLeft: '2em',
    },
  },
  dialog: {
    contentStyle: {
      position: 'absolute',
      top: 0,
      width: '100%',
      maxWidth: 'none',
      padding: '0 20px',
      borderRadius: 10,
    },
    bodyStyle: {
      maxHeight: 'auto',
      padding: 0,
    },
  },
  element: {
    position: 'relative',
  },
  raisedButtonFeaturesMobile: {
    // mobile
    labelStyle: {
      padding: '0 20px 0 10px',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    style: {
      margin: '15px auto 34px',
      width: '278px',
    },
    overlayStyle: {
      height: '56px',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  emptilyStyle: {},
  circle: {
    circle__mobile__parallaxContainerStyle: {
      transform: 'translateY(-2em)',
    },
  },
  circle1: {
    circle__parallaxContainerStyle: {
      top: 'auto',
      bottom: 0,
      transform: 'translateY(-9em)',
      zIndex: 10,
    },
    circle__mobile__parallaxContainerStyle: {
      display: 'none',
    },
  },
  circle2: {
    circle__parallaxContainerStyle: {
      transform: 'translate(-10em,12em)',
      zIndex: 10,
    },
    circle__mobile__parallaxContainerStyle: {
      transform: 'translate(-8em, 2em)',
      zIndex: 11,
    },
  },
  circle3: {
    circle__parallaxContainerStyle: {
      transform: 'translate(2em,-1em)',
      zIndex: 10,
    },
    circle__mobile__parallaxContainerStyle: {
      display: 'none',
    },
  },
};

export { styles, homeStyle };
