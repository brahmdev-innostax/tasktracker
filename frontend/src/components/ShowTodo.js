import swal from "sweetalert";
import axios from "axios";
import { useEffect, useState } from "react";
// for accessing the todoId in the parameter and navigating to the update page on click of Update button
import { useNavigate, useParams } from "react-router-dom";

function ShowTodo() {
  const navigate = useNavigate();
  const params = useParams();

  const [initialTodo, setInitialTodo] = useState({});

  useEffect(() => {
    // console.log(process.env.REACT_APP_BACKEND_URL + "/" + params.todoId.substring(1,params.todoId.length()));
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/" +
          params.todoId.substring(1, params.todoId.length)
      )
      .then((res) => {
        setInitialTodo(res.data.todo);
        // console.log(res.data);
      })
      .catch((err) => {
        swal({
          title: "Unable to fetch data. Please retry.",
          icon: "error",
        });
      });
    // console.log(initialTodo);
  }, []);

  const updateTodo = () => {
    navigate(`/updateTodo/:${params.todoId.replace(":", "")}`);
  };

  const deleteTodo = () => {
    // axios call to the backend to delete the todo from the db, too
    axios
      .delete(
        process.env.REACT_APP_BACKEND_URL + "/" + params.todoId.replace(":", "")
      )
      .then((res) => {
        swal({ title: "Todo deleted", icon: "success" });
        navigate("/"); // navigate to the home screen if todo deleted successfully
      })
      .catch((err) => {
        swal({
          title: "Error occurred: " + err.response.data.errors,
          icon: "error",
        });
      });
  };

  return (
    <div className="w-fit mx-auto">
      {/* the title of the todo */}
      <div className="font-bold text-3xl mt-16 mb-3 px-5 text-center">
        {initialTodo.title}
      </div>

      {/* the subtitle */}
      <div className="mt-3 text-center">
        <span>{initialTodo.subtitle}</span>
      </div>
      {/* the main content of the todo */}
      <div className="mt-8">
        <div className="p-3 rounded-lg w-[300px] h-[200px] mx-auto border-2 text-lg border-green-300">
          {initialTodo.content}
        </div>
      </div>
      <div className="mt-3 text-center">
        {/* a button to redirect to the update page for updating the Todo content */}
        <button
          className="py-2 px-5 rounded mt-[50px] mx-3 bg-blue-500 text-white font-bold"
          onClick={updateTodo}
        >
          Edit
        </button>
        {/* another button to delete the Todo right from the show screen */}
        <button
          className="py-2 px-5 rounded mt-[50px] bg-red-500 text-white font-bold"
          onClick={deleteTodo}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ShowTodo;
