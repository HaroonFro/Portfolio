import React from "react"
import WorkItem from "./WorkItem"


const data = [
    {
        year: 2021,
        duration: '6 years',
        company: "Laghman LLC/Nicko LLC",
        title: "CEO/Owner Operator",
        details: "Developed and implemented sales and marketing strategies to increase brand awareness and sales for the business, Conducted regular meetings with staff members to ensure successful daily operations, Reviewed customer feedback surveys and worked with employees to improve customer service standards.",
    },
    {
        year: 2015,
        duration: '2 years',
        company: "Rite Aid Pharmacy",
        title: "Pharmacy Technician",
        details: "Maintained daily inventory of pharmaceuticals and ensured proper storage conditions, prepared controlled medications for dispensing by counting, pouring, labeling, and verifying doses, performed data entry for patient profiles, billing information and prescription orders into the pharmacy software system."
    },
]
const Work = () => {
    return (
        <div id="work" className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} duration={item.duration} company={item.company} title={item.title} details={item.details} />
            ) )}
        </div>
    )
}

export default Work