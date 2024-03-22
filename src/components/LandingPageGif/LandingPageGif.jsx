import React from 'react';
import myGif from '../../assets/production_id_43064052160p-ezgif.com-video-to-gif-converter.gif';
import './LandingPageGif.css'

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


// Refactor defaultProps to directly use myGif
const defaultProps = {
    image: myGif // Directly assign myGif here
  };


const VinylGif = (props) => {
    const { image } = props.image ? props : defaultProps;

  return (
    // <>
    //       {/* <img src='../../assets/production_id_43064052160p-ezgif.com-video-to-gif-converter.gif' alt="Description" /> */}
    //       {/* <img src={myGif} alt="Animated Vinyl" style={{ width: '100%', height: '100%' }} /> */}


    // </>
    
    <div className="vinylGifContainer"
     style={{
      ...styles.ImageContainer,
      backgroundImage : `url(${image})`

    //   img: '../../assets/production_id_43064052160p-ezgif.com-video-to-gif-converter.gif',
    }} />
    
  );
};

export default VinylGif;