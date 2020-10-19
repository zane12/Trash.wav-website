import React, { Suspense } from "react";
import { CSSTransition } from "react-transition-group";

import TrashSpinner from '../../Interface/Components/TrashSpinner'

// import video1 from "../../Videos/river rat.mp4";
// import video2 from "../../Videos/go.mp4";
// import video3 from "../../Videos/bedtime stories_Medium.mp4";
// import video4 from "../../Videos/boxing_Medium.mp4";
// import video5 from "../../Videos/bert day_Medium.mp4";
// import video6 from "../../Videos/beckon_Medium.mp4";
// import video7 from "../../Videos/brother_Medium.mp4";
// import video8 from "../../Videos/boomclap_Medium.mp4";
// import video9 from "../../Videos/day off_Medium.mp4";
// import video10 from "../../Videos/fixedone_Medium.mp4";
// import video11 from "../../Videos/harbee_Medium.mp4";
// import video12 from "../../Videos/IM SO BORED_Medium.mp4";
// import video13 from "../../Videos/kirby.mp4";
// import video14 from "../../Videos/losing sleep_Medium.mp4";
// import video15 from "../../Videos/radio_Medium.mp4";
// import video16 from "../../Videos/running_Medium.mp4";
// import video17 from "../../Videos/sleep more_Medium.mp4";
// import video18 from "../../Videos/sneeze_Medium.mp4";
// import video19 from "../../Videos/space love_Medium.mp4";

const Video = React.lazy(() => import("./Video"));

export default function Videos(props) {
    const video1 = "https://trashwav.s3.amazonaws.com/IM+SO+BORED_Medium.mp4"
    const video2 = "https://trashwav.s3.amazonaws.com/beckon_Medium.mp4"
    const video3 = "https://trashwav.s3.amazonaws.com/bedtime+stories_Medium.mp4"
    const video4 = "https://trashwav.s3.amazonaws.com/bert+day_Medium.mp4"
    const video5 = "https://trashwav.s3.amazonaws.com/boomclap_Medium.mp4"
    const video6 = "https://trashwav.s3.amazonaws.com/boxing_Medium.mp4"
    const video7 = "https://trashwav.s3.amazonaws.com/brother_Medium.mp4"
    const video8 = "https://trashwav.s3.amazonaws.com/day+off_Medium.mp4"
    const video9 = "https://trashwav.s3.amazonaws.com/fixedone_Medium.mp4"
    const video10 = "https://trashwav.s3.amazonaws.com/go.mp4"
    const video11 = "https://trashwav.s3.amazonaws.com/harbee_Medium.mp4"
    const video12 = "https://trashwav.s3.amazonaws.com/kirby.mp4"
    const video13 = "https://trashwav.s3.amazonaws.com/losing+sleep_Medium.mp4"
    const video14 = "https://trashwav.s3.amazonaws.com/radio_Medium.mp4"
    const video15 = "https://trashwav.s3.amazonaws.com/river+rat.mp4"
    const video16 = "https://trashwav.s3.amazonaws.com/running_Medium.mp4"
    const video17 = "https://trashwav.s3.amazonaws.com/sleep+more_Medium.mp4"
    const video18 = "https://trashwav.s3.amazonaws.com/sneeze_Medium.mp4"
    const video19 = "https://trashwav.s3.amazonaws.com/space+love_Medium.mp4"
            

  const videos = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video10,
    video11,
    video12,
    video13,
    video14,
    video15,
    video16,
    video17,
    video18,
    video19,
  ];

  

  return videos.map((video, i) => {
    return (
      <CSSTransition
        
        key={`video${i}`}
        in={props.active}
        appear
        classNames="videos-loop"
        timeout={2000}
      >
        <Suspense  fallback={<TrashSpinner />}>
          <Video src={video} />
        </Suspense>
      </CSSTransition>
    );
  });
  
}
