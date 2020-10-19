import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import BackButton from "../../Interface/Components/BackButton";

export default function News(props) {
  const [active, setActive] = useState(false)
  
  


  return (
    <div>
      <CSSTransition
        key="news"
        in={props.active && active}
        classNames="news"
        timeout={2000}
      >
        <div className="news news-container">
          <h1 className="news">No news!!!</h1>
          <p className="news">
            However, if there were some news, it would look something like this.
            Whatever sort of length it has to it we need to make sure and check
            that it wraps correctly and automatically formats nicely so that
            it's easy to add news later if this website is ever going to get
            used. Really for now its a test project so I just need some text
            here to test my CSS and whatnot.
          </p>
        </div>
      </CSSTransition>
      <CSSTransition
        key="news2"
        in={props.active && active}
        classNames="news"
        timeout={2000}
      >
        <div className="news news-container">
          <h1 className="news">No news!!!</h1>
          <p className="news">
            However, if there were some news, it would look something like this.
            Whatever sort of length it has to it we need to make sure and check
            that it wraps correctly and automatically formats nicely so that
            it's easy to add news later if this website is ever going to get
            used. Really for now its a test project so I just need some text
            here to test my CSS and whatnot.
          </p>
        </div>
      </CSSTransition>
      <BackButton onLoad={()=>setActive(true)} active={props.active}/>
    </div>
  );
}
