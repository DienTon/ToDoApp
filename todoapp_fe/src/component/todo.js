import React from "react";
import "../css/todoStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as toDoService from "../service/todoService";
import axios from "axios";
const ToDo = () => {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const response = await toDoService.getAll();
      if (response.data && Array.isArray(response.data)) {
        console.log(response.data);
        setTasks(response.data);
      } else {
        console.error(
          "Expected 'content' to be an array but got: ",
          response.data
        );
      }
    } catch (error) {
      console.error("Error fetching blog list", error);
    }
  };

  return (
    <div className="todo">
      <input className="inputTask" type="text" placeholder="Enter your task" />
      <button className="addTask">Add Task</button>
      <div className="taskList">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through tasks here */}
        {tasks.map((task, index) => (
              <tr style={{ textAlign: "left" }}>
                <td key={index}>
                  {task.title}
                  <br />
                  <span className="taskDate">Create at: {task.createAt}</span>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
        ))}
            </tbody>
          </table>
        ;
      </div>
    </div>
  );
};

export default ToDo;
