import React from 'react'
import Part from './Part'

export const Content = ({parts}) => {
  
    return (
        <div>
            <Part 
                name={parts.parts[0].name}
                exercises={parts.parts[0].exercises}
            />
            <Part 
                name={parts.parts[1].name}
                exercises={parts.parts[1].exercises}
            />
            <Part 
                name={parts.parts[2].name}
                exercises={parts.parts[2].exercises}
            />
        </div>
    )
}

export default Content