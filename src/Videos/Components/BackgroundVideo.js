import React from "react";
import { CSSTransition } from "react-transition-group";


export default function BackgroundVideo(props) {

  const nodeRef = React.useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={props.active}
      appear
      classNames="background"
      timeout={2000}
    >
      <video
        ref={nodeRef}
        className="background"
        preload="auto"
        autoPlay="autoplay"
        muted
        loop="loop"
      >
        <source src={props.video} type="video/mp4"></source>
      </video>
    </CSSTransition>
  );
}
