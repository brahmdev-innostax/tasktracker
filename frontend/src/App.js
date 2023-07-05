import Todo from "./components/Todo";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

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
    // axios call on backend to delete the todo from the db
    axios
      .delete(process.env.REACT_APP_BACKEND_URL + "/" + id)
      .then((res) => {
        setTodos(updatedTodos);
        swal({ title: "Todo deleted.", icon: "success" });
      })
      .catch((err) => {
        swal({ title: "Error deleting the todo. Please rety.", icon: "error" });
      });
  };

  return (
    // this is a screen that will show the list of present todos
    <div className="text-center">
      <div className="font-bold text-3xl my-10">TaskTracker</div>
      <div>
        {/* the todos array is mapped using the Todo component */}
        {todos &&
          todos.map((todo) => (
            <Todo key={todo._id} todo={todo} handleDelete={deleteTodo} />
          ))}
      </div>
      <div className="mt-[50px]">
        {/* an additional button to add a Todo to the list */}
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
