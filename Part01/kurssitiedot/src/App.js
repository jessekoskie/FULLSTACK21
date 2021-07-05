import React from 'react'

const Header = ({course}) =>{
  return(
    <div>
      <p>{course.name}</p>
    </div>
  )
}

const Content = ({course})=>{
  let parts = course["parts"]
  const [part1, part2, part3] = parts

  return(
    <div>
      <p>
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
      </p>
    </div>
  )
}
const Part = ({ part, exercise }) => {
  return <p>{part} {exercise}</p>
}
const Total = ({ course }) =>{
  let total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return(
    <div>
      <p>
      Number of exercises {total}
      </p>
    </div>
  )
}


 
    const App = () => {

      const course ={
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }

      return (
        <div>
          <Header course={course} />
          <Content course = {course}/>
          <Total course= {course}/>
          </div>
      )
}

export default App