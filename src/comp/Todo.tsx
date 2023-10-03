import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "../components/ui/checkbox";
import { TodoProps, todosAtom } from "../store";
import { useAtom } from "jotai";
import { RxCross2 } from "react-icons/rx";

export const Todo = () => {
  const [todos, setTodos] = useAtom(todosAtom);

  const handleOnCheckboxClick = (e: CheckedState, todo: TodoProps) => {
    const selectedTodo = todos.find((i) => i.id === todo.id);
    if (selectedTodo) {
      const updatedTodos = todos.map((item) =>
        item.id === selectedTodo.id
          ? { ...item, status: e ? "completed" : "incompleted" }
          : item
      );
      setTodos(updatedTodos as TodoProps[]);
    }
  };

  const handleOnDelete = (id: number) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <div className="max-w-sm m-auto mt-8">
      {todos.map((todo) => {
        return (
          <div className="flex flex-row justify-between" key={todo.id}>
            <p
              style={{
                textDecorationLine:
                  todo.status === "completed" ? "line-through" : "unset",
              }}
            >
              {todo.title}
            </p>
            <div className="flex flex-row gap-1">
              <Checkbox
                checked={todo.status === "completed"}
                onCheckedChange={(e) => handleOnCheckboxClick(e, todo)}
                value={"todo"}
                id="todo"
                className="cursor-pointer"
              />
              <RxCross2
                style={{ fontSize: "18px", cursor: "pointer" }}
                onClick={() => handleOnDelete(todo.id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
