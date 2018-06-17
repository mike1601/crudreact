import React, { Component } from 'react';
import RenderRem from '../reminder-events/RenderRem';

 class Reminder extends Component {
 
  deleteProject(id){
    this.props.onDelete(id);
  }
  
  render() {
    let projectItems;
  if(this.props.projects){
    projectItems=this.props.projects.map(project =>{
          return(
        <RenderRem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
      );


    });
  }

    // console.log(this.props);
    return (
      <div className="Prop">
      
      {projectItems}
        
      </div>
    );
  }
}


export default Reminder ;
