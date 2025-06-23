import React, {useState} from 'react';
import characterCounterImg from '../Images/projects/character-counter.png';
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
  },
  char_counter2: {
    title: 'Character Counter',
    description: 'This website allows you to input a word, phrase, or full dialogue to analyze the most frequently used words and provides an estimated reading time. Its fully responsive design ensures a perfect display on any device, from smartphones to desktops.',
    live_project: 'https://tiin0.github.io/Character-counter',
    github_link: 'https://github.com/tiin0/Character-counter',
    image: characterCounterImg,
  },
  char_counter3: {
    title: 'Character Counter',
    description: 'This website allows you to input a word, phrase, or full dialogue to analyze the most frequently used words and provides an estimated reading time. Its fully responsive design ensures a perfect display on any device, from smartphones to desktops.',
    live_project: 'https://tiin0.github.io/Character-counter',
    github_link: 'https://github.com/tiin0/Character-counter',
    image: characterCounterImg,
  },
}

function Projects() {
  const [title, setTitle] = useState('Character Counter');
  const [description, setDescription] = useState('This website allows you to input a word, phrase, or full dialogue to analyze the most frequently used words and provides an estimated reading time. Its fully responsive design ensures a perfect display on any device, from smartphones to desktops.');
  const [liveLink, setLiveLink] = useState('https://tiin0.github.io/Character-counter');
  const [gitProject, setGitProject] = useState('https://github.com/tiin0/Character-counter');

  return (
    <div id="projects" className="w-full h-auto mt-24 flex flex-col items-center">
      <h1
        data-aos="fade-down"
        className="text-6xl font-extrabold text-[#B8860B] text-center pt-10 pb-10"
      >
        Projects
      </h1>

      <div className="w-full h-auto flex items-center justify-center">
        {Object.entries(projects).map(([key, value], i) => (
          <div key={key} className="h-[400px] flex items-center justify-start flex-nowrap">

            <input
            onClick={() => {setTitle(value.title); setDescription(value.description); setLiveLink(value.live_project); setGitProject(value.github_link)}}
              type="radio"
              id={`project-radio-${i}`}
              name="project-selection"
              className="peer hidden"
              defaultChecked={i === 0}
            />

            <label
              htmlFor={`project-radio-${i}`}
              className="group cursor-pointer border border-black rounded-lg mr-10
                         w-[80px] h-[400px] peer-checked:w-[600px] flex-col items-center bg-cover bg-no-repeat
                         bg-white shadow-md transition-all duration-500 overflow-hidden flex 
                         "
              style={{backgroundImage: `url(${value.image})`, backgroundSize: '600px 400px'}}
            >
              
            </label>

          </div>
        ))}
      </div>
      <div className='w-[600px] h-[300px] border-[1px] rounded-md mt-10 relative'> {/*Title and description and ets...*/}
        <h1 className='font-bold text-center text-2xl mt-2'>{title}</h1>
        <p className='text-center max-w-[90%] mt-4 mx-auto'>{description}</p>
        <div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-10 mt-4'>
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <img src={wwwImg} alt="Live project link" className='w-30 h-30 object-contain cursor-pointer' />
              </a>
              <a href={gitProject} target="_blank" rel="noopener noreferrer">
                <img src={githubImg} alt="GitHub link" className='w-30 h-30 object-contain cursor-pointer' />
              </a>
            </div>
      </div>
    </div>
  );
}

export default Projects;
