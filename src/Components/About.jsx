function About() {
    return (
        <div className="w-full h-auto flex flex-col items-center" id='about'> 
            <div className="xs:w-[80%] lg:w-full h-full mt-25">
                  <h1 data-animation="fade-down" className="font-extrabold text-6xl text-[#B8860B] text-center font-calSans tracking-wider opacity-0">About</h1>
                  <p data-animation="fade-up" className="text-center max-w-2xl mx-auto mt-10 font-semibold xs:text-xl sm:text-2xl font-adlam opacity-0">
                    I'm Tino from Italy. I've always been fascinated by code since the first time I saw it. I started writing HTML and CSS, then moved on to JavaScript. Always learning something new and I'm working towards becoming a full-stack developer. It's still a long journey, but I'm always ready for anything!<br/>
                  </p>
            </div>
        </div>
    )

}


export default About;