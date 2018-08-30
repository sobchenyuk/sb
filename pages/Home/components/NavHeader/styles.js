const styles = {
  header: {
    container: {
      maxWidth: '1110px',
      margin: '0 auto',
      width: '100%',
    },
    nav: {
      display: 'flex',
      position: 'relative',
      marginBottom: '0',
      width: '100%',
      zIndex: 11,
    },
    navbarLeft: {
      flexWrap: 'wrap',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    navbarNav: {
      display: 'flex',
      margin: '0',
      padding: '0',
      listStyle: 'none',
      marginLeft: 'auto',
      alignItems: 'center',
      minHeight: '60px',
    },
    btn: {
      margin: {
        left: '2em',
        right: 0,
        bottom: 0,
        top: 0,
      },
    },
    button: {
      display: 'none',
    },
    navbarNavLi: {
      margin: '0 2em',
    },
    navbarNavLiLine: {
      width: '1px',
      height: '32px',
      backgroundColor: '#e9e9e9',
      marginLeft: '2em',
      marginRight: '2em',
    },
    navbarNavLiLastIcon: {
      position: 'relative',
      background: 'none',
      height: 'auto',
      marginLeft: '10px',
      top: '3px',
    },
    navbarNavLiA: {
      color: '#fff',
      fontSize: '16px',
      fontWeight: 300,
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      letterSpacing: '0.5px',
      height: 34,
      display: 'inline-block',
    },
    activeNavbarNavLiA: {
      // active link
      fontWeight: 'normal',
    },
    navbarLogo: {
      objectFit: 'contain',
      display: 'flex',
      alignItems: 'center',
    },
    navbarLogoTextBig: {
      padding: '0px 15px',
      position: 'relative',
    },
    navbarLogoTextBigSpanFirst: {
      zIndex: '1',
      position: 'relative',
      paddingTop: '12px',
      paddingBottom: '7px',
      display: 'block',
    },
    navbarLogoTextBigSpanLast: {
      borderRadius: '5px',
      backgroundColor: '#027cef',
      objectFit: 'contain',
      opacity: '0.25',
      position: 'absolute',
      top: '0',
      width: '100%',
      height: '100%',
      left: '0',
      display: 'block',
    },
    navbarLogoText: {
      marginLeft: '5px',
      fontSize: '16px',
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      letterSpacing: '0.9px',
      textAlign: 'center',
      textTransform: 'uppercase',
      color: '#ffffff',
    },
    navbarNavLiMobile: {
      // Mobile
      display: 'none',
    },
    containerMobile: {
      width: '100%',
    },
    appBarMobile: {
      paddingLeft: '16px !important',
      paddingRight: '16px !important',
      paddingTop: '0 !important',
      paddingBottom: '0 !important',
      top: '0 !important',
      display: 'flex !important',
      alignItems: 'flex-end',
      backgroundImage: 'linear-gradient(rgb(0, 198, 251), rgb(3, 92, 234))',
      height: 'auto !important',
    },
    navbarLogoTextBigMobile: {
      padding: 0,
      width: '38.5px',
      height: '38.5px',
    },
    navbarLogoTextBigSpanFirstMobile: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      height: '100%',
    },
    logoMobile: {
      width: '15.6px',
      height: '22px',
    },
    navbarLogoTextMobile: {
      fontSize: '10.6px',
    },
    btnMobile: {
      margin: 'auto',
    },
    toolbarContainer: {
      maxWidth: '1110px',
      margin: '0 auto',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    imageDehaze: {
      fill: '#fff !important',
    },
  },
};

const navHeaderStyle = {
  helpIcon: {
    fill: 'none',
    widths: 20,
    height: 17,
  },
  appBar: {
    position: 'absolute',
    top: '3em',
    display: 'block',
    background: 'none',
    boxShadow: '0 0 0',
    padding: 0,
    transition: 'inherit',
  },
  toolbarFixed: {
    position: 'fixed',
    top: '0',
    display: 'block',
    backgroundImage: 'linear-gradient(rgb(0, 198, 251), rgb(3, 92, 234))',
    padding: '10px 0px',
    transition: 'inherit',
    height: 'auto',
    width: '100%',
    zIndex: 12,
  },
  appBarStyle: {
    titleStyle: {
      display: 'none',
    },
    iconStyleLeft: {
      margin: 0,
      width: '100%',
    },
  },
  liLastA: {
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  liFirstA: {
    marginLeft: 0,
  },
  raisedButton: {
    labelStyle: {
      padding: '20px 55px',
      fontSize: 14,
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      letterSpacing: 0.8,
      color: '#027cef',
      textTransform: 'uppercase',
    },
    buttonStyle: {
      height: '56px',
    },
    overlayStyle: {
      height: '56px',
      alignItems: 'center',
      display: 'flex',
    },
  },
  hidden: {
    display: 'none',
  },
  navbarNavLiASpan: {
    borderBottom: '3px solid #fff',
  },
  activeNavbarNavLiASpan: {
    borderBottom: '3px solid transparent',
  },
  raisedButtonMobile: {
    // Mobile
    labelStyle: {
      fontSize: '14px',
      fontWeight: 'bold',
      letterSpacing: 0.8,
      color: '#027cef',
      textTransform: 'uppercase',
      width: 144,
    },
    buttonStyle: {
      height: '32px',
    },
    overlayStyle: {
      height: '32px',
      alignItems: 'center',
      display: 'flex',
    },
  },
  appBarStyleMobile: {
    iconStyleRight: {
      display: 'block',
      margin: 'auto',
    },
  },
  toolbar: {
    position: 'absolute',
    top: '3em',
    width: '100%',
    backgroundColor: '#00c5fa',
    height: 'auto',
    padding: 'initial',
  },
  toolbarGroup: {
    marginLeft: 0,
    width: '100%',
  },
};

export { styles, navHeaderStyle };
