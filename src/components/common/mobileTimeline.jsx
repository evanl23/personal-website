import React, { Fragment } from "react";

const MobileTimeline = ({events}) => {
    return (
        <div className="flex flex-col w-full my-4 pl-4 space-y-4"> 
            <Circle />
            {
                events.map((event,key) => {
                    return (
                    <Fragment key={key}>
                        <div className="grid grid-cols-[auto_1fr] gap-x-4 items-center">
                            <Pillar />
                            <EventCard title={event.title} company={event.company} description={event.description} date={event.date} arrowDirection="left"/>
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
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-4 h-4 ml-1">

        </div>
    )
}

const Pillar = () => {
    return (
        <div className="bg-gradient-to-b from-blue-500 to-indigo-500 rounded-t-full rounded-b-full w-2 h-24 ml-[0.375rem]">

        </div>
    )
}

const EventCard = ({title, company, date, arrowDirection}) => {
    return (
        <div className={`transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl bg-gray-700 border-b-4 
        flex flex-col gap-y-2 shadow-md rounded-xl p-4 w-full
        ${arrowDirection === 'left' ? 'arrow-right' : 'arrow-left'} `}>
            <div className="text-slate-200 font-black text-md md:text-2xl">
                {title}
            </div>

            <div className="font-black text-sky-400 text-sm md:text-lg">
                {company}
            </div>

            <div className="text-slate-300 text-sm md:text-lg font-bold text-gray-300">
                {date}
            </div>
        </div>
    )
}

export default MobileTimeline;