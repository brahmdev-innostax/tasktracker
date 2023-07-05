exports.addTodo = (title, subtitle, content) => {
  if (!title | !subtitle | !content) {
    return false;
  }
  return true;
};
