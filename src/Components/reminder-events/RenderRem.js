import React, { Component } from 'react';


class RenderRem extends Component {

    deleteProject(id){
        // console.log('test');
        this.props.onDelete(id);
    }
  render() {

    console.log(this.props);
    return (
      <div className="Project">
     
     <h3>{this.props.project.event} </h3> 

     
     <h3> {this.props.project.date} </h3>
      
      
      
     
      <h2>LOCATION: {this.props.project.location}</h2>   

      <h3>Description: {this.props.project.comment}</h3>
      <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete </a>
        
      </div>
    );
  }
}



export default RenderRem;