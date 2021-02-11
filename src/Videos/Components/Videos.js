import React, { Suspense, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Swipeable } from 'react-swipeable'


import BackButton from '../../Interface/Components/BackButton'

import '../videos.css'



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

  const refs = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(), 
  ]

  const [playing, setPlaying] = useState(null);
  const [throttled, setThrottled] = useState(false);
  const [active, setActive] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(false)
  
  
  
  function scrollToVideo(e) {
    
    

    let nextVid = active + 1;
    if(nextVid > 18) nextVid = 0;
    let prevVid = active - 1;
    if(prevVid < 0) prevVid = 18;
    
      if(!throttled){

        if(e.deltaY > 0) {
          setScrollDirection(false)
          setActive(nextVid)  
          setThrottled(true)
          
          setTimeout(() => {setThrottled(false)}, 2100)
        }; //scroll down

        if(e.deltaY < 0){
          setScrollDirection(true)
          setActive(prevVid)
          setThrottled(true)          
          setTimeout(() => {setThrottled(false)}, 2100)
         
        } ; //scroll up          
      }        
    
  }


  
 

  const videoComponents = videos.map((video, i) => {

   
    const isActive = active === i;   
      
    return (
      <Swipeable key={`video-swipe${i}`} onSwiped={scrollToVideo} onSwipedDown={(e)=> {
        e.event.preventDefault()
      }} preventDefaultTouchmoveEvent={true}>
      <div onWheel={(e) => scrollToVideo(e)} >
      <CSSTransition        
        key={`video-transition${i}`}
        in={props.active && isActive }
        appear={true}
        classNames={scrollDirection ? "videos-loop" : "videos-loop-previous"}
        timeout={2000}        
      >
        <Suspense  fallback={<div />}>
          <Video key={`video${i}`} ref={refs[i]} isPlaying={playing === i} src={video} onPlay={() => setPlaying(i)} />
        </Suspense>
      </CSSTransition>
      <BackButton key={`video-back${i}`} active={props.active} />
      </div>
      </Swipeable>
      
    );
  });



  


  return videoComponents;
  
}
