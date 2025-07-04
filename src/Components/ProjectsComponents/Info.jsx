import React from 'react';
import wwwImg from '../../Images/projects/www.png';
import githubImg from '../../Images/projects/github.png';

function Info(props) {
  return (
    <div className="ml:w-[600px] w-[80%] h-auto border-[1px] rounded-md mt-10 relative">
      <h1 className="font-bold text-center text-2xl mt-2 font-calSans tracking-wider">
        {props.title}
      </h1>
      <p className="text-center max-w-[90%] mt-4 mx-auto font-adlam">
        {props.description}
      </p>
      <div className="flex w-full gap-4 justify-center mt-4 mb-4">
        <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
          <img
            src={wwwImg}
            alt="Live project link"
            className="w-20 h-20 object-contain cursor-pointer dark:bg-amber-50 rounded-full dark:border-[#B8860B] dark:border-4"
          />
        </a>
        <a href={props.gitProject} target="_blank" rel="noopener noreferrer">
          <img
            src={githubImg}
            alt="GitHub link"
            className="w-20 h-20 object-contain cursor-pointer dark:bg-amber-50 rounded-full dark:border-[#B8860B] dark:border-4"
          />
        </a>
      </div>
    </div>
  );
}

export default Info;
