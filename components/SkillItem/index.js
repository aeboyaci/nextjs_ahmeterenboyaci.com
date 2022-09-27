import React from 'react'

const SkillItem = ({skill, content}) => {
  return (
    <div className="flex md:flex-row md:space-x-12 flex-col md:mb-0 mb-2">
      <div className="w-56 flex md:flex-col text-end">
        <p className="font-bold">{skill}</p>
      </div>
      <div className="flex md:flex-col">
        <p className="text-justify">{content}</p>
      </div>
    </div>
  )
}

export default SkillItem