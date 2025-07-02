// src/BackgroundSection.js
import React from 'react';

const BackgroundSection = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url("${process.env.PUBLIC_URL}/assets/stars-background.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem'
      }}
    >
      This is a background image!
    </div>
  );
};

export default BackgroundSection;
