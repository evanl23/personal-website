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
            <h1 className="py-3 text-2xl font-black">Welcome to the journey of...</h1>

            <h2 className="text-6xl text-blue-500 uppercase font-black wave z-10">
                <span className="text-8xl">E</span>
                <span>V</span>
                <span>A</span>
                <span>N</span>
                <span className="text-8xl">L</span>
                <span>I</span>
                <span>U</span>
            </h2>
            
            <div className="mt-5"></div>

            <p className="max-w-xl font-black dark:text-gray-300">
                Hello! So glad you are here! I am currently a Junior studying Computer Science with a minor in Economics at Boston University. 
                I love the nitty-gritty aspects of programing and enjoy getting down and dirty in low level projects. 
                Currently, I'm focusing on a startup that aims to cure all time management problems by giving each student a roactive personal assistant.
                When I'm not coding, you can find me on the slopes of the Cascade Mountains.
            </p>

            <div className="mt-8"></div>

            <div>
                {/* Replace with your actual image */}
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

            <div className="mt-8 down-arrow"> 
                <FaArrowDown className="text-gray-400 animate-bounce text-2xl"/>
            </div>
        </section>
    );
};

export default Home;
