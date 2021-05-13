import "./portfolio.scss"
import  PortfolioList from '../portfolioList/PortfolioList'
import {useState, useEffect} from 'react'
import {
    fullstackPortfolio, 
    webPortfolio,
    mobilePortfolio,
    backEndPortfolio,
    frontendPortfolio
} from '../../data'


export default function Portfolio() {
    
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

    const list = [
        {        
            id:'fullstack',
            title: 'Fullstack Apps',
        },
        {        
            id:'web',
            title: 'Web Apps',
        },
        {        
            id:'frontend',
            title: 'Frontend Apps & Landing Pages',
        },
        {        
            id:'backend',
            title: 'Backend Apps',
        },
        {        
            id:'mobile',
            title: 'Mobile Apps',
        },
    ]

    useEffect(() => {
        switch(selected){
            case 'fullstack':
            setData(fullstackPortfolio)
            break;
            case 'web':
            setData(webPortfolio)
            break;
            case 'frontend':
            setData(frontendPortfolio)
            break;
            case 'mobile':
            setData(mobilePortfolio)
            break;
            case 'backend':
            setData(backEndPortfolio)
            break;
            default:
            setData(webPortfolio)
        }
        
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => ( 
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) =>(
                    <div className="item">
                        <img 
                        src={d.img} 
                        alt={d.title} 
                        onClick={()=> window.open(`${d.link}`, "_blank")}
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))} 
            </div>
        </div>
    )
}




