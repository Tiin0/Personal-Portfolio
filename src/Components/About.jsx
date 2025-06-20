function About() {
    return (
        <div className="w-full h-auto flex flex-col items-center" id='about'> {/* Wrapper */}
            <div className="xs:w-[80%] lg:w-full h-full mt-25"> {/* w-full declaration */}
                  <h1 data-aos="fade-down" className="font-extrabold text-6xl text-[#B8860B] text-center">About</h1>
                  <p data-aos="fade-up" className="text-center max-w-2xl mx-auto mt-10 font-semibold xs:text-xl sm:text-2xl">
                    I'm Tino from Italy, i was always fashinated of code from the first time i've seen it. I started writing Html and css and passed to Javascript, now i am learning React - this site is also made with it - going on to become  a full stack developer, still a long path but always ready for everything! <br/>
                  </p>
            </div>
        </div>
    )

}


export default About;