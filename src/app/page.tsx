"use client"

import React, { useState, useEffect, useRef } from 'react';
import '../styles/HomePageStyle.css';
import { BsLightning } from 'react-icons/bs';
import { GiFlameClaws, GiTrident } from 'react-icons/gi';
import Link from 'next/link';

const Gallery = () => {
  const [backgroundImage, setBackgroundImage] = useState('Home__Background.jpeg');
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleImageHover = (imageSrc: string) => {
    setBackgroundImage(imageSrc);
  };

  const handleImageLeave = () => {
    setBackgroundImage('Home__Background.jpeg');
  };

  return (
    <div className="relative">
      <div className="image-container" ref={imageContainerRef} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="gallery">
          <Link href='/Poseidon'>
            <div className="img-box img-box-poseidon" onMouseOver={() => handleImageHover('Home__Background-Poseidon.jpeg')} onMouseLeave={handleImageLeave}>
              <h3><GiTrident /> Poseidon</h3>
            </div>
          </Link>
          <Link href='/Zeus'>
            <div className="img-box img-box-zeus" onMouseOver={() => handleImageHover('Home__Background-Zeus.jpeg')} onMouseLeave={handleImageLeave}>
              <h3><BsLightning /> Zeus</h3>
            </div>
          </Link>
          <Link href='/Hades'>
            <div className="img-box img-box-hades" onMouseOver={() => handleImageHover('Home__Background-Hades.jpeg')} onMouseLeave={handleImageLeave}>
              <h3><GiFlameClaws /> Hades</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
