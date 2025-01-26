/* eslint-disable react/prop-types */
// import editBtn from "../assets/edit.svg";
import deleteBtn from "../assets/delete.png";
import editBtn from "../assets/edit.svg";
import notTick from "../assets/not_tick.png";
import tick from "../assets/tick.png";

function TodoItem(props) {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      {props.isEditing ? (
        <p className="text-green-700">Editing</p>
      ) : (
        <button
          onClick={() => props.markTodo(props.id, props.isDone)}
          className={`flex gap-2 cursor-pointer`}
        >
          {props.isDone ? (
            <img src={tick} alt="" className="w-[1.5rem]" />
          ) : (
            <img src={notTick} alt="" className="w-[1.5rem]" />
          )}
          {props.isDone ? (
            <p className="max-w-[13rem] line-through">{props.todo}</p>
          ) : (
            <p className="max-w-[13rem]">{props.todo}</p>
          )}
        </button>
      )}
      <div className="flex gap-3">
        <button onClick={() => props.editItem(props.id)}>
          <img src={editBtn} alt="" className="w-[1.5rem]" />
        </button>
        <button onClick={() => props.deleteTodo(props.id)}>
          <img src={deleteBtn} alt="" className="w-[1.5rem]" />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
