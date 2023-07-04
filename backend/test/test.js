const mocha = require("mocha");
const chai = require("chai");

const todoUtils = require("../utils/todoutils");

const expect = chai.expect;

// Group of tests using describe
describe("todoUtils", function () {
  it("Expected To not create a TODO", () => {
    let todo = todoUtils.addTodo("this is title");
    expect(todo).to.equal(false);
  });

  it("Expected to not create a TODO, Invalid Prameters", () => {
    let todo = todoUtils.addTodo("This is tile", "This is subtitle");
    expect(todo).to.equal(false);
  });

  it("Expected To Create a TODO", () => {
    let todo = todoUtils.addTodo("Title", "Subtitle", "Contenet ");
    expect(todo).to.equal(true);
  });
});
