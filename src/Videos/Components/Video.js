import React from "react";

import ReactPlayer from "react-player/lazy";

export default React.forwardRef((props, ref) => {

 
  const video = (
    <ReactPlayer
      ref={ref}
      controls
      url={props.src}
      loop
      className="videos-loop"
      width="100%"
      height="100%"
      onReady={props.onReady}
      onPlay={props.onPlay}
      playing={props.isPlaying}      
    />
  );
    
  return video;
})
