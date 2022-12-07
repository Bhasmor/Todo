import React from "react";

export default function Todos() {
  const [todos, setTodos] = React.useState([]);
  const [data, setData] = React.useState("");

  const todo = () => {
    return todos.map((to, key) => {
      return (
        <div
          className="flex m-10 indent-4 rounded border w-[450px] h-20 text-white justify-between items-center"
          key={key}
        >
          <h1 className="">
            {to.que}
          </h1>
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

  const handleClick = (e) => {
    const item = {
      id: Math.floor(Math.random() * 1000),
      que: data,
    };
    setTodos((prevTodo) => [...prevTodo, item]);
    setData("");
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
          className=" focus:line-through w-72 h-16 indent-4 rounded"
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
