import React, { Suspense } from "react";
import { Route } from "react-router-dom";

import News from "../../News/Components/News";
import Music from "../../Music/Components/Music";

const Videos = React.lazy(() => import("../../Videos/Components/Videos"));

export default function Routes(props) {
  return (
    <div>
      <Route exact path="/videos">
        {({ match }) => {
          return (
            <Suspense fallback={<div>Loading...</div>}>
              <Videos active={match != null} />
            </Suspense>
          );
        }}
      </Route>

      <Route exact path="/news">
        {({ match }) => <News active={match != null} />}
      </Route>
      <Route exact path="/music">
        {({ match }) => <Music active={match != null} />}
      </Route>
    </div>
  );
}
