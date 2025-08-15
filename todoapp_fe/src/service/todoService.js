import axios from "axios";

export const getAll = async () => {
  try {
    const res = await axios.get(`http://localhost:8080/`);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};
export const addNew = async (Todos) => {
  try {
    await axios.post("http://localhost:8080/ ", Todos);
    return true;
  } catch (error) {
    return false;
  }
};
export const deleteTask = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/?id=${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting task:", error);
    return false;
  }
}