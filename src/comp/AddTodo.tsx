import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useAtom } from "jotai";
import { todosAtom } from "../store";
import { useState } from "react";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useAtom(todosAtom);

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: todo, status: "incompleted" },
    ]);
    setTodo("");
  };
  return (
    <div className="w-full m-auto flex  w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button onClick={handleAddTodo}>ADD</Button>
    </div>
  );
};
