import React, { useState, useEffect } from 'react';
import characterCounterImg from '../Images/projects/character-counter.png';
import characterCounterDarkImg from '../Images/projects/dark-mode/character-counter-dark.png';
import wwwImg from '../Images/projects/www.png';
import githubImg from '../Images/projects/github.png';

const projects = {
  char_counter: {
    title: 'Character Counter',
    description:
      'This website allows you to input a word, phrase, or full dialogue to analyze the most frequently used words and provides an estimated reading time. Its fully responsive design ensures a perfect display on any device, from smartphones to desktops.',
    live_project: 'https://tiin0.github.io/Character-counter',
    github_link: 'https://github.com/tiin0/Character-counter',
    image: characterCounterImg,
    darkImg: characterCounterDarkImg
  },
  char_counter2: {
    title: 'Character Counter',
    description: 'This website allows you to input a word, phrase, or full dialogue to analyze the most frequently used words and provides an estimated reading time. Its fully responsive design ensures a perfect display on any device, from smartphones to desktops.',
    live_project: 'https://tiin0.github.io/Character-counter',
    github_link: 'https://github.com/tiin0/Character-counter',
    image: characterCounterImg,
    darkImg: characterCounterDarkImg
  },
  char_counter3: {
    title: 'Character Counter',
    description: 'This website allows you to input a word, phrase, or full dialogue to analyze the most frequently used words and provides an estimated reading time. Its fully responsive design ensures a perfect display on any device, from smartphones to desktops.',
    live_project: 'https://tiin0.github.io/Character-counter',
    github_link: 'https://github.com/tiin0/Character-counter',
    image: characterCounterImg,
    darkImg: characterCounterDarkImg
  },
};

function Projects() {
  const [title, setTitle] = useState(projects.char_counter.title);
  const [description, setDescription] = useState(projects.char_counter.description);
  const [liveLink, setLiveLink] = useState(projects.char_counter.live_project);
  const [gitProject, setGitProject] = useState(projects.char_counter.github_link);
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="projects" className="w-full h-auto mt-24 flex flex-col items-center">
      <h1
        data-aos="fade-down"
        className="text-6xl font-extrabold text-[#B8860B] text-center pt-10 pb-10"
      >
        Projects
      </h1>

      <div data-aos='fade-up' className="w-full h-auto flex xs:flex-wrap ml:flex-nowrap justify-center gap-6">
        {Object.entries(projects).map(([key, value], i) => {
          const imageUrl = isDark ? value.darkImg : value.image;

          return (
            <div key={key} className="flex xs:flex-col ml:flex-row xs:items-center h-auto xs:w-full ml:w-auto dark:shadow-lg">
              <input
                onClick={() => {
                  setTitle(value.title);
                  setDescription(value.description);
                  setLiveLink(value.live_project);
                  setGitProject(value.github_link);
                }}
                type="radio"
                id={`project-radio-${i}`}
                name="project-selection"
                className="peer hidden"
                defaultChecked={i === 0}
              />

              <label 
                htmlFor={`project-radio-${i}`}
                className="group cursor-pointer border-2 border-black rounded-lg
                          xs:w-[310px] xs:h-[80px] ml:w-[80px] ml:h-[400px] 
                          ml:peer-checked:w-[600px] 
                          flex-col items-center dark:border-white
                          xs:peer-checked:h-[200px] ml:peer-checked:h-[400px]
                          transition-all duration-500 overflow-hidden flex shadow-2xl 
                          xs:bg-[length:310px_200px] ml:bg-[length:600px_400px] bg-contain"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="ml:w-[600px] w-[80%] h-auto border-[1px] rounded-md mt-10 relative">
        <h1 className="font-bold text-center text-2xl mt-2">{title}</h1>
        <p className="text-center max-w-[90%] mt-4 mx-auto">{description}</p>
        <div className="flex w-full gap-4 justify-center mt-4 mb-4">
            <a href={liveLink} target="_blank" rel="noopener noreferrer overflow-hidden">
            <img
              src={wwwImg}
              alt="Live project link"
              className="w-20 h-20 object-contain cursor-pointer dark:bg-amber-50 rounded-full dark:border-[#B8860B] dark:border-4"
            />
          </a>
             <a href={gitProject} target="_blank" rel="noopener noreferrer">
            <img
              src={githubImg}
              alt="GitHub link"
              className="w-20 h-20 object-contain cursor-pointer dark:bg-amber-50 rounded-full dark:border-[#B8860B] dark:border-4"
            />
            </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;