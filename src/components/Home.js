import React from "react";
import {FaArrowDown} from "react-icons/fa";
import img from "../Assets/profile2.png";

const Home = () => {
    window.addEventListener('scroll', function () {
        const downArrow = document.querySelector('.down-arrow');
        if (downArrow) {
            if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
            else downArrow.classList.remove("hide-down-arrow");
        }
    });

    // const spans = document.querySelectorAll('.wave span');
    // function triggerWave() {
    //     spans.forEach(span => span.classList.add('animate'));
    //     setTimeout(() => {
    //         spans.forEach(span => span.classList.remove('animate'));
    //     }, 1500); // Animation duration + delay
    //     setTimeout(triggerWave, 4000); // Wait before restarting
    // }
    // triggerWave();

    return (
        <section className="min-h-screen flex flex-col justify-start items-center p-2 text-center">
            <h1 className="mt-5 py-3 text-3xl font-black">Welcome to the journey of...</h1>

            <h2 className="text-7xl text-blue-500 uppercase font-black wave z-10">
                <span className="text-9xl">E</span>
                <span>V</span>
                <span>A</span>
                <span>N</span>
                <span className="text-9xl">L</span>
                <span>I</span>
                <span>U</span>
            </h2>
            
            <div className="mt-5"></div>

            <p className="max-w-3xl font-black text-xl dark:text-gray-300">
                Hello! So glad you are here! I am a Junior studying Computer Science at Boston University. 
                I love the nitty-gritty aspects of programing and enjoy getting down and dirty in low level projects. {" "}
                
                <a href="/about" class="font-medium dark:text-blue-500 hover:dark:text-blue-700">Currently...</a>
            </p>

            <div className="mt-7"></div>

            <div className="flex justify-center">
                <div 
                    className="w-60 h-60 md:w-72 md:h-72 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500"
                >
                    {
                    <img 
                        src={img} 
                        alt="Evan Liu" 
                        className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-xl scale" 
                    />
                    }
                </div>
            </div>

            <div className="mt-5"></div>

            {/* <Link
                to="/about" 
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-black text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                <span className="inline-flex items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    About me
                    <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </span>
            </Link> */}

            <div className="mt-5 down-arrow"> 
                <FaArrowDown className="text-gray-400 animate-bounce text-2xl"/>
            </div>
        </section>
    );
};

export default Home;
