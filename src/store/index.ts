import { atomWithStorage } from "jotai/utils";

export interface TodoProps {
  id: number;
  title: string;
  status: "completed" | "incompleted";
}
export const todosAtom = atomWithStorage<TodoProps[]>("todos", []);
