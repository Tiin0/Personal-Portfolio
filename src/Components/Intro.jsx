import React,{useState, useEffect} from 'react';
import arrow from '../Images/downArrow.png';
import AOS from 'aos'; // Effect on scrool
import 'aos/dist/aos.css';

function Intro() {
    const [age,setAge] = useState();

    const getCurrentAge = () => {
        const year = 2008;
        const age = new Date().getFullYear() - year;
        setAge(age)
    }

    useEffect(() => {
        getCurrentAge();
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='w-full h-[100vh]'> {/*Wrapper*/}
            <div className='w-full h-full p-50'>
                <h1 data-aos="fade-up" className="font-extrabold text-7xl text-center tracking-wide">Hi!, my name is <strong className='text-[#B8860B]'>Tino</strong></h1>
                <p data-aos="fade-up" id='about' className='font-medium text-2xl mt-6 text-center tracking-wide'>I'm a {age} years old boy interested in learning new things with big ambition's</p>
                {/*Should redirect on About when clicked*/}
                <div data-aos="fade-up" className='w-[60px] h-[60px] rounded-full border-2 relative left-1/2 top-1/4 -translate-x-1/2 cursor-pointer'><img src={arrow} className='w-[60%] h-[60%] relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 animate-float'/></div>
            </div>
        </div>
    )
}

export default Intro;