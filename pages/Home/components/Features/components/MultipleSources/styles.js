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
    alignItems: 'flex-end',
  },
  flag: {
    marginRight: 16,
    marginLeft: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textRed: {
    color: '#e62d33',
  },
  textBlue: {
    color: '#065fab',
  },
  hidden: {
    display: 'none',
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
  tableResponsive: {
    width: '100%',
    overflowY: 'hidden',
    overflowX: 'scroll',
    '& *': {
      overflow: 'auto !important',
    },
  },
  featuresComponentResponsive: {
    marginBottom: '2em',
  },
  '@media (max-width: 600px)': {
    featuresComponentResponsive: {
      width: '70%',
      margin: 'auto',
      marginBottom: '4em',
      transform: 'scale(0.8)',
    },
  },
  table: {
    maxWidth: '100%',
  },
};

const stylesComponent = {
  table: {
    style: {
      backgroundColor: '#f5f5f5',
      tableLayout: 'auto',
    },
    wrapperStyle: {
      overflow: 'auto',
    },
  },
  tableRow: {
    widths: 31,
    borderLeft: '5px solid transparent',
    paddingRight: 0,
    paddingLeft: 16,
  },
  tableRowActive: {
    widths: 31,
    borderLeft: '5px solid #2877ee',
    backgroundColor: '#ccdcf4',
    paddingRight: 0,
    paddingLeft: 16,
  },
  tableRowColumnFlag: {
    paddingLeft: 0,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.5,
    color: '#222222',
  },
  tableRowColumnFlagActive: {
    paddingLeft: 0,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.5,
    color: '#222222',
    backgroundColor: '#ccdcf4',
    border: 0,
  },
  tableRowColumn: {
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.5,
    color: '#222222',
  },
  tableRowColumnActive: {
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.5,
    color: '#222222',
    backgroundColor: '#ccdcf4',
  },
  tableRowColumnBold: {
    fontSize: 16,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 0.5,
    color: '#222222',
  },
  tableRowH: {
    height: 121,
  },
  tableRowHMobile: {
    // mobile
    height: 80,
  },
};

export { styles, stylesComponent };
