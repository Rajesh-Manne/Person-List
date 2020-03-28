import React from 'react';
// import logo from './logo.svg';
 import './App.css';

function App() {
  return (
    <div className="App">
      <PersonList />
    </div>
  );
}

function PersonList(){
   const people = [
     {img:30,name:"bob",job:"painter"},
     {img:15,name:"john",job:"Artist"},
     {img:35,name:"watson",job:"cricketer"}
   ]
return(
    <section>
    <Person  person1={people[0]}/>
    <Person  person1={people[1]}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </Person>
    <Person  person1={people[2]}/>
    </section>
  )
}

function Person(props){
  const{img,name,job}= props.person1
  const{children}=props
const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return(
    <div className="person">
      <img src={url} alt="person" />
    <div>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
    </div>
  )
}
export default App;
