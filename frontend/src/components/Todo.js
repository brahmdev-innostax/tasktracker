import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router-dom";

// functional component to show a Todo on the screen
function Todo(props) {
  const navigate = useNavigate();

  // to navigate to the update screen for modifying the content of the todo
  const handleUpdate = () => {
    navigate(`/updateTodo/:${props.todo._id}`, { state: { todo: props.todo } });
  };

  // to navigate to the ShowTodo page for viewing the complete content of the Todo
  const showTodo = () => {
    navigate(`/todo/:${props.todo._id}`, { state: { todo: props.todo } });
  };

  return (
    // the todo will be shown like a horizontal bar with the following elements in sequence
    // the Todo title (clickable to view th complete Todo), edit Todo button, Delete Todo button

    <div className="w-[90%] lg:max-w-1/2 lg:w-1/2 mx-auto flex my-3 p-3 rounded text-white text-xl text-start bg-blue-400">
      <button
        className="w-full h-min text-start overflow-x-auto overflow-y-hidden whitespace-nowrap"
        onClick={showTodo}
      >
        {props.todo.title}
      </button>
      {/* the edit button */}
      <div className="w-[30%] text-right">
        {/* <Link to={`/updateTodo/:${props.todo._id}`}> */}
        <button onClick={handleUpdate}>
          <span className="py-3 px-1">
            <i className="fa fa-edit"></i>
          </span>
        </button>
        {/* the delete button */}
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
