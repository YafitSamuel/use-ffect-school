import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import NavBar from "./Components/NavBar/NavBar.component";
import Pupil from "./Components/Pupil/Pupil.component";
import Teacher from "./Components/Teacher/Teacher.component";
import HomePage from "./Components/Home Page/HomePage.component";
import Parent from "./Components/Parent/Parent.component";


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
         <NavBar/>
         <Routing /> 
      </BrowserRouter> */}
      <Pupil/>
      <Teacher/>
      <HomePage/>
      <Parent/>
    </div>
  );
}
export default App;
