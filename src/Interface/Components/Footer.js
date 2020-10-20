import React from 'react'

import "./Footer.css"

export default function Footer(props){
    

    return (<div className={props.active ? "footer" : "hidden"}>
                <div>© 2017-2020 Zane Armstrong. All rights reserved</div>                
                <div>I make all the music and made the website, and if you want me to make something for you, email me at trash.wav33@gmail.com.</div>
            </div>)
}