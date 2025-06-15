import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import useTask from "../hooks/useTask";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationsParams } from "../App";
import { FC, useState } from "react";
import TaskItem from "../components/TaskItem";
import { Task } from "../types/task";
import { ModalParams } from "../types/common";
import DeleteModal from "../components/DeleteModal";
import Icon from "react-native-vector-icons/AntDesign";

type TaskListProps = NativeStackScreenProps<NavigationsParams, "List">;
const TaskList: FC<TaskListProps> = ({ navigation }) => {
  const [modal, setModal] = useState<ModalParams>({ open: false, data: null });
  const { tasks, removeTask } = useTask();
  const handleEdit = (data: Task) => {
    navigation.navigate("Form", { data });
  };
  const handleDeleteTap = (data: Task | null) => {
    setModal(() => ({ open: true, data: data }));
  };
  const closeModal = () => {
    setModal(() => ({ open: false, data: null }));
  };
  const handleAdd = () => {
    navigation.navigate("Form", {});
  };
  return (
    <View style={styles.container}>
      <View style={{ ...styles.flexRow, justifyContent: "space-between" }}>
        <View style={{ ...styles.flexColumn }}>
          <Text style={styles.pageTitle}>Hello User,</Text>
          <Text style={styles.pageTitle}>
            I've got all you task below. Check them Off!!!
          </Text>
        </View>
        <TouchableOpacity onPress={handleAdd} style={styles.add}>
          <Icon name="plus" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskItem
              item={item}
              onEdit={handleEdit}
              onDelete={handleDeleteTap}
            />
          )}
        />
      </View>
      <DeleteModal
        close={closeModal}
        data={modal.data!}
        open={modal.open}
        remove={removeTask}
      />
    </View>
  );
};
export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
  },
  debug: {
    borderWidth: 1,
    borderColor: "red",
  },
  taskListContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginBlock: 15,
  },
  pageTitle: {
    fontSize: 15,
    fontWeight: "500",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    columnGap: 5,
  },
  add: {
    borderRadius: "50%",
    backgroundColor: "lightgray",
    padding: 4,
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
