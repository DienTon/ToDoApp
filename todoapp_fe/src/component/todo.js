import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import "../css/todoStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as toDoService from "../service/todoService";
import axios from "axios";
import { get } from "lodash-es";
const ToDo = () => {
  const [tasks, setTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState({
    title: "",
  });

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

  const handleAddTask = async (e) => {
    await toDoService.addNew(newTask);
    getTasks();
  };
  const deleteTask = async (id) => {
    await toDoService.deleteTask(id);
    getTasks();
  };

  return (
    <div className="todo">
      <Formik onSubmit={handleAddTask} initialValues={newTask}>
        <Form>
          <Field
            className="inputTask"
            type="text"
            name="title"
            placeholder="Enter your task"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <ErrorMessage name="title" component="div" className="error" />
          <button type="submit" className="addTask">
            Add Task
          </button>
        </Form>
      </Formik>
      <div className="taskList">
        <table className="table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through tasks here */}
            {tasks.map((task, index) => (
              <tr key={index} style={{ textAlign: "left" }}>
                <td>
                  {task.title}
                  <br />
                  <span className="taskDate">Create at: {task.createAt}</span>
                </td>
                <td>
                  <button className="btn btn-primary">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button
                    className="btn btn-primary"
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteTask(task.id)}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToDo;
