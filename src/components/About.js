import Section from './common/Section';

function About() {
    const skills = [
        { category: "Frontend", items: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"] },
        { category: "Backend", items: ["Node.js", "Express", "Python", "MongoDB"] },
        { category: "Tools", items: ["Git", "Docker", "AWS", "VS Code"] },
        { category: "Soft Skills", items: ["Communication", "Problem Solving", "Teamwork", "Adaptability"] }
    ];

    return (
        <Section
            title="About Me"
            subtitle="Here's a bit more about my background and skills"
        >
            <div className="flex flex-col md:flex-row md:gap-10 items-center justify-center">
                {/* Professional Bio */}
                <div className="mb-10 md:mb-0 md:w-1/2 text-left">
                    <h3 className="text-2xl font-bold mb-5 text-blue-500">Professional Journey</h3>
                    <p className="mb-4 dark:text-gray-300">
                        I'm a passionate software developer with experience in building web applications and
                        exploring AI/ML technologies. My journey started with a curiosity about how things work,
                        which led me to dive deep into software engineering.
                    </p>
                    <p className="mb-4 dark:text-gray-300">
                        I've worked on projects ranging from small personal applications to more complex
                        systems involving multiple technologies. My goal is to create software that's not just
                        functional but also intuitive and enjoyable to use.
                    </p>
                    <p className="dark:text-gray-300">
                        When I'm not coding, I enjoy spending time out doors, such as skiing and backpacking, and I love to read Tolkien.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-5 text-blue-500">Skills & Expertise</h3>
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
            </div>
        </Section>
    );
}

export default About;
