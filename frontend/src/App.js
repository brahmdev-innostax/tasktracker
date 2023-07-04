import Todo from "./components/Todo";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState();

  // load the saved todos from the backend using axios
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL)
      .then((res) => {
        // set the obtained data to the todos array
        setTodos(res.data.todos);
      })
      .catch((err) => {
        console.log(err);
        // to prevent todos from rendering, make it undefined
        setTodos(undefined);
      });
  }, []);

  // function to delete the todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo._id !== id);
    axios
      .delete(process.env.REACT_APP_BACKEND_URL + "/" + id)
      .then((res) => {
        setTodos(updatedTodos);
        alert("Todo deleted.");
      })
      .catch((err) => {
        alert("Error deleting the todo. Please retry.");
      });
  };

  return (
    <div className="text-center">
      <div className="font-bold text-3xl my-10">TaskTracker</div>
      <div>
        {todos &&
          todos.map((todo) => (
            <Todo key={todo._id} todo={todo} handleDelete={deleteTodo} />
          ))}
      </div>
      <div className="mt-[50px]">
        <Link to="/addTodo">
          <span className="p-3 rounded text-white bg-green-600 font-bold">
            Add a todo <i className="fa fa-plus"></i>
          </span>
        </Link>
      </div>
    </div>
  );
}
export default App;
