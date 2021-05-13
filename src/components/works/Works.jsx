import "./works.scss"
import {AllPortfolio} from '../../data'
import {useState} from 'react'

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const  handleClick = (direction) =>{
        direction === 'left' 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : AllPortfolio.length - 1) 
        : setCurrentSlide(currentSlide < AllPortfolio.length - 1 ? currentSlide + 1 : 0)
    }
    
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {  AllPortfolio.map((d) =>(
                        <div className="container">
                            <div className="item" >
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imageContainer">
                                            <img src={d.logo} alt="" />
                                        </div>
                                        <h2>{d.title}</h2>
                                        <p>
                                            <i>{d.description}</i>
                                        </p>
                                        <span onClick={()=> window.open(`${d.link}`, "_blank")}>Details</span>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={d.img} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <img src="img/arrow.png" alt="" className="arrow left" onClick={() => handleClick('left')}/>
            <img src="img/arrow.png" alt="" className="arrow right" onClick={() => handleClick()}/>
        </div>
    )
}
