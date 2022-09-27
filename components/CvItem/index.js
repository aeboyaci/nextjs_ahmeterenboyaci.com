import React from 'react'

const EducationItem = ({title, subtitle, location, date, content}) => {
  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row md:justify-between flex-col">
        <div className="flex-col">
          <h3 className="text-md font-bold">{title}</h3>
          <p className="text-sm">{subtitle}</p>
        </div>
        <div className="flex md:flex-col md:items-end flex-row justify-between items-center">
          <p className="text-sm">{location}</p>
          <p className="text-xs">{date}</p>
        </div>
      </div>
      <p className="text-sm mt-1">
        {content}
      </p>
    </div>
  )
}

export default EducationItem