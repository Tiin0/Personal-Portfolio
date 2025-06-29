import React,{useState, useEffect} from 'react';
import arrow from '../Images/navbar/downArrow.png';
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
        <div className='w-full min-h-[calc(100vh-80px)] flex justify-center overflow-hidden'> 
            <div data-aos="fade-up" className='lg:w-full h-auto flex flex-col justify-center items-center xs:w-[80%] sm:w-[90%]'>
                <h1 className="font-extrabold sm:text-7xl text-center tracking-wide xs:text-6xl">Hi!, my name is <strong className='text-[#B8860B]'>Tino</strong></h1>
                <p className='font-medium sm:text-2xl mt-6 text-center tracking-wide xs:text-xl'>I'm a {age} years old boy interested in learning new things with big ambition's</p>
                <div className='w-[60px] h-[60px] rounded-full dark:border-[#B8860B] border-2 dark:border-4 mt-20 cursor-pointer dark:bg-amber-50' onClick={() => {const section = document.querySelector('#about');section?.scrollIntoView({ behavior: 'smooth' });}}>
                    <img
                        src={arrow}
                            className='w-[60%] h-[60%] relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 animate-float'
                    />
                </div>
            </div>
        </div>
    )
}

export default Intro;