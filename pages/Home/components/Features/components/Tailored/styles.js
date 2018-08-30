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
  card: {},
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
    widths: 21,
    height: 14,
    transform: 'translate(-1.5em, -10px)',
  },
  listItem: {
    borderRadius: 10,
    backgroundColor: '#f1f0f0',
    boxShadow: '4px 4px 7px 0 rgba(0, 0, 0, 0.15)',
    padding: '31px 35px',
    marginBottom: 32,
  },
  listItemLast: {
    borderRadius: 10,
    backgroundColor: '#f1f0f0',
    boxShadow: '4px 4px 7px 0 rgba(0, 0, 0, 0.15)',
    padding: '31px 35px',
  },
  innerDivStyle: {
    padding: '0 0 0 20px',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.5,
    textAlign: 'left',
    color: '#222222',
  },
};

export { styles, stylesComponent }