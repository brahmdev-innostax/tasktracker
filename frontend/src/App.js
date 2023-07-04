import Todo from "./components/Todo";
import { useEffect, useState } from "react";
import {getTodos} from './utils/backend';


function App() {
  let data = [];
  useEffect(() => {
    data = getTodos();
    console.log(data);
  }, [])  

  const [todos, setTodos] = useState(data);

  return (
    <div className="text-center">
      <div className="font-bold text-3xl my-10">TaskTracker</div>
      <div>
        {todos.map(todo => <Todo text={todo.title}/>)}
      </div>
    </div>
  );
}
export default App;
