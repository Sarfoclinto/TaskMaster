import { createContext } from "react";
import { Task } from "./task";
import { User } from "firebase/auth";

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

export type AuthContextType = {
  user: User | null;
  initializing: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  initializing: true,
});
