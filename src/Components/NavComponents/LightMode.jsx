import React, {useState, useEffect} from "react";
import sunImg from '../../Images/navbar/sun.png';
import moonImg from '../../Images/navbar/moon.png';


function useDarkMode(initialValue = false) {
  const [darkMode, setDarkMode] = useState(initialValue);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

function LightMode() {
    const [lightModeAngle, setLightModeAngle] = useState(0);
    const [darkMode, setDarkMode] = useDarkMode(false);

    return (
        <div
            className="flex-grow max-w-[150px] h-[150px] flex transition-transform duration-500 origin-center translate-y-[75px]"
            style={{ transform: `rotate(${lightModeAngle}deg)` }}
            onClick={() => setDarkMode(!darkMode)}
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
    )
}


export default LightMode;