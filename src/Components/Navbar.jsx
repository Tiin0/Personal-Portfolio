import React from "react";
import {useState, useEffect} from "react";
import sunImg from '../Images/sun.jpg';
import moonImg from '../Images/moon.png';

function NavBar() {
    let [hours,setHours] = useState();
    let [minutes,setMinutes] = useState();
    let [seconds,setSeconds] = useState();
    let [lightModeAngle, setLightModeAngle] = useState(0); // Starter rotation angle of light button

    useEffect(() => {
    const updateTime = () => {
      const now = new Date(); // get the current date
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setHours((hours + minutes / 60) * 30);  // Time in degrees for clock  
      setMinutes(minutes * 6);                // Time in degrees for clock     
      setSeconds(seconds * 6);                // Time in degrees for clock   
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval); 
  }, []);

    return (
        <div>
            <div className="w-full h-[80px] flex justify-around items-center overflow-hidden bg-white shadow">
                <div className="w-[60px] h-[60px] rounded-full relative border-black border-2"> {/* Clock */}
                    
                    {/* Hours */}
                    <div className={`absolute w-[4px] h-[15px] bottom-[50%] left-[50%] bg-black translate-x-[-50%] origin-bottom`}  style={{ transform: `rotate(${hours}deg)` }}/>

                    {/* Minuts */}
                    <div className={`absolute w-[2px] h-[20px] bottom-[50%] left-[50%] bg-black translate-x-[-50%] origin-bottom`} style={{ transform: `rotate(${minutes}deg)` }}/>
                    
                     {/* Seconds */}
                    <div className={`absolute w-[1px] h-[25px] bottom-[50%] left-[50%] bg-black translate-x-[-50%] origin-bottom`} style={{ transform: `rotate(${seconds}deg)` }}/>
                </div>

                <div className=""> {/*Nav buttons*/}
                    <a href='#about' className="navbarBtn text-black mx-10">About</a>
                    <a href='' className="navbarBtn text-black mx-10">Skills</a>
                    <a href='' className="navbarBtn text-black mx-10">Contacts</a>
                </div>

                    <div className={`w-[150px] h-[150px] flex transition-transform duration-500 origin-center translate-y-[75px]`} style={{ transform: `rotate(${lightModeAngle}deg)` }}> {/* Light container*/}
                        <div className="w-full h-full"> {/* container */}
                            <img 
                                className="absolute left-1/2 w-[50px] h-[50px] object-cover -translate-x-1/2 -translate-y-1/2 cursor-pointer" 
                                src={sunImg}
                                onClick={() => setLightModeAngle(90)}
                                alt="Sun" 
                            /> {/* rotate the container to 90 deg to show moon img*/}

                            <img 
                                className={"absolute top-1/2  w-[50px] h-[50px] object-cover -translate-x-1/2 -translate-y-1/2 rotate-250 cursor-pointer"}
                                src={moonImg}
                                onClick={() => setLightModeAngle(0)} 
                                alt="Moon" 
                            /> {/* rotate the container to 0 deg to show sun img*/}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default NavBar;