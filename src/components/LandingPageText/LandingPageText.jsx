import React from 'react';
import image from '../../assets/PartySYNC.png'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center', // Centers horizontally
    alignItems: 'center', // Centers vertically
    height: '40vh', // Takes up the full viewport height
    width: '100vw', // Takes up the full viewport width
  },
  text: {
    color: '#f2f2f2',
    fontSize: '55px',
    fontFamily: 'Poppins',
    fontWeight: '500',
    lineHeight: '62px',
    // Ensure the text itself is centered if it wraps
    textAlign: 'center',
  },
};

const defaultProps = {
  image: image,
};

const Text = (props) => {
  return (
    <div style={styles.container}> {/* This is the new container for centering */}
     
    </div>
  );
};

export default Text;
