import React, { useState } from 'react'
import logo from '../Images/trashwavlogo.png'
import {Link} from 'react-router-dom'

export default function BackButton(props) {
    const [active, setActive] = useState(false)
    
    if(props.active && !active) setTimeout(() => {setActive(true) }, 2100)
    if(!props.active && active) setActive(false);

    if(active) return <Link to="/"><img onLoad={props.onLoad} alt="" src={logo} className="back-button"></img></Link>
    
    return null;
}