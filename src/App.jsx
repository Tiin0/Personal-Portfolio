import NavBar from "./Components/Navbar";
import Intro from './Components/Intro';
import About from './Components/About';
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";

import {useEffect } from "react";
import startObserver from "./data/observer.js";

function App() {

  useEffect(() => {
    startObserver();
  })


  return (
    <div className="dark:bg-[#1f1f1f]">
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
