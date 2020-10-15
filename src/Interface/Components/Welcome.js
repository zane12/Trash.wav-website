import React, { Suspense, useState } from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import BackgroundVideo from "../../Videos/Components/BackgroundVideo";
import welcomeVideo from "../../Videos/trashwav-axel.mp4";
import logo from "../../Interface/Images/trashwavlogo.png";

const Routes = React.lazy(() => import("./Routes"));

export default function Welcome(props) {
  const [active, setActive] = useState(true);
  const nodeRef = React.useRef(null);

  return (
    <Router>
      <BackgroundVideo video={welcomeVideo} active={true} />
      <CSSTransition nodeRef={nodeRef} appear in={active} classNames="welcome" timeout={2000}>
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
    </Router>
  );
}
