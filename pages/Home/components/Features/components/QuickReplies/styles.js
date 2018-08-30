const styles = {
  componentBody: {
    padding: {
      left: 16,
      right: 0,
      top: 40,
      bottom: 106,
    },
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
    padding: '25px 16px',
    fontSize: 21,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '0.76',
    letterSpacing: 0.2,
    textAlign: 'left',
    color: '#222222',
  },
  listItemBlue: {
    padding: 16,
    lineHeight: '1.19',
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
  inverText: {
    fontWeight: 'bold',
    color: '#1c71fb',
    backgroundColor: '#ffffff',
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
    padding: '19px 10px',
    fontSize: 15,
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
  listMobile: { // mobile
    padding: '0px 0px 0px 6px',
  },
};

export { styles, stylesComponent };
