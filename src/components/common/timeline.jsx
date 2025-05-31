import React, { Fragment } from "react";

const Timeline = ({events}) => {
    return (
        <div className="flex flex-col gap-y-4 md:gap-y-8 w-full my-4"> 
            <Circle />
            {
                events.map((event,key) => {
                    return (
                    <Fragment key={key}>
                        <div className="grid grid-cols-[1fr_auto_1fr] gap-x-8 items-center mx-auto">
                            {event.direction === 'left' ? (
                                <EventCard title={event.title} company={event.company} description={event.description} arrowDirection="right"/>
                            ) : (
                                <div className="text-right text-slate-300 text-md md:text-lg font-bold text-gray-300">{event.date}</div>
                            )
                            }

                            <Pillar />

                            {event.direction === 'right' ? (
                                <EventCard title={event.title} company={event.company} description={event.description} arrowDirection="left"/>
                            ) : (
                                <div className="text-left text-slate-300 text-md md:text-lg font-bold text-gray-300">{event.date}</div>
                            )
                            }
                        </div>

                        {key < (events.length - 1) && <Circle />}
                    </Fragment>
                    )
                })
            }
            <Circle />
        </div>
    )
}

const Circle = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-4 h-4 mx-auto">

        </div>
    )
}

const Pillar = () => {
    return (
        <div className="bg-gradient-to-b from-blue-500 to-indigo-500 rounded-t-full rounded-b-full w-2 h-28 mx-auto">

        </div>
    )
}

const EventCard = ({title, company, description, arrowDirection}) => {
    return (
        <div className={`transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl bg-gray-700 border-b-4 
        flex flex-col gap-y-2 shadow-md rounded-xl p-4 w-[150px] md:w-[450px]
        ${arrowDirection === 'left' ? 'arrow-right' : 'arrow-left'} `}>
            <div className="text-slate-200 font-black text-lg md:text-2xl">
                {title}
            </div>

            <div className="font-black text-sky-400 text-sm md:text-lg">
                {company}
            </div>

            {/* <div className="text-slate-300 text-sm font-bold text-gray-300">
                {description}
            </div> */}
        </div>
    )
}

export default Timeline;