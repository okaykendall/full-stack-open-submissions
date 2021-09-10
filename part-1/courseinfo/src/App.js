import React from 'react'

const Header = ({course}) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Part = ({name, exercises}) => {
  return(
    <div>
        <p>{name} {exercises}</p>
    </div>
  )
}

const Content  = ({parts}) => {
  return(
    <div>
      {
        parts.map(part => (
          <Part name={part.name} exercises={part.exercises} />
        ))
      }
    </div>
  )
} 


const Total = ({parts}) => {


  const exercise = parts.map(part => (part.exercises))
  const reducer = (previousValue, currentValue) => previousValue + currentValue
  const all = (exercise.reduce(reducer))

  return (
    <div>
      <p>Number of exercises: {all}</p>
    </div>
  )
}

const App = () => {
  const course = {
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
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
