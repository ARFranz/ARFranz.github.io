import { useState } from 'react'
import './App.css'
import { About } from "./About.jsx"
import { Projects } from "./Projects.jsx"
import { Skills } from "./Skills.jsx"
import { Footer } from "./Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App
