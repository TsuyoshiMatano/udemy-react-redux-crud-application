import React from "react"; 
import PropTypes from 'prop-types';


const App = () => {
  const profiles = [
    {name: "Taro",age:10},
    {name: "Hanako",age:25},
    {name:"noAge", age:20},
  ]
  return(
    <div>
      {
        profiles.map ((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi!! I am {props.name},and {props.age} years old!</div>
}

User.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}
export default App;