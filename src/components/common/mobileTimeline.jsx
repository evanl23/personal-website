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
      ease: "easeOut"
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
      ease: "easeOut"
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
      ease: "easeOut"
    }
  }
};

const MobileTimeline = ({events}) => {
    return (
        <motion.div 
            className="flex flex-col w-full my-4 pl-4 space-y-4"
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
                            className="grid grid-cols-[auto_1fr] gap-x-4 items-center"
                            variants={itemVariants}
                        >
                            <Pillar />
                            <EventCard 
                                title={event.title} 
                                company={event.company} 
                                description={event.description} 
                                date={event.date} 
                                arrowDirection="left"
                            />
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
            className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-4 h-4 ml-1"
            variants={circleVariants}
        >
        </motion.div>
    )
}

const Pillar = () => {
    return (
        <motion.div 
            className="bg-gradient-to-b from-blue-500 to-indigo-500 rounded-t-full rounded-b-full w-2 h-24 ml-[0.375rem]"
            variants={pillarVariants}
        >
        </motion.div>
    )
}

const EventCard = ({title, company, date, arrowDirection}) => {
    return (
        <motion.div 
            className={`relative bg-gray-700 border-b-4 
            flex flex-col gap-y-2 shadow-md rounded-xl p-4 w-full
            ${arrowDirection === 'left' ? 'arrow-right' : 'arrow-left'} `}
            variants={itemVariants}
            whileHover={{ 
                y: -4, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 } 
            }}
        >
            <div className="text-slate-200 font-black text-md md:text-2xl">
                {title}
            </div>

            <div className="font-black text-sky-400 text-sm md:text-lg">
                {company}
            </div>

            <div className="text-slate-300 text-sm md:text-lg font-bold text-gray-300">
                {date}
            </div>
        </motion.div>
    )
}

export default MobileTimeline;
