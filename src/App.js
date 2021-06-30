import React from 'react';
import './App.css';
import DatePicker from "./components/DatePicker";

function App() {
    const selectedDay = (val) =>{
        console.log(val)
    };

  return (
    <div className="App">
        <DatePicker 
        getSelectedDay={selectedDay} 
        labelFormat={"MMMM"} 
        color={"#a536a5"}/>
    </div>
  );
}

export default App;
