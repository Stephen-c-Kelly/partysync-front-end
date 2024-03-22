import React from 'react';
import Button from '../../components/LandingPageButton/LandingPageButton';
// import videoFile from '../../assets/production_id_4306405 (2160p).mp4'
import VinylGif from '../../components/LandingPageGif/LandingPageGif';
import Logo from '../../assets/PartySYNC_Final.png';
import './LandingPage.css'

const styles = {
  // videoContainer: {
  //   position: 'fixed',
  //   top: '0',
  //   left: '0',
  //   width: '100vw',
  //   height: '100vh',
  //   overflow: 'hidden',
  //   zIndex: '-1', // Ensure the video stays in the background
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // video: {
  //   width: '100vw',
  //   height: '100vh',
  //   objectFit: 'cover',
  // },
  Logo: {
    position: 'fixed',
    top: '3.4vh',
    left: '37%', // Center the image horizontally
    transform: 'translateX(-50%)', // Center-align the image
    width: '43vh', // Maintain original image width or set as needed
    height: 'auto', // Adjust height as needed
    zIndex: '1', // Ensure the image is above the background video
  },
};




const Image = (props) => {
  return (
    <>
    <div Style={'position:fixed'}>
      <img src={Logo} alt="Logo" style={styles.Logo} />
      <Button />
      <VinylGif />
    </div>
    {/* <div style={styles.videoContainer}>
    <video
  src={props.video}
  autoPlay
  muted
  loop
  playsInline
  controls
  style={styles.video}
/>
    </div> */}
    </>
  );
};

// Image.defaultProps = {
//   video: videoFile,
// };

export default Image;
