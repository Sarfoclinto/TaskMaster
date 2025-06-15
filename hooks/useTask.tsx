import { useContext } from "react";
import { TaskContext } from "../types/context";

const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
export default useTask;
