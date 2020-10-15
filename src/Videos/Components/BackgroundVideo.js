import React from "react";
import { CSSTransition } from "react-transition-group";


export default function BackgroundVideo(props) {

  
  
  
  return (
    <CSSTransition
      nodeRef={props.ref}
      in={props.active}
      appear
      classNames="background"
      timeout={2000}
    >
      <video
        onCanPlay={() => { props.onCanPlay(true) }}
        ref={props.ref}
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
