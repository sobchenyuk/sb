const styles = {
  footer: {
    backgroundImage: 'linear-gradient(to bottom, #035cea, #00c6fb) !important',
    clipPath: 'ellipse(1400px 62% at 50% 66%)',
    paddingTop: 86,
    paddingBottom: 27,
    marginTop: 190,
  },
  container: {
    width: '1110px',
    margin: '0 auto',
  },
  row: {
    marginLeft: '-.75rem;',
    marginRight: '-.75rem;',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
  },
  logo: {},
  col2: {
    width: '15.666667%',
    height: '100%',
    '& h6': {
      lineHeight: '1.63',
      fontFamily: 'Roboto',
      fontSize: 16,
      color: '#ffffff',
      fontWeight: 'bold',
      letterSpacing: 0.5,
      margin: '0',
    },
    '&:last-child': {
      '& a': {
        fontWeight: 500,
      },
    },
  },
  footerText: {
    margin: '0',
    paddingLeft: '0',
    '& li': {
      listStyleType: 'none',
      '& a': {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 300,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.63',
        letterSpacing: 0.6,
        color: '#ffffff',
      },
    },
  },
  footerSocial: {
    margin: {
      top: '45%',
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  footerSocialUl: {
    display: 'flex',
  },
  footerSocialUlLi: {
    marginRight: 18,
  },
  footerCopir: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.86',
    letterSpacing: 0.1,
    color: '#ffffff',
    position: 'absolute',
    bottom: 0,
  },
  hidden: {
    // mobile
    display: 'none',
  },
  containerMobile: {
    width: '100%',
  },
  rowMobile: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  colMobile: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerMobile: {
    marginTop: 18,
    paddingTop: 40,
    clipPath: 'ellipse(500px 81% at 49% 86%)',
    overflow: 'hidden',
  },
  footerSocialMobile: {
    margin: {
      left: 0,
      right: 0,
      top: 20,
      bottom: 40,
    },
  },
  footerSocialUlMobile: {
    justifyContent: 'space-between',
  },
  footerSocialUlLiMobile: {
    margin: '0 12px',
  },
};

const defaultStyle = {
  styleOne: {
    marginTop: '-1.4em',
  },
  styleTwo: {
    margin: 'auto 0',
    width: 'auto',
  },
};

export { styles, defaultStyle };
