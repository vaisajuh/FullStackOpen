
const Header = ({ course }) => <h1 key={course.id}> {course.name} </h1>

const Total = ({ parts }) => {
  const total = parts.parts.reduce(function (sum, part) {
    return sum + part.exercises
  },0)

  return <p key={parts.ids}>Number of exercises {total}</p>
}

const Part = ({ part }) => 
    part.parts.map(part =>
      <p key={part.id}> 
        {part.name} {part.exercises}
      </p>
    )
 
const Content = ({ part }) =>
    part.map(part =>
      <>
      <Header course={part} />
      <Part part={part} />
      <Total parts={part} />
      </>
    )
  
const Course = ({ course }) =>
    <>
    <Content part={course} />   
    </>

export default Course
