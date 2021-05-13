import "./intro.scss"
import {useEffect, useRef} from 'react'
import {init} from 'ityped'

export default function Intro() {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current,{
            strings:['Software Developer'],
            backDelay: 2000,
            backSpeed: 40,
            showCursor: true
        })
    }, [])

    return (
        <div className="intro" id="intro"> 
            <div className="left">
                <div className="imageContainer">
                    <img src="img/me.png" alt="me.jpg" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2> Hello , I'm </h2>
                    <h1> Rostyslav L</h1>
                    <h3> 
                        <span ref={textRef}></span>
                    </h3>
                    <a href="#portfolio">
                        <img src="img/down.png" alt="down.png" />
                    </a>
                </div>
            </div>
        </div>
    )
}
