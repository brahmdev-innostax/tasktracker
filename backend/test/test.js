// Importing mocha and chai
const mocha = require("mocha");
const chai = require("chai");

// Importing todoUtils.js where our code is written
const todoUtils = require("../utils/todoutils");

const expect = chai.expect;

// Group of tests using describe
describe("todoUtils", function () {
  // We will describe each single test using it
  it("Expected To not create a TODO", () => {
    let fare = todoUtils.addTodo("this is title");
    expect(fare).to.equal(false);
  });

  it("Expected to not create a TODO, Invalid Prameters", () => {
    let fare = todoUtils.addTodo("This is tile", "This is subtitle");
    expect(fare).to.equal(false);
  });

  it("Expected To Create a TODO", () => {
    let fare = todoUtils.addTodo("Title", "Subtitle", "Contenet ");
    expect(fare).to.equal(true);
  });
});
