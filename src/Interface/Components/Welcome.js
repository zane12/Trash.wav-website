import React, { Suspense, useState } from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import BackgroundVideo from "../../Videos/Components/BackgroundVideo";
import TrashSpinner from "./TrashSpinner"
import Footer from "./Footer"

import logo from "../../Interface/Images/trashwavlogo.png";

const Routes = React.lazy(() => import("./Routes"));

export default function Welcome(props) {
  const [active, setActive] = useState(true);
  const [bgLoaded, setBgLoaded] = useState(false);
  const nodeRef = React.useRef(null);
  
  
  

  return (
    <Router>
      <div className="wrapper">
      <BackgroundVideo  onCanPlayThrough={setBgLoaded}  video="https://trashwav.s3.amazonaws.com/trashwav-axel.mp4" active={true} />
      
      {bgLoaded ? <span><CSSTransition nodeRef={nodeRef} appear in={active} classNames="welcome" timeout={2000}>
        <div ref={nodeRef} className="welcome welcome-container">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>

          <ul className="welcome-links">
            <Link to="/videos">
              <li className="welcome-links">Videos </li>
            </Link>
            <Link to="/news">
              <li className="welcome-links">News</li>
            </Link>
            <Link to="/music">
              <li className="welcome-links">Music</li>
            </Link>
          </ul>
          <Footer active/>
        </div>
        
      </CSSTransition>
      
      <Route exact path="/">
        {({ match }) => {
          setActive(match != null);
          return null;
        }}
      </Route>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes setActive={setActive} />
      </Suspense>
      
      </span> : <TrashSpinner />}
      </div>
      
    </Router>
  );
}
