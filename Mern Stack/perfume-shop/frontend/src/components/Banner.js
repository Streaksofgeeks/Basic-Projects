import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css'; // Import the CSS file for styling
import bannerImage from './banner-image.jpg'; // Import the banner image

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner Image" className="banner-image" />
    </div>
  );
}

export default Banner;