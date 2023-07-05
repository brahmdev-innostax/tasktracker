import swal from "sweetalert";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// functional component to update the contents of an existing Todo
function UpdateTodo() {
  const navigate = useNavigate();
  const params = useParams();

  const [initialTodo, setInitialTodo] = useState({});

  // this function will send the updated Todo fields to the backend to update the data on the DB
  const updateTodo = (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const subtitle = document.getElementById("subtitle").value;
    const content = document.getElementById("content").value;
    const todo = { title, subtitle, content };

    // axios patch request to update the data
    /**
     * Note: params.todoId was giving the todoId with an additional colon (:) symbol in the
     * starting (don't know why). So, used substring() function to remove the colon from the beginning
     */
    axios
      .patch(
        process.env.REACT_APP_BACKEND_URL +
          "/" +
          params.todoId.substring(1, params.todoId.length),
        todo,
        {
          headers: { "Content-Type": "application/json" }, // the data is being in json format
        }
      )
      .then((res) => {
        // sweet alert to show success update
        swal({ title: "Todo updated.", icon: "success" });
        // navigate to homescreen on successful updation
        navigate("/");
      })
      .catch((err) => {
        // sweet alert to show error message in case of a failure
        swal({ title: "Error occurred: " + err, icon: "error" });
      });
  };

  // the initial fields of the Todo are fetched at the load of the component using useEffect() hook
  // the params.todoId is used to keep track of the Todo to be updated
  useEffect(() => {
    // console.log(process.env.REACT_APP_BACKEND_URL + "/" + params.todoId.substring(1,params.todoId.length()));
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/" +
          params.todoId.substring(1, params.todoId.length)
      )
      .then((res) => {
        // on success
        setInitialTodo(res.data.todo);
        console.log("useEffect() baar baar call ho raha");
        console.log(res.data);
      })
      .catch((err) => {
        // on failure
        swal({
          title: "Unable to fetch data. Please retry.",
          icon: "error",
        });
      });
    console.log(initialTodo);
  }, []);

  return (
    <div className="w-min mx-auto">
      <div className="font-bold text-3xl my-10 text-center">Update Todo</div>
      {/* a form is used to input the fields from the user */}
      <form validate method="POST" onSubmit={updateTodo}>
        <div className="mt-5">
          {/* for the title */}
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
          {/* for the subtitle */}
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
          {/* for the content */}
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
          {/* click of this button will call the onSubmit function of the form */}
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
