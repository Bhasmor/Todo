import React from "react";

export default function Todos() {
  const [todos, setTodos] = React.useState([]);
  const [data, setData] = React.useState("");

  const todo = () => {
    return todos.map((to, key) => {
      return (
        <div
          className="flex m-10 indent-4 rounded border w-[550px] h-20 text-white justify-between items-center"
          key={key}
        >
          <div className="flex items-center justify-center">
            <div
              className={`w-5 h-5 ${
                to.selected ? "bg-green-500" : "bg-white"
              } ml-2 rounded`}
              onClick={() => {
                handleSelect(to.id);
              }}
            ></div>
            <h1
              onClick={() => {
                handleSelect(to.id);
              }}
              className={`${
                to.selected ? "line-through" : ""
              }`}
            >
              {to.que}
            </h1>
          </div>
          <button
            className="w-12 h-12 bg-red-500 rounded mr-4"
            onClick={() => handleDel(to.id)}
          >
            <strong>X</strong>
          </button>
        </div>
      );
    });
  };

  console.log(todos)

  const handleClick = (e) => {
    if(data.length === 0){
      return alert("Please don't leave the todo blank")
    } 
    const item = {
      id: Math.floor(Math.random() * 1000),
      que: data,
      selected: false,
    };
    setTodos((prevTodo) => [...prevTodo, item]);
    setData("");
  };

  const handleSelect = (id) => {
    setTodos(todos.map((el) => {
      if (el.id === id){
        return{
          ...el,
          selected: !el.selected,
        }
      }
      return el;
    }))
  };

  const handleDel = (id) => {
    const newTodo = todos.filter((td) => td.id !== id);
    setTodos(newTodo);
  };

  return (
    <div className="flex flex-col w-full h-full items-center">
      {todo()}
      <div className="flex justify-around items-center w-[400px] mt-10">
        <input
          className="w-72 h-16 indent-4 rounded"
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Add ToDo"
        />
        <button
          className="w-24 h-16 bg-green-500 rounded"
          onClick={() => handleClick()}
        >
          Add
        </button>
      </div>
    </div>
  );
}
