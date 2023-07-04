import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router-dom";

function Todo(props) {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/updateTodo/:${props.todo._id}`, { state: { todo: props.todo } });
  };

  const showTodo = () => {
    navigate(`/todo/:${props.todo._id}`, { state: { todo: props.todo } });
  };

  return (
    <div className="w-[90%] lg:max-w-1/2 lg:w-1/2 mx-auto flex my-3 p-3 rounded text-white text-xl text-start bg-blue-400">
      <button
        className="w-full h-min text-start overflow-x-auto overflow-y-hidden whitespace-nowrap"
        onClick={showTodo}
      >
        {props.todo.title}
      </button>
      <div className="w-[20%] text-right">
        {/* <Link to={`/updateTodo/:${props.todo._id}`}> */}
        <button onClick={handleUpdate}>
          <span className="py-3 px-1">
            <i className="fa fa-edit"></i>
          </span>
        </button>
        <span className="py-3 px-1">
          <i
            className="fa fa-trash"
            onClick={() => props.handleDelete(props.todo._id)}
          ></i>
        </span>
      </div>
    </div>
  );
}

export default Todo;
