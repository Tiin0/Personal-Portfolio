import React, { useState, useEffect } from 'react';
import Card from './ProjectsComponents/Card';
import Info from './ProjectsComponents/Info';
import projects from '../data/projects';

function Projects() {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));
  const [selectedProject, setSelectedProject] = useState(0);

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

  // eslint-disable-next-line no-unused-vars
  const projectsArray = Object.entries(projects).map(([key, value]) => value);

  return (
    <div id="projects" className="w-full h-auto mt-50 flex flex-col items-center">
      <h1
        data-animation="fade-down"
        className="text-6xl font-extrabold text-[#B8860B] text-center pt-10 pb-10 font-calSans tracking-wider opacity-0"
      >
        Projects
      </h1>

      <div data-animation="fade-right" className="w-full h-auto flex xs:flex-wrap ml:flex-nowrap justify-center gap-6 opacity-0">
        {Object.entries(projects).map(([key, value], i) => {
          const imageUrl = isDark ? value.darkImg : value.image;
          return (
            <Card
              key={key}
              item={i}
              img={imageUrl}
              title={value.title}
              description={value.description}
              liveLink={value.live_project}
              gitProject={value.github_link}
              isSelected={selectedProject === i}
              onSelect={() => setSelectedProject(i)}
            />
          );
        })}
      </div>

      <Info
        title={projectsArray[selectedProject].title}
        description={projectsArray[selectedProject].description}
        liveLink={projectsArray[selectedProject].live_project}
        gitProject={projectsArray[selectedProject].github_link}
      />
    </div>
  );
}

export default Projects;
