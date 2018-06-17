import React, { Component } from 'react';
// import MuiThemeProvider from '@material-ui/core/s';
import './App.css';

import NavBar from './Components/nav-bar/NavBar';
import InputForm from './Components/InputForm/InputForm';
import Reminder from './Components/reminder-events/Reminder';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects: []
      
    }
  }

  handleAddProjrect(project){
    // console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});

  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x=> x.id === id );
    projects.splice(index,1);
    this.setState({projects:projects});

  }
  render() {
    return (
      <div className="App container">
        <NavBar />
        <InputForm addProject={this.handleAddProjrect.bind(this)}/>
        
        <div className="tiles">
        <Reminder projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
