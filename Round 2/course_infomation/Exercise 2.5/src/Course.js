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

export default Course