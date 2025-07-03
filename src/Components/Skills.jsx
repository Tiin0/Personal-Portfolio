
import cssImg from '../Images/skills/css.png';
import htmlImg from '../Images/skills/html.png';
import jsImg from '../Images/skills/js.png';
import nodeImg from '../Images/skills/nodejs.png';
import pythonImg from '../Images/skills/python.png';
import reactImg from '../Images/skills/react.png';
import tailwindImg from '../Images/skills/tailwind.png';

const mySkill = {
  html: { img: htmlImg, title: 'Html' },
  css: { img: cssImg, title: 'Css' },
  javascript: { img: jsImg, title: 'Javascript' },
  tailwindcss: { img: tailwindImg, title: 'Tailwind' },
  python: { img: pythonImg, title: 'Python' },
  react: { img: reactImg, title: 'React' },
  nodeJs: { img: nodeImg, title: 'Node Js' }
};

function Skills() {

  return (
    <div className="w-full h-auto mt-50 flex flex-col items-center">
      <div className="xs:w-[90%] sm:w-[80%] h-auto">
        <h1 data-aos="fade-down" className="font-extrabold text-6xl text-[#B8860B] text-center p-10 font-calSans tracking-wider">
          Skills
        </h1>
        <div id="skills" className="flex flex-wrap w-full h-auto gap-4 justify-center">
          {Object.entries(mySkill).map(([key, element]) => ( // creates skill container 
            <div
              key={key}
              data-aos="fade-left"
              className="group relative lg:w-50 lg:h-50 xs:w-45 xs:h-45 border border-black dark:border-white shadow-2xl flex items-center justify-center rounded-lg overflow-hidden bg-white dark:bg-[#2c2c2c]"
            >
            <div className="w-[40%] h-[40%] z-10 transition-transform duration-300 group-hover:-translate-y-5">
              <img src={element.img} className="w-full h-full object-contain" />
            </div>
            <h2 className="absolute bottom-6 text-xl font-semibold text-gray-700 dark:text-white opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-adlam">
              {element.title}
            </h2>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
