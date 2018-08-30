const styles = {
  componentBody: {
    padding: 16,
    paddingRight: 43,
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
  listItem: {
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    backgroundColor: '#f1f0f0',
    boxShadow: '4px 4px 7px 0 rgba(0, 0, 0, 0.15)',
    padding: 16,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.25',
    letterSpacing: 0.5,
    textAlign: 'left',
    color: '#222222',
  },
  listItemBlue: {
    backgroundColor: '#1c71fb',
    color: '#ffffff',
    boxShadow: '3px 5px 15px 0 rgba(28, 113, 251, 0.25)',
  },
  listItemEnd: {
    display: 'flex',
    justifyContent: 'space-between',
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
      left: 0,
      right: 16,
    },
  },
  listItemLink: {
    color: '#ffffff',
    fontWeight: 500,
    textDecoration: 'underline',
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
  listItemMobile: {
    padding: 9,
    fontSize: 15,
  },
  componentBodyMobile: {
    padding: 16,
    paddingRight: 19,
  },
};

const stylesComponent = {
  list: {
    padding: '0px 0px 0px 50px',
  },
  listItem: {
    marginBottom: 12,
  },
  listItemInsert: {},
  listItemLast: {},
  innerDivStyle: {
    padding: 0,
  },
  avatarStyle: {
    backgroundImage: 'linear-gradient(to top, #035cea, #00c6fb)',
  },
  avatarIconStyle: {
    fill: 'none',
    widths: 16,
    height: 22,
  },
  robotIcon: {
    fill: 'none',
    width: 22,
    height: 17,
  },
  alertIcon: {
    fill: 'none',
    width: 18,
    height: 18,
  },
  listMobile: {
    padding: '0px 0px 0px 8px',
  },
};

export { styles, stylesComponent }