import "font-awesome/css/font-awesome.min.css";

function Todo(props) {
  return (
    <div className="w-[90%] lg:max-w-1/2 lg:w-1/2 mx-auto flex my-3 p-3 rounded text-white text-xl text-start bg-blue-400">
      <div className="w-full h-min text-start overflow-x-auto overflow-y-hidden whitespace-nowrap">{props.text}</div>
      <div className="w-[20%] text-right">
        <span className="py-3 px-1">
          <i className="fa fa-edit"></i>
        </span>
        <span className="py-3 px-1">
          <i className="fa fa-trash"></i>
        </span>
      </div>
    </div>
  );
}

export default Todo;
