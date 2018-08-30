const styles = {
  featuresComponent: {
    width: 619,
    backgroundColor: '#f5f5f5',
    boxShadow: '8px 5px 15px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    transform: 'scale(0.8)',
    transformOrigin: 'top right',
    height: '100%',
  },
  featuresComponentHeader: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgb(2, 124, 239)',
    backgroundImage: 'linear-gradient(rgb(0, 198, 251), rgb(3, 92, 234))',
    willChange: 'background-color',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  featuresComponentBody: {
    backgroundColor: '#f5f5f5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  featuresComponentMobile: {
    // mobile
    width: '100%',
    transformOrigin: 'top center',
    transform: 'scale(0.9)',
  },
};

const defaultStyle = {
  logo: {
    width: 16,
    height: 22,
    fill: 'none',
    borderRadius: 2.8,
    backgroundColor: '#027cef',
    padding: '6px 9px',
    margin: '4px auto',
  },
};

export { styles, defaultStyle };
