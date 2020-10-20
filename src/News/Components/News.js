import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import BackButton from "../../Interface/Components/BackButton";
import Footer from "../../Interface/Components/Footer";

export default function News(props) {
  const [active, setActive] = useState(false)
  const [footer, setFooter] = useState(false)
  
  


  return (
    <div>
      <CSSTransition
        key="news"
        in={props.active && active}
        classNames="news"
        onEntered={() => setFooter(true)}
        onExit={() => setFooter(false)}
        timeout={2000}
      >
        <div className="news news-container">
          <h1 className="news">No news!!!</h1>
          <p className="news">
            However, if there were some news, it would look something like this.
            I have some music pretty much ready for release, but I have to remaster it and make some sort of media to go along with it.
            If you see this and wanna help me get it released, email me at trash.wav33@gmail.com.
          </p>
        </div>
      </CSSTransition>
      
      <BackButton onLoad={()=>setActive(true)} active={props.active}/>
      <Footer active={footer} />
      
    </div>
  );
}
