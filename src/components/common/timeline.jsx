import React, { Fragment } from "react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "backOut"
    }
  }
};

const circleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "backOut"
    }
  }
};

const pillarVariants = {
  hidden: { opacity: 0, scaleY: 0, originY: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.75,
      ease: "backOut"
    }
  }
};

const Timeline = ({events}) => {
    return (
        <motion.div 
            className="flex flex-col gap-y-4 md:gap-y-8 w-full my-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        > 
            <Circle />
            {
                events.map((event,key) => {
                    return (
                    <Fragment key={key}>
                        <motion.div 
                            className="grid grid-cols-[1fr_auto_1fr] gap-x-8 items-center mx-auto"
                            variants={itemVariants}
                        >
                            {event.direction === 'left' ? (
                                <EventCard title={event.title} company={event.company} description={event.description} arrowDirection="right"/>
                            ) : (
                                <motion.div 
                                    className="text-right text-slate-300 text-md md:text-lg font-bold text-gray-300"
                                    variants={itemVariants}
                                >
                                    {event.date}
                                </motion.div>
                            )
                            }

                            <Pillar />

                            {event.direction === 'right' ? (
                                <EventCard title={event.title} company={event.company} description={event.description} arrowDirection="left"/>
                            ) : (
                                <motion.div 
                                    className="text-left text-slate-300 text-md md:text-lg font-bold text-gray-300"
                                    variants={itemVariants}
                                >
                                    {event.date}
                                </motion.div>
                            )
                            }
                        </motion.div>

                        {key < (events.length - 1) && <Circle />}
                    </Fragment>
                    )
                })
            }
            <Circle />
        </motion.div>
    )
}

const Circle = () => {
    return (
        <motion.div 
            className="bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full w-4 h-4 mx-auto"
            variants={circleVariants}
        >
        </motion.div>
    )
}

const Pillar = () => {
    return (
        <motion.div 
            className="bg-gradient-to-b from-blue-500 to-indigo-500 rounded-t-full rounded-b-full w-2 h-28 mx-auto"
            variants={pillarVariants}
        >
        </motion.div>
    )
}

const EventCard = ({title, company, description, arrowDirection}) => {
    return (
        <motion.div 
            className={`relative bg-gray-700 border-b-4 
            flex flex-col gap-y-2 shadow-md rounded-xl p-4 w-[150px] md:w-[450px]
            ${arrowDirection === 'left' ? 'arrow-right' : 'arrow-left'} `}
            variants={itemVariants}
            whileHover={{ 
                y: -4, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 } 
            }}
        >
            <div className="text-slate-200 font-black text-lg md:text-2xl">
                {title}
            </div>

            <div className="font-black text-sky-400 text-sm md:text-lg">
                {company}
            </div>

            {/* <div className="text-slate-300 text-sm font-bold text-gray-300">
                {description}
            </div> */}
        </motion.div>
    )
}

export default Timeline;
