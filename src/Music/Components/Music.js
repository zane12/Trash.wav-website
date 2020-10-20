import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import BackButton from '../../Interface/Components/BackButton'
import Footer from '../../Interface/Components/Footer'

export default function Music(props) {
  const [active, setActive] = useState(false)
  const [footer, setFooter] = useState(false)
  
  return (
    <div>
      <div className="music-container">
        <CSSTransition
          key={`music`}
          in={props.active && active}
          appear
          classNames="music"
          timeout={2000}
          onEntered={() => setFooter(true)}
          onExit={() => setFooter(false)}
        >
          <iframe
            onLoad={() => setActive(true)}
            className="music"
            title="spotifyPlayer"
            src="https://open.spotify.com/embed/album/5C2hnvySPsH2irXfM2WjNT"
            width="400"
            height="400"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </CSSTransition>
      </div>
      <CSSTransition
        key={`music`}
        in={props.active}
        appear
        classNames="music"
        timeout={2000}
      >
        <iframe
          title="spotifyFollow"
          className="follow-button"
          src="https://open.spotify.com/follow/1/?uri=spotify:artist:72kdiMhrL9t7u7elzLhiEz?si=2uXDkfUZT3CM2f9rdBvNHQ&size=detail&theme=light"
          width="300"
          height="56"
          scrolling="no"
          frameBorder="0"
          allowtransparency="true"
        ></iframe>
      </CSSTransition>
      <BackButton active={props.active} />
      <Footer active={footer} />
    </div>
  );
}
