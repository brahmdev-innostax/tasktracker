import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateTodo() {
  const navigate = useNavigate();
  const params = useParams();

  const [initialTodo, setInitialTodo] = useState({});

  const updateTodo = (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const subtitle = document.getElementById("subtitle").value;
    const content = document.getElementById("content").value;
    const todo = { title, subtitle, content };
    axios
      .patch(
        process.env.REACT_APP_BACKEND_URL +
          "/" +
          params.todoId.substring(1, params.todoId.length),
        todo,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        alert("Todo Updated");
        navigate("/");
      })
      .catch((err) => {
        alert("Error occurred: " + err);
      });
  };

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
        console.log(res.data);
      })
      .catch((err) => {
        alert("Unable to fetch data. Please retry.");
      });
    console.log(initialTodo);
  }, []);

  return (
    <div className="w-min mx-auto">
      <div className="font-bold text-3xl my-10 text-center">Update Todo</div>

      <form validate method="POST" onSubmit={updateTodo}>
        <div className="mt-5">
          <label htmlFor="title" className="text-lg my-3">
            Title
          </label>
          <input
            minLength={5}
            type="text"
            id="title"
            name="title"
            required
            defaultValue={initialTodo.title}
            className="px-2 py-1 border-[2px] focus:border-green-400 focus:outline-none focus:bg-green-50 rounded-md w-[300px]"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="subtitle" className="text-lg my-3 mt-[30px]">
            Subtitle
          </label>
          <input
            minLength={5}
            type="text"
            id="subtitle"
            name="subtitle"
            required
            defaultValue={initialTodo.subtitle}
            className="px-2 py-1 border-[2px] focus:border-green-400 focus:outline-none focus:bg-green-50 rounded-md w-[300px]"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="content">Content</label>
          <textarea
            minLength={5}
            id="content"
            name="content"
            required
            defaultValue={initialTodo.content}
            className="px-2 py-1 border-[2px]  focus:border-green-400 focus:outline-none focus:bg-green-50  rounded-md w-[300px]"
          />
        </div>
        <div className="mt-5 text-center">
          <button
            className="py-2 px-5 rounded mt-[50px] bg-green-500 text-white font-bold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateTodo;
