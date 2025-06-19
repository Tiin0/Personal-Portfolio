import NavBar from "./Components/Navbar";
import Intro from './Components/Intro';
import About from './Components/About';
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";

function App() {


  return (
    <div>
      <nav>
        <NavBar/>
      </nav>
      <main>
        <Intro/>
        <About/>
        <Skills/>
        <Projects/>
      </main>
      <footer>
        <Contacts/>
      </footer>
    </div>
  )
}

export default App
