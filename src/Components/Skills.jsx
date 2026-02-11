import Card from '../Components/SkillsComponents/Card';
import mySkill from '../data/skills';

function Skills() {

  return (
    <div className="w-full h-auto mt-50 flex flex-col items-center">
      <div className="xs:w-[90%] sm:w-[80%] h-auto">
        <h1 data-animation="fade-down" className="font-extrabold text-6xl text-[#B8860B] text-center p-10 font-calSans tracking-wider opacity-0">
          Skills
        </h1>
        <div id="skills" className="flex flex-wrap w-full h-auto gap-4 justify-center">
          {Object.entries(mySkill).map(([key, element]) => (
            <Card key={key} title={element.title} img={element.img}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
