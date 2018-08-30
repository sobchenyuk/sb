const styles = {
  form: {
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 21px 30px 0 rgba(0, 0, 0, 0.1)',
    padding: '44px',
    paddingTop: '25px',
  },
  formLegend: {
    fontSize: '34px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.3px',
    textAlign: 'center',
    color: '#027cef',
    textTransform: 'uppercase',
  },
  formOr: {
    fontSize: '16px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
    textAlign: 'center',
    color: '#027cef',
    margin: '0 8px',
  },
  isGrouped: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formForgot: {},
  formForgotItem: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    paddingLeft: 0,
    justifyContent: 'center',
  },
  formForgotItemLi: {
    listStyleType: 'none',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.3px',
    textAlign: 'center',
    color: '#027cef',
  },
  formForgotItemLiA: {
    color: '#027cef',
    fontWeight: 'bold',
    margin: '0 2px',
  },
  formMobile: {
    // mobile
    padding: '17px 0',
  },
  formLegendMobile: {
    fontSize: '20px',
  },
  fieldMobile: {
    padding: '0 42px',
  },
  isGroupedMobile: {
    padding: {
      left: '16px',
      right: '16px',
    },
  },
  formOrMobile: {
    textTransform: 'lowercase',
  },
};

const formStyle = {
  LabelStyle: {
    fontSize: '16px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
    color: '#027cef',
    top: 43,
  },
  CheckedLabelStyle: {
    fontSize: '14px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
    color: '#027cef',
    display: 'flex',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: '16px',
    fontWeight: 'bold',
    width: '160px',
  },
  buttonStyle: {
    height: '48px',
    width: '160px',
  },
  overlayStyle: {
    height: '48px',
    width: '160px',
    alignItems: 'center',
    display: 'flex',
  },
  textField: {
    marginTop: -15,
  },
  LabelStyleMobile: {
    // mobile
    fontSize: '16px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
    color: '#027cef',
  },
  raisedButtonMobile: {
    labelStyle: {
      fontSize: '14px',
      fontWeight: 'bold',
      width: '140px',
    },
    buttonStyle: {
      height: '48px',
      width: '140px',
    },
    overlayStyle: {
      height: '48px',
      width: '140px',
      alignItems: 'center',
      display: 'flex',
    },
  },
};

export { styles, formStyle };
