import {FaLinkedin, FaGithub, FaFileAlt, FaArrowDown} from "react-icons/fa";
// import img from "../Assets/profile.jpg";

const Home = () => {
    window.addEventListener('scroll', function () {
        const downArrow = document.querySelector('.down-arrow');
        if (downArrow) {
            if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
            else downArrow.classList.remove("hide-down-arrow");
        }
    });

    return (
        <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
            <h2 className="py-3 text-2xl font-black">Welcome to the journey of...</h2>
            <h3 className="text-5xl text-blue-500 uppercase font-black">Evan Liu</h3>
            <p className="max-w-xl font-light dark:text-gray-300">
                Hello! Welcome to my website! I'm passionate about creating elegant solutions through code.
                Currently, I'm focusing on full-stack web development and AI applications.
                When I'm not coding, you can find me exploring new technologies or enjoying outdoor activities.
            </p>

            <div className="py-4"></div>

            <div>
                {/* Replace with your actual image */}
                <div 
                    className="w-60 h-60 md:w-72 md:h-72 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500"
                >
                    Profile Image
                    {/* Once you have an image:
                    <img 
                        src={img} 
                        alt="Evan Liu" 
                        className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-xl" 
                    />
                    */}
                </div>
            </div>

            <div className="mt-5 down-arrow"> 
                <FaArrowDown className="text-gray-400 animate-bounce text-2xl"/>
            </div>
        </section>
    );
};

export default Home;
