import Clock from './NavComponents/Clock';
import LightMode from "./NavComponents/LightMode";

function NavBar() {

  return (
    <div className="w-full h-[80px] flex justify-between ml:justify-around items-center shadow dark:shadow-white  overflow-hidden px-4">
      
      <Clock/>

      <div className="hidden ml:flex ml:visible">
        {/* Nav buttons */}
        <a
          onClick={() => {
            const section = document.querySelector("#about");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="navbarBtn text-black mx-10 cursor-pointer"
        >
          <h3 className='dark:text-white'>About</h3>
        </a>
        <a
          onClick={() => {
            const section = document.querySelector("#skills");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="navbarBtn text-black mx-10 cursor-pointer"
        >
          <h3 className='dark:text-white'>Skills</h3>
        </a>
        <a
          onClick={() => {
            const section = document.querySelector("#projects");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="navbarBtn text-black mx-10 cursor-pointer"
        >
          <h3 className='dark:text-white'>Projects</h3>
        </a>
        <a
          onClick={() => {
            const section = document.querySelector("#contacts");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="navbarBtn text-black mx-10 cursor-pointer"
        >
          <h3 className='dark:text-white'>Contacts</h3>
        </a>
      </div>

      <LightMode/>
    </div>
  );
}


export default NavBar;