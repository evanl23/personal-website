import Section from './common/Section';
import ImageShuffler from './common/imageShuffler';
// import CarouselL from './common/CarouselLeft.js';
import CarouselR from './common/CarouselRight.js';
import { skills } from './data/data.ts';

function About() {

    return (
        <Section
            title="About Me"
            // subtitle="Here's a bit more about my background and skills"
        >
            <div className="mt-5"></div>

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

            <div className="mt-20"></div>

            {/* Skills Carousel */}
            <div className="w-full max-w-screen-lg mx-auto px-4">
                <h3 className="text-2xl font-black text-blue-500 text-left text-secondary">My Skills</h3>
                <main1 className="flex justify-center items-center bg-transparent py-8">
                    <CarouselR skills={skills} />
                </main1>
                {/* <main className="flex justify-center items-center bg-transparent py-4">
                    <CarouselR skills={skills} />
                </main> */}
            </div>
        </Section>
    );
}

export default About;
