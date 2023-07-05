import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Add Todo button on the screen", () => {
  render(<App />);
  const addTodoButton = screen.getByText(/Add Todo/i);
  expect(addTodoButton).toBeInTheDocument();
});
