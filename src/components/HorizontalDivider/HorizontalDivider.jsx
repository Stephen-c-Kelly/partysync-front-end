import React from 'react';

const styles = {
  HorizontalDivider: {
    top: '123px',
    left: '-7px',
    width: '100%',
    height: '4px',
    backgroundColor: '#c1c1c1',
    borderRadius: '2px',
  },
};

const HorizontalDivider = (props) => {
  return (
    <div style={styles.HorizontalDivider} />
  );
};

export default HorizontalDivider;