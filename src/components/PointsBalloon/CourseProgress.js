import React from "react"
import PartProgress from "./PartProgress"

const CourseProgress = ({ data, appliesForStudyRight }) => {
  return data && Object.entries(data).length === 0 ? (
    <div>
      Edistymisesi näkyy täällä kunhan olet tehnyt ensimmäisen tehtäväsi
    </div>
  ) : (
    <div>
      {Object.entries(data).map(([name, data]) => {
        return (
          <PartProgress
            appliesForStudyRight={appliesForStudyRight}
            name={name}
            data={data}
          />
        )
      })}
    </div>
  )
}

export default CourseProgress
