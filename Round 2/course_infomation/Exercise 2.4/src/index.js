import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {

  return(
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {

  return(
    <div>
      {props.parts.map(item => 
        <Part part={item.name} exercises={item.exercises}/>
        )}
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.sum}</p>
    </div>
  )
}



const Course = ({course}) => {
  return(
    <>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total sum={course.parts.reduce((total, part) => total + part.exercises, 0)} />
    </>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return(
    courses.map( course1 =>
    <Course course={course1} />)
  ) 
}



ReactDOM.render(<App />, document.getElementById('root'))