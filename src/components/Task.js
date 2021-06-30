import React from 'react';
import './Task.css'

class Task extends React.Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            category:'',
            description:''
        }
    }
    handleUsernameChange = (event) =>{
        this.setState({
            username:event.target.value
        })
    }
    handleCategoryChange = (event) =>{
        this.setState({
            category:event.target.value
        })
    }
    handleDescriptionChange = (event) =>{
        this.setState({
            description:event.target.value
        })
    }
    render() {
    return (
            <div>
            <h3>Create New Task</h3>
            <h5>Task Name</h5>
            <form>
                <div>
                <input
                type="text"
                className="clr"
                placeholder="Name"
                value={this.state.username}
                onChange={this.handleUsernameChange}
                /></div>
                <br />
               
             <div>
                <input
                type="text"
                className="clr"
                placeholder="Search Category"
                value={this.state.category}
                onChange={this.handleCategoryChange}/>
            </div><br />
            <button type="button" className="btn1">Development</button>
            <button type="button" className="btn1">Research</button>
            <button type="button" className="btn1">Design</button>
            <button type="button" className="btn1">Backend</button><br />
               
            <div>  
            <h5>Date</h5>
                <input
                type="text"
                className="clr"
                placeholder="dd/mm/yyyy"/>
            </div><br />
            <div>
                <select className="time">
                    <option>8:30</option>
                    <option>8:31</option>
                    <option>8:32</option>
                </select>
                <select className="time">
                    <option>8:30</option>
                    <option>8:31</option>
                    <option>8:32</option>
                </select>
            </div>
            <div>
              <button type="button" className="createtask">Create Task</button>
            </div>
           <h3>Description</h3>
            <textarea
            className="description"
            type="text"
            value={this.state.description}
            onChange={this.handleDescriptionChange}>
            </textarea>
            </form>  
        </div>
    );
}
}
export default Task
