import "./topbar.scss"
import {Person, Email} from '@material-ui/icons'


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <Person className="icon"/>
                        <span> +48 788 249 945</span>
                    </div>
                    <div className="item">
                        <Email className="icon"/>
                        <span> rostyslavlogvinov@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
