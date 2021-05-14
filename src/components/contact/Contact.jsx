import "./contact.scss"

export default function Contact() {


    const handleSubmit = (e) =>{
        e.preventDefault()

    }
    return (
        <div className="contact" id="contact">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit"> Send</button>                   
                </form>
                <footer className="footer">                 
                    <img 
                        className="footerItem" 
                        src="img/linkein.png" 
                        alt="linkein.png"  
                        onClick={()=> window.open('https://www.linkedin.com/in/rostyslav-l-815b271b0/', "_blank") }/>
                    <img 
                        className="footerItem"  
                        src="img/github.png" 
                        alt="github.png"  onClick={()=> window.open('https://github.com/RostyslavL', "_blank") }/>
                    <img 
                        className="footerItem"  
                        src="img/facebook.png" 
                        alt="facebook.png"  onClick={()=> window.open('https://www.facebook.com/rostyslav.logvinov', "_blank") }/>
                </footer>
        </div>
    )
}
