import React from "react";
import {Routes,Route }from "react-router-dom"
import HomePage from "./Components/Home Page/HomePage.component";
import Teacher from "./Components/Teacher/Teacher.component";
import Pupil from "./Components/Pupil/Pupil.component"
import Parent from"./Components/Parent/Parent.component"



const Routing  =() => {
    return(
    <Routes>
       <Route exact path="/" element={<HomePage/>}/>
       <Route path="/Teacher" element={<Teacher/>}/>
       <Route path="/Pupil" element={<Pupil/>}/>
       <Route path="/Parent" element={<Parent/>}/>
    </Routes> 
    )
  };

  export default Routing;
