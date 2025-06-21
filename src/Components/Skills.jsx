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
    <div className="w-full h-auto mt-[50px] flex flex-col items-center">
      <div className="xs:w-[90%] sm:w-[80%] h-auto">
        <h1 data-aos="fade-down" className="font-extrabold text-6xl text-[#B8860B] text-center p-10">
          Skills
        </h1>
        <div id="skills" className="flex flex-wrap w-full h-auto gap-4 justify-center">
          {Object.entries(mySkill).map(([key, element]) => (
            <div
              key={key}
              data-aos="fade-left"
              className="lg:w-50 lg:h-50 xs:w-45 xs:h-45 border border-black shadow-2xl flex flex-col items-center justify-center rounded-lg skills overflow-hidden"
            >
              <div className="w-[40%] h-[40%] z-1">
                <img src={element.img} className="w-full h-full object-fit" />
              </div>
              <h2 className="text-xl font-semibold text-gray-700 z-1 mt-7">{element.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
