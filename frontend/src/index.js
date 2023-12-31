import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import UpdateTodo from "./components/UpdateTodo";
import ShowTodo from "./components/ShowTodo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* routes have been added to allow single page navigation of each page */}
      <Routes>
        {/* the homescreen, showing list of all Todos */}
        <Route path="/" element={<App />} />
        {/* the ShowTodo screen */}
        <Route path="/todo/:todoId" element={<ShowTodo />} />
        {/* the AddTodo screen */}
        <Route path="/addTodo" element={<AddTodo />} />
        {/* the UpdateTodo screen */}
        <Route path="updateTodo/:todoId" element={<UpdateTodo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
