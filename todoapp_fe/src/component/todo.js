import React from 'react'
import '../css/todoStyle.css'
import "bootstrap/dist/css/bootstrap.min.css";
const ToDo = () => {
  return (
    <div className='todo'>
      <input className='inputTask' type="text" placeholder='Enter your task' />
      <button className='addTask'>Add Task</button>
    <div className='taskList'>
        <table className='table'>
            <thead>
                <tr>
                <th>Task</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* Map through tasks here */}
                <tr style={{textAlign: 'left'}}>
                <td>Sample Task
                    <br />
                    <span className='taskDate'>Create at: 2023-10-01</span>
                </td>
                <td>
                    <button className='btn btn-danger'>Delete</button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default ToDo
