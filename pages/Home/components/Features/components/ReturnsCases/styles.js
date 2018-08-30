const styles = {
  componentBody: {
    padding: '32px 23px',
  },
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
  listItem: {
    borderRadius: 10,
    backgroundColor: '#f1f0f0',
    boxShadow: '4px 4px 7px 0 rgba(0, 0, 0, 0.15)',
    padding: '28px 0 28px 16px',
    fontSize: 21,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.2,
    textAlign: 'left',
    color: '#222222',
    width: '100%',
  },
  columnItem: {
    display: 'flex',
    alignItems: 'center',
  },
  avatarItem: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    margin: {
      top: 'auto',
      left: 8,
      right: 16,
    },
  },
  rowMobile: { // mobile
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
};

const stylesComponent = {
  IconStyle: {
    width: 21,
    height: 14,
    transform: 'translate(-1.5em, -10px)',
  },
  listItem: {
    marginBottom: 32,
  },
  listItemLast: {},
  innerDivStyle: {
    padding: 0,
  },
};

export { styles, stylesComponent }