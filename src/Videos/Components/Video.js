import React from "react";

import ReactPlayer from "react-player/lazy";

export default function Video(props) {

  const nodeRef=React.useRef(null)
  
  const video = (
    <ReactPlayer
      ref={nodeRef}
      controls
      url={props.src}
      loop
      className="videos-loop"
      width="100%"
      height="100%"
    />
  );

  return video;
}
