import React from 'react';
import './LoginText.css'

const styles = {
  Text: {
    color: '#ff9500',
    fontSize: '43px',
    fontFamily: "Shrikhand",
    fontWeight: '500',
    lineHeight: '42px',
    position: 'absolute',
    right: '13px',
    top: '184px',
    WebkitTextStroke: '1px brown',
    letterSpacing: '0.5px'
}
};

const defaultProps = {
  text: 'Login',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;