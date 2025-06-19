import characterCounterImg from '../Images/projects/character-counter.png';
import wwwImg from '../Images/projects/www.png';
import githubImg from '../Images/projects/github.png';

{/* Done projects */}

const projects = {
  char_counter : {
    title : 'Character counter',
    description : 'This website allows you to input a word, phrase, or full dialogue to analyze the most frequently used words and provides an estimated reading time. Its fully responsive design ensures a perfect display on any device, from smartphones to desktops.',
    live_project : 'https://tiin0.github.io/Character-counter',
    github_link : 'https://github.com/tiin0/Character-counter'
  },
  char_counter2 : {
    title : 'Character counter',
    description : 'This website allows you to input a word, phrase, or full dialogue to analyze the most frequently used words and provides an estimated reading time. Its fully responsive design ensures a perfect display on any device, from smartphones to desktops.',
    live_project : 'https://tiin0.github.io/Character-counter',
    github_link : 'https://github.com/tiin0/Character-counter'
  }
}

function Projects() {                                                                           
  return (
    <div id='projects' className="w-full h-auto mt-50 flex flex-col items-center">
      <h1 data-aos='fade-up' className="text-6xl font-extrabold text-[#B8860B] text-center pt-10 pb-10">
        Projects
      </h1>

      <div className="flex-1 flex justify-around gap-10 w-full flex-wrap">
        {/* Loop over projects and create element for it */}
        {Object.entries(projects).map(([key,value]) => ( 
             <div key={key} data-aos='fade-up' className="relative border-black border-2 max-w-[500px] min-h-[65vh] justify-self-center rounded-lg flex flex-col items-center pt-4 pb-30"> {/* Aggiunta padding-bottom */}
          <img src={characterCounterImg} className="rounded-t-lg border-b-4 w-full" />
          
          <h1 className='text-2xl text-center mt-4 font-bold'>{value.title}</h1>
          
          <p className='text-center max-w-[90%] mt-4'>
            {value.description}
          </p>

          <div className='absolute bottom-4 flex gap-10'>
            <a href={value.live_project} target="_blank" rel="noopener noreferrer">
              <img src={wwwImg} className='w-30 h-30 object-contain cursor-pointer' />
            </a>
            <a href={value.github_link} target="_blank" rel="noopener noreferrer">
              <img src={githubImg} className='w-30 h-30 object-contain cursor-pointer' />
            </a>
          </div>
        </div>
          ))}
      </div>
    </div>
  );
}




export default Projects;