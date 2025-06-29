function About() {
    return (
        <div className="w-full h-auto flex flex-col items-center" id='about'> {/* Wrapper */}
            <div className="xs:w-[80%] lg:w-full h-full mt-25"> {/* w-full declaration */}
                  <h1 data-aos="fade-down" className="font-extrabold text-6xl text-[#B8860B] text-center">About</h1>
                  <p data-aos="fade-up" className="text-center max-w-2xl mx-auto mt-10 font-semibold xs:text-xl sm:text-2xl">
                    I'm Tino from Italy. I've always been fascinated by code since the first time I saw it. I started writing HTML and CSS, then moved on to JavaScript. Now I'm learning React — this site was built with it — and I'm working towards becoming a full-stack developer. It's still a long journey, but I'm always ready for anything!<br/>
                  </p>
            </div>
        </div>
    )

}


export default About;