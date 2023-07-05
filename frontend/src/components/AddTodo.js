import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTodo() {
  const navigate = useNavigate();

  const addTodo = (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const subtitle = document.getElementById("subtitle").value;
    const content = document.getElementById("content").value;
    const todo = { title, subtitle, content };
    // console.log(todo);

    axios
      .post(process.env.REACT_APP_BACKEND_URL, todo, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        swal({ title: "New Todo created", icon: "success" });
        navigate("/");
      })
      .catch((err) => {
        // console.log(err.response.data.errors);
        swal({
          title: "Error occurred: " + err.response.data.errors,
          icon: "error",
        });
      });
  };

  return (
    <div className="w-min mx-auto">
      <div className="font-bold text-3xl my-10 text-center">Add a Todo</div>

      <form validate method="POST" onSubmit={addTodo}>
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
            // value={todo.title}
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
            // value={todo.subtitle}
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
            // value={todo.content}
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

export default AddTodo;
