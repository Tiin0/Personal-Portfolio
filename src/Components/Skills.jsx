
const mySkill = {
    'html' : {img: '', title: 'Html'},
    'css' : {img: '', title: 'Css'},
    'tailwindcss' : {img: '', title: 'Tailwind'},
    'javascript' : {img: '', title: 'Javascript'},          // Skills images and title
    'python' : {img: '', title: 'Python'},
    'react' : {img: '', title: 'React'},
    'nodeJs' : {img: '', title: 'Node Js'}
}

function Skills() {
    return (
        <div className="w-full h-auto mt-50"> {/*Wrapper*/}
            <div className="w-[80%] h-auto absolute left-1/2 -translate-x-1/2">
                <h1 data-aos='fade-down' className="font-extrabold text-6xl text-[#B8860B] text-center p-10">Skills</h1>
                <div className="flex flex-wrap w-full h-auto gap-4 justify-center"> {/* Skills Container*/} 
                    {Object.entries(mySkill).map(([key, element]) => (      
                        <div key={key} data-aos='fade-left' className="w-50 h-50 border border-black shadow-2xl flex items-center justify-center rounded-lg skills overflow-hidden">
                            <h2 className="text-xl font-semibold text-gray-700 z-1">{element.title}</h2>
                        </div>
                    ))} {/*Creates skills child element*/}

                </div>
            </div>
        </div>
    )
}

export default Skills;