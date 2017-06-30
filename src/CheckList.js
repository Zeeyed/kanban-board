import React, { Component } from 'react';

class CheckList extends Component {
  render(){
    const tasks = this.props.tasks.map((task) => (
      <li className="checklist__task" 
      key={ task.id }>
        <input type="checkbox" defaultChecked={ task.done } />
        { task.name }
        <a href="#" className="checklist__task--remove"></a>
      </li>
    ));

    const styleForm = {
      border: '1px dashed #bbb',
      width: '100%',
      padding: '10px',
      marginTop: '5px',
      borderRadius: '3px',
    }

    return(
      <div>
        <ul>{ tasks }</ul>
        <input type="text"
          className="checklist--add-task"
          placeholder="Type then hit Enter to add a task"/>
      </div>
    );
  }
}
export default CheckList;