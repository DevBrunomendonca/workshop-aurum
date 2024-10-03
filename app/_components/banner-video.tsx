import React from 'react';

const VideoBanner = () => {
  return (
    <div className='hidden absolute w-full h-auto top-0 -z-10 lg:block' >
      <video 
        src="/banner-vedeo-aurum.mp4"
        autoPlay 
        loop 
        muted 
        playsInline 
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}

export default VideoBanner;
