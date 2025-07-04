import React, {useState, useEffect} from "react";

function Clock() {
    let [time, setTime] = useState({h:0, m:0, s:0})
    
    useEffect(() => {
        const updateTime = () => {
        const now = new Date();
        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        setTime({
            h: (hours + minutes / 60) * 30,
            m: minutes * 6,
            s: seconds * 6,
        });
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
    }, []);

    return (
      <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] flex justify-center items-center shrink-0">
        <div className="w-[55px] h-[55px] rounded-full relative border-black border-2 shrink-0 dark:border-white">
          <div
            className="absolute w-[4px] h-[14px] bottom-[50%] left-[50%] bg-black dark:bg-white translate-x-[-50%] origin-bottom"
            style={{ transform: `rotate(${time.h}deg)` }}
          />
          <div
            className="absolute w-[2px] h-[17px] bottom-[50%] left-[50%] bg-black dark:bg-white translate-x-[-50%] origin-bottom"
            style={{ transform: `rotate(${time.m}deg)` }}
          />
          <div
            className="absolute w-[1px] h-[20px] bottom-[50%] left-[50%] bg-black dark:bg-white translate-x-[-50%] origin-bottom"
            style={{ transform: `rotate(${time.s}deg)` }}
          />
        </div>
      </div>
    )
}


export default Clock;