import { useEffect, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItem from "./TodoItem";

function Todo() {
  const [id, setId] = useState(0);
  const [todoItems, setTodoItems] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [itemIdToEdit, setItemIdToEdit] = useState(-1);
  const [allMarked, setAllMarked] = useState(false);

  function addTodo(formData) {
    const todoItem = formData.get("todoItem");
    if (todoItem) {
      setId((prev) => prev + 1);
      setTodoItems((prev) => [
        ...prev,
        { id: id, todo: todoItem, isDone: false, isEditing: false },
      ]);
    }
  }

  function markTodo(id, isDone) {
    setTodoItems((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !isDone } : todo
      )
    );
  }

  function markAllToggle() {
    setTodoItems((prevTodos) =>
      prevTodos.map((todo) =>
        todo.isDone === allMarked ? { ...todo, isDone: !allMarked } : todo
      )
    );
    setAllMarked((prev) => !prev);
  }

  function deleteTodo(id) {
    setTodoItems((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteAll() {
    setTodoItems([]);
  }

  function editItem(id) {
    setEditMode((prev) => !prev);
    setItemIdToEdit(id);
    // edit mode will change after function is done executing
    if (!editMode) {
      setTodoItems((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, isEditing: true } : todo
        )
      );
    } else {
      setTodoItems((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, isEditing: false } : todo
        )
      );
    }
  }

  function editTodo(formData) {
    const todoItem = formData.get("todoItem");
    if (todoItem) {
      // delete old todo
      deleteTodo(itemIdToEdit);
      // add new todo as replacement
      setTodoItems((prev) => [
        ...prev,
        { id: itemIdToEdit, todo: todoItem, isDone: false, isEditing: false },
      ]);
      // reorder based on id
      setTodoItems((todos) => todos.sort((a, b) => a.id - b.id));
    } else {
      setTodoItems((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === itemIdToEdit ? { ...todo, isEditing: false } : todo
        )
      );
    }
    setEditMode(false);
  }

  console.log(todoItems);

  // Marking todos effect
  useEffect(() => {
    const markedTodos = todoItems.filter((todo) => todo.isDone === true).length;
    // all todos manually marked, setAllMarked to true
    if (todoItems.length > 0) {
      markedTodos === todoItems.length
        ? setAllMarked(true)
        : setAllMarked(false);
    }
  }, [todoItems]);

  return (
    <div className="bg-slate-300 my-12 pb-4 w-[25rem] min-h-[30rem] rounded-3xl">
      {/* ---- title ---- */}
      <div className="p-4 flex justify-center items-center gap-2">
        <img src={todo_icon} alt="" className="w-10" />
        <h1 className="text-2xl font-semibold">Todo-List</h1>
      </div>

      {/* ---- input ---- */}
      <form
        action={editMode ? editTodo : addTodo}
        className="flex items-center mx-4 rounded-full relative"
      >
        <input
          type="text"
          name="todoItem"
          id="todoItem"
          placeholder={editMode ? "Edit the Todo here" : "Add a Todo"}
          className="flex-1 p-2 pl-6 pr-20 rounded-full outline-none"
        />
        <button
          type="submit"
          className="bg-range-600 p-2 px-4 bg-orange-500 text-white rounded-full transition-colors duration-300 hover:bg-orange-400 absolute right-0"
        >
          {editMode ? "Edit" : "Add +"}
        </button>
      </form>

      {/* ---- output ---- */}
      <div className="p-4">
        {todoItems.length > 0 && (
          <div>
            <ul className="border-t">
              {todoItems.map((todoItem) => (
                <TodoItem
                  key={todoItem.id}
                  todo={todoItem.todo}
                  id={todoItem.id}
                  isDone={todoItem.isDone}
                  markTodo={markTodo}
                  isEditing={todoItem.isEditing}
                  editItem={editItem}
                  deleteTodo={deleteTodo}
                />
              ))}
            </ul>
            <div className="flex justify-between mt-6">
              <button
                onClick={markAllToggle}
                className="p-1 w-24 bg-orange-600 transition-colors duration-200 hover:bg-orange-500 text-white text-sm rounded-md"
              >
                {allMarked ? "Unmark All" : "Mark All"}
              </button>
              <button
                onClick={deleteAll}
                className="p-1 w-24 bg-red-600 transition-colors duration-200 hover:bg-red-500 text-white text-sm rounded-md"
              >
                Delete All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
