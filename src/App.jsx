import NavBar from "./Components/Navbar";
import Intro from './Components/Intro';
import About from './Components/About';
import Skills from "./Components/Skills";

function App() {


  return (
    <div>
      <NavBar/>
      <main>
        <Intro/>
        <About/>
        <Skills/>
      </main>
    </div>
  )
}

export default App
