const styles = {
  parent: {
    position: 'relative',
    paddingTop: '70px',
  },
  row: {
    display: 'flex',
    margin: {
      left: '-.75rem',
      right: '-.75rem',
      top: '-.75rem',
      bottom: 0,
    },
  },
  column: {
    display: 'block',
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
    padding: '.75rem',
    paddingTop: 0,
  },
  title: {
    fontSize: '34px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.3px',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: '25px',
    textShadow: '1px 1px 2px #000',
  },
  titleBold: {
    fontWeight: 'bold',
    display: 'block',
  },
  content: {
    fontSize: '15px',
    fontWeight: '400',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#ffffff',
    marginBottom: '40px',
    textShadow: '1px 1px 2px #000',
    '& span': {
      backgroundColor: '#027cef',
    },
  },
  card: {},
  columns: {
    display: 'flex',
  },
  columnItem: {
    display: 'block',
  },
  columnFirst: {
    position: 'relative',
    width: 330,
    padding: 16,
    paddingTop: 15,
  },
  duck: {
    right: 58,
    padding: 10,
    paddingBottom: 5,
    position: 'absolute',
    borderRadius: 8.6,
    backgroundColor: '#fcfcfc',
    boxShadow: '2px 4px 10px 0 rgba(0, 0, 0, 0.15)',
  },
  columnLast: {
    padding: 10,
    backgroundColor: '#2880ef',
    paddingTop: 22,
    fontSize: 16,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.5,
    textAlign: 'center',
    color: '#ffffff',
  },
  subscribe: {
    display: 'block',
    fontSize: 16,
    fontWeight: 'normal',
  },
  tileItem: {
    fontSize: 21,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.2,
    textAlign: 'center',
    color: '#222222',
    marginBottom: '1.3em',
  },
  item: {
    marginLeft: 0,
    paddingLeft: 0,
  },
  textItem: {
    listStyleType: 'none',
    marginBottom: 16,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.5,
    color: '#222222',
    textAlign: 'left',
  },
  textItemBlue: {
    color: '#027cef',
    fontWeight: 500,
  },
  button: {
    display: 'flex',
    marginTop: 32,
  },
  raisedButton: {
    boxShadow: '0 13px 15px 0 rgba(0, 0, 0, 0.07) !important',
    margin: '0 auto',
  },
  columnLastAvatar: {
    position: 'relative',
  },
  columnLastAvatarBadge: {
    position: 'absolute',
    width: 11,
    height: 11,
    backgroundColor: '#40bcbf',
    border: 'solid 1.6px #ffffff',
    right: 0,
    borderRadius: '50%',
    transform: 'translate(-6em, -16px)',
  },
  rowMobile: {
    // mobile
    flexDirection: 'column',
    padding: '0 16px',
    alignItems: 'center',
  },
  contentMobile: {
    marginBottom: 16,
    fontSize: 16,
    fontWeight: 'normal',
  },
  titleMobile: {
    fontSize: 25,
  },
  '@media (max-width: 550px)': {
    columnsMobile: {
      flexDirection: 'column',
    },
  },
  columnLastAvatarBadgeMobile: {
    transform: 'translate(-8.5em, -16px)',
  },
};

const stylesComponent = {
  raisedButton: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    minWidth: 'auto',
  },
};

export { styles, stylesComponent };
