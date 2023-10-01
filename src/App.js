import './App.css';
import { Routes, Route } from 'react-router-dom'
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import HomeComponent from './Pages/HomePage';
import { useState } from 'react';
//HOC Layout
import BaseHoc from './hoc/BaseHoc';


function App() {

  const [name, setName] = useState("Kailas");
  const Company = "devTown";

  return (
    // <div className="App" >
    //   <h1>Class Component</h1>
    //   <ClassComponent /><br />
    //   <h1>Functional Component</h1>
    //   <FunctionalComponent name={name} age={23} Intern={Company} changeName={setName} />
    // </div> //since we are using routes in this page we dont need this for now

    <Routes>
      <Route path="/" element={<ClassComponent />} />
      <Route path='/functionalComponent' element={<FunctionalComponent name={name} age={23} Intern={Company} changeName={setName} />} />
      <Route path="/Home" element={<HomeComponent />} />
    </Routes>
  );
}

export default App;
