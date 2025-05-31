import React from "react";
import {FaArrowDown} from "react-icons/fa";
import img from "../Assets/profile2.png";
import Timeline from "./common/timeline";
import MobileTimeline from "./common/mobileTimeline";
import { events } from "./data/data.ts";
import CarouselR from "./common/CarouselRight.js";
import { skills } from "./data/data.ts";

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
            <h1 className="mt-5 py-3 text-2xl font-black md:text-3xl">Welcome to the journey of...</h1>

            <h2 className="text-6xl text-blue-500 uppercase font-black wave z-10 md:text-7xl">
                <span className="text-8xl md:text-9xl">E</span>
                <span>V</span>
                <span>A</span>
                <span>N</span>
                <span className="text-8xl md:text-9xl">L</span>
                <span>I</span>
                <span>U</span>
            </h2>
            
            <div className="mt-5"></div>

            <p className="max-w-3xl font-black text-lg dark:text-gray-300 md:text-xl">
                Hello! So glad you are here! I am a Junior studying Computer Science at Boston University. 
                I love the nitty-gritty aspects of programing and enjoy getting down and dirty in low level projects. {" "}
                
                <a href="/about" className="font-medium dark:text-blue-500 hover:dark:text-blue-700">Currently...</a>
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

            <div className="mt-5 down-arrow"> 
                <FaArrowDown className="text-gray-400 animate-bounce text-2xl"/>
            </div>

            <div className="mt-5"></div>

            <div className="py-20 px-10 hidden lg:block">
                <h3 className="text-2xl font-black text-blue-400 text-left text-secondary">My Experience</h3>
                <div className="py-4"></div>

                <Timeline events={events}/>
            </div>

            {/* Mobile timeline */}
            <div className="w-full max-w-screen-lg mx-auto py-20 px-4 lg:hidden">
                <h3 className="text-2xl font-black text-blue-400 text-left text-secondary">The Experience</h3>
                <div className="py-6 px-2">
                    <MobileTimeline events={events}/>
                </div>
            </div>

            {/* Skills Carousel */}
            <div className="w-full max-w-screen-lg mx-auto px-4">
                <h3 className="text-2xl font-black text-blue-400 text-left text-secondary">The Skills</h3>
                <main1 className="flex justify-center items-center bg-transparent py-8">
                    <CarouselR skills={skills} />
                </main1>
                {/* <main className="flex justify-center items-center bg-transparent py-4">
                    <CarouselR skills={skills} />
                </main> */}
            </div>

            <div className="mt-5"></div>

            <h1 className="mt-5 py-3 text-2xl font-black md:text-3xl">...See you later! </h1>
        </section>
    );
};

export default Home;
