import React from 'react';

const LoopedVideo = ({ video }) => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <source src={video} type='video/mp4' />
      </video>
    </div>
  );
};

export default LoopedVideo;
