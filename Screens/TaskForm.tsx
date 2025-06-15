import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  View,
  StyleSheet,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Button,
} from "react-native";
import { NavigationsParams } from "../App";
import { FC, useState } from "react";
import { Task } from "../types/task";
import useTask from "../hooks/useTask";
import { generateUUID } from "../utils/helpers";

type TaskFormProps = NativeStackScreenProps<NavigationsParams, "Form">;
const defaultTask: Task = {
  id: ``,
  title: "",
  description: "",
  category: "",
  completed: false,
  updatedAt: Date.now(),
};
const TaskForm: FC<TaskFormProps> = ({ route, navigation }) => {
  const { data } = route.params;
  const isEdit = Boolean(data?.id);
  // If we’re editing, take the passed-in Task; otherwise, start with no id at all.
  const [task, setTask] = useState<Partial<Task>>(data ?? { ...defaultTask });
  const handleTextChange = (
    name: keyof Omit<Task, "id" | "completed" | "updatedAt">,
    text: string
  ) => {
    setTask((prev) => ({
      ...prev,
      [name]: text,
      completed: prev.completed,
      id: prev.id,
    }));
  };
  const { addTask, updateTask } = useTask();

  const handleSubmit = () => {
    if (isEdit) {
      // data!.id is the original id
      updateTask(data!.id, {
        // we know we have all fields because form is valid
        ...(task as Task),
        updatedAt: Date.now(),
      });
    } else {
      // Generate a guaranteed-unique id here:
      const newTask: Task = {
        ...(task as Omit<Task, "id">),
        id: generateUUID(),
        updatedAt: Date.now(),
      };
      addTask(newTask);
    }
    navigation.navigate("List");
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Task title"
          value={task?.title}
          onChangeText={(text) => handleTextChange("title", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Task title"
          value={task?.description}
          onChangeText={(text) => handleTextChange("description", text)}
        />
        <Button
          title={isEdit ? "Edit Task" : "Add Task"}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};
export default TaskForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    width: 350,
    flexDirection: "column",
    rowGap: 10,
    borderWidth: 1,
    shadowColor: "gray",
    padding: 10,
    borderRadius: 20,
    shadowRadius: 20,
    shadowOffset: { height: 2, width: 2 },
    // shadowOpacity: ,
  },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});
