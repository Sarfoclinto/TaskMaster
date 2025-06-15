import { ReactNode, useState } from "react";
import { Task } from "../types/task";
import { TaskContext } from "../types/context";

const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      completed: false,
      title: "First Task",
      updatedAt: 343434,
      description:
        "This is the desciption of the task. Ijust want it to be long enough",
    },
  ]);

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const updateTask = (taskId: string, data: Omit<Task, "id">) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? task : { ...data, id: taskId }))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export default TaskProvider;
