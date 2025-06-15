import { createContext } from "react";
import { Task } from "./task";

export type TaskContextType = {
  tasks: Task[];
  addTask: (val: Task) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, obj: Omit<Task, "id">) => void;
};

export const TaskContext = createContext<TaskContextType>({
  addTask: () => {},
  removeTask: () => {},
  tasks: [],
  updateTask: () => {},
});
