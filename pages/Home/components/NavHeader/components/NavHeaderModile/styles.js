const styles = {
  dialog: {
    padding: '0 !important',
    overflowY: 'scroll',
  },
  dialogScroll: {
    minHeight: 600,
  },
  dialogBody: {
    height: '101vh !important',
    maxHeight: 'none !important',
    background: 'linear-gradient(to top, #035cea, #00c6fb)',
    padding: '24px 0!important',
    overflowY: 'scroll !important',
  },
  closed: {
    maxWidth: '100%',
    textAlign: 'center',
    marginBottom: '1em ',
  },
};

const navHeaderStyle = {
  dialog: {
    width: '100%',
    maxWidth: 'none',
    paddingTop: 0,
    transform: 'translate(0, 0)',
    zIndex: 1000000,
  },
  listItem: {
    padding: '0 24px',
    marginBottom: '1em',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 300,
  },
  listItem__link: {
    color: '#ffffff',
    padding: 0,
    fontSize: '16px',
    fontWeight: 300,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
  },
  icon: {
    transform: 'translateY(5px)',
  },
};

export { styles, navHeaderStyle };
