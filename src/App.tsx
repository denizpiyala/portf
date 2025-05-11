// Removed unused React import
import About from './Components/About/About'
import Connect from './Components/Connect/Connect'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Connect/>
    </div>
  )
}

export default App
