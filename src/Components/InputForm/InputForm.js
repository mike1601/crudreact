import React, { Component } from 'react';
import uuid from 'uuid';

class InputForm extends Component {
    constructor(){
        super();
        this.state = {

            newProject:{}

        
        }
    }
    handleSubmit(e){

        console.log(this.ref)
        if(this.refs.event.value === ''){
            alert('title is required');
        }
        else{
            this.setState({newProject:{
                id: uuid.v4(),
                event: this.refs.event.value,
                location: this.refs.loc.value,
                date: this.refs.gdate.value,
                comment: this.refs.comment.value

            }},function(){
                // console.log(this.state);
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
      }



  render() {
    return (
      <div className="input">
        <form onSubmit={this.handleSubmit.bind(this)}>
        
         <label >ENTER THE EVENT</label>
      <input type="text" ref="event" />

       <label >ENTER THE LOCATION</label>
      <input type="text" ref="loc" />

        <label >ENTER DATE</label>
      <input type="date" ref="gdate"/>
      
      <label >ENTER A COMMENT</label>
      <input type="text" ref="comment" />
      
      <input type="submit" value="ADD" />
      </form>




        
      </div>
    )
  }
}

export default InputForm;