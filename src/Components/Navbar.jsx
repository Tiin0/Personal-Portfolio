import React from "react";
import {useState, useEffect} from "react";
import sunImg from '../Images/navbar/sun.png';
import moonImg from '../Images/navbar/moon.png';

function NavBar() {
  let [hours, setHours] = useState();
  let [minutes, setMinutes] = useState();
  let [seconds, setSeconds] = useState();
  let [lightModeAngle, setLightModeAngle] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setHours((hours + minutes / 60) * 30);
      setMinutes(minutes * 6);
      setSeconds(seconds * 6);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-w-full h-[80px] flex justify-between ml:justify-around items-center shadow overflow-hidden px-4">
      <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] flex justify-center items-center shrink-0">
        <div className="w-[55px] h-[55px] rounded-full relative border-black border-2 shrink-0">
          {/* Clock */}
          <div
            className="absolute w-[4px] h-[14px] bottom-[50%] left-[50%] bg-black translate-x-[-50%] origin-bottom"
            style={{ transform: `rotate(${hours}deg)` }}
          />
          <div
            className="absolute w-[2px] h-[17px] bottom-[50%] left-[50%] bg-black translate-x-[-50%] origin-bottom"
            style={{ transform: `rotate(${minutes}deg)` }}
          />
          <div
            className="absolute w-[1px] h-[20px] bottom-[50%] left-[50%] bg-black translate-x-[-50%] origin-bottom"
            style={{ transform: `rotate(${seconds}deg)` }}
          />
        </div>
      </div>

      <div className="hidden ml:flex ml:visible">
        {/* Nav buttons */}
        <a
          onClick={() => {
            const section = document.querySelector("#about");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="navbarBtn text-black mx-10 cursor-pointer"
        >
          About
        </a>
        <a
          onClick={() => {
            const section = document.querySelector("#skills");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="navbarBtn text-black mx-10 cursor-pointer"
        >
          Skills
        </a>
        <a
          onClick={() => {
            const section = document.querySelector("#projects");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="navbarBtn text-black mx-10 cursor-pointer"
        >
          Projects
        </a>
        <a
          onClick={() => {
            const section = document.querySelector("#contacts");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="navbarBtn text-black mx-10 cursor-pointer"
        >
          Contacts
        </a>
      </div>

      <div
        className="flex-grow max-w-[150px] h-[150px] flex transition-transform duration-500 origin-center translate-y-[75px]"
        style={{ transform: `rotate(${lightModeAngle}deg)` }}
      >
        {/* Light container */}
        <div className="w-full h-full relative">
          <img
            className="absolute left-1/2 w-[60px] h-[60px] object-cover -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            src={sunImg}
            onClick={() => setLightModeAngle(-90)}
            alt="Sun"
          />

          <img
            className="absolute top-1/2 right-0 w-[50px] h-[50px] object-cover translate-x-1/2 -translate-y-1/2 rotate-90 cursor-pointer"
            src={moonImg}
            onClick={() => setLightModeAngle(0)}
            alt="Moon"
          />
        </div>
      </div>
    </div>
  );
}


export default NavBar;