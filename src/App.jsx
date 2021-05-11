import React, {useState} from 'react'
import Topbar from './components/topbar/TopBar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import "./app.scss"

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Intro />
          <Portfolio />
          <Testimonials />
          <Works />
          <Contact />
        </div>
    </div>
  )
}

export default App
