import React from "react";

function Card(props) {
  return (
    <div className="flex xs:flex-col ml:flex-row xs:items-center h-auto xs:w-full ml:w-auto dark:shadow-lg">
      <input
        type="radio"
        checked={props.isSelected}
        onChange={props.onSelect}
        name="project-selection"
        className="peer hidden"
      />

      <label
        onClick={props.onSelect}
        className="group cursor-pointer border-2 border-black rounded-lg
                  xs:w-[310px] xs:h-[80px] ml:w-[80px] ml:h-[400px] 
                  ml:peer-checked:w-[600px] 
                  flex-col items-center dark:border-white
                  xs:peer-checked:h-[200px] ml:peer-checked:h-[400px]
                  transition-all duration-500 overflow-hidden flex shadow-2xl 
                  xs:bg-[length:310px_200px] ml:bg-[length:600px_400px] bg-contain"
        style={{
          backgroundImage: `url(${props.img})`,
        }}
      />
    </div>
  );
}

export default Card;
