import React from 'react';

const styles = {
    ImageContainer: {
      position: 'fixed', // Ensure it's positioned absolutely relative to its nearest positioned ancestor or the body
      top: '0',
      left: '0',
      width: '100vw', // 100% of the viewport's width
      height: '100vh', // 100% of the viewport's height
      borderRadius: '0', // Adjust as needed, but for full screen, a border radius might not be necessary
      // backgroundImage: 'url(./image.png)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      zIndex: '-1', // Ensure it's behind other content, adjust as necessary
    },
  };

const defaultProps = {
  image: 'https://media3.giphy.com/media/jobZpJ2vUWRdS/giphy.webp?cid=acd21440yrplpf6kvzoisse4w5z58vkt1vo351mhwnluozhd&ep=v1_gifs_search&rid=giphy.webp&ct=g',
}

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;