import { ChangeEvent, useState } from "react";

export const TodoPage = () => {
  const [todo, setTodo] = useState<string>("");
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);

  const onclickadd = () => {
    if (todo === "") return;
    const newTodo = [...incompleteTodos, todo];
    setIncompleteTodos(newTodo);
    setTodo("");
  };

  const onClickD = (index: number) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickC = (index: number) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickB = (index: number) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <div className="flex flex-col space-y-4 p-6">
        <input
          type="text"
          className="px-4 py-2 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-colors duration-300"
          onChange={handleTaskChange}
          value={todo}
        />
        <button
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300"
          onClick={onclickadd}
        >
          ADD
        </button>
        <div className="bg-purple-200 text-purple-800 p-6 rounded-lg min-h-[200px] max-h-[400px] overflow-auto">
          <h1 className="font-bold text-lg mb-2">INCOMPLETE</h1>
          <ul className="space-y-2">
            {incompleteTodos.map((todo, index) => (
              <li key={index} className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md">
                <p className="flex-1">{todo}</p>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600" onClick={() => onClickC(index)}>完了</button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => onClickD(index)}>削除</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-purple-200 text-purple-800 p-6 rounded-lg min-h-[200px] max-h-[400px] overflow-auto">
          <h1 className="font-bold text-lg mb-2">COMPLETE</h1>
          <ul className="space-y-2">
            {completeTodos.map((todo, index) => (
              <li key={index} className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md">
                <p className="flex-1">{todo}</p>
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => onClickB(index)}>戻す</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
