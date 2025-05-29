import Section from './common/Section';
import ImageShuffler from './common/imageShuffler';

function About() {
    const skills = [
        { category: "Frontend", items: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"] },
        { category: "Backend", items: ["Flask", "Firebase", "Python", "MongoDB"] },
        { category: "Tools", items: ["Git", "Docker", "Google Cloud Run", "VS Code"] },
        { category: "Soft Skills", items: ["Communication", "Problem Solving", "Teamwork", "Adaptability"] }
    ];

    return (
        <Section
            title="About Me"
            // subtitle="Here's a bit more about my background and skills"
        >
            <div className="mt-10"></div>

            <div className="w-full max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row md:gap-10 items-center justify-center">
                {/* Professional Bio */}
                <div className="mb-10 md:mb-0 md:w-1/2 text-left">
                    <h3 className="text-2xl font-black mb-5 text-blue-500 text-left text-secondary">Who Am I?</h3>
                    <p className="max-w-xl font-black dark:text-gray-300">
                        Hello! So glad you are here! I am currently a Junior studying Computer Science with a minor in Economics at Boston University. 
                        I love the nitty-gritty aspects of programing and enjoy getting down and dirty in low level projects. 
                        Currently, I'm focusing on a startup that aims to cure all time management problems by giving each student a proactive personal assistant.
                        When I'm not coding, you can find me on the slopes of the Cascade Mountains or in the water at the local pool.
                    </p>
                </div>
                <div className="flex flex-col gap-4 md:w-1/2 items-center">
                    <ImageShuffler />
                </div>
            </div>

            <div className="mt-10"></div>

            {/* Skills Grid */}
            <div className="w-full max-w-screen-lg mx-auto px-4"> {/* sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-left */}
                <h3 className="text-2xl font-black mb-5 text-blue-500 text-left text-secondary">Skills & Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
                            <h4 className="font-bold mb-2">{skillGroup.category}</h4>
                            <ul className="list-disc pl-5">
                                {skillGroup.items.map((skill, idx) => (
                                    <li key={idx} className="dark:text-gray-300">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default About;
