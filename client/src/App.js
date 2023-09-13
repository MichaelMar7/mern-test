import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./Components/navbar.component";
import ExerciseList from "./Components/exerciselist.component";
import EditExercise from "./Components/editexercise.component";
import CreateExercise from "./Components/createexercise.component";
import CreateUser from "./Components/createuser.component";

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <br />
                <Routes>
                    <Route path="/" exact element={<ExerciseList/>} />
                    <Route path="/edit/:id" element={<EditExercise />} />
                    <Route path="/create" element={<CreateExercise />} />
                    <Route path="/user" element={<CreateUser />} />
                </Routes>
            </div>
        </Router>
    );
}


export default App;
