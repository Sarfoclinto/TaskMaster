import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Task } from "../types/task";
import { FC } from "react";
import Icon from "react-native-vector-icons/AntDesign";

type TaskItemProp = {
  item: Task;
  onEdit: (item: Task) => void;
  onDelete: (data: Task | null) => void;
};
const TaskItem: FC<TaskItemProp> = ({ item, onEdit, onDelete }) => {
  return (
    <View style={{ ...styles.flexColumn, ...styles.taskListContainer }}>
      <View style={{ ...styles.flexRow }}>
        <Text style={{ ...styles.taskTitle }}>{item.title}</Text>
        <View style={{ ...styles.flexRow }}>
          <TouchableOpacity
            onPress={() => onEdit(item)}
            style={{ ...styles.iconContainer }}
          >
            <Icon name="edit" size={15} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onDelete(item)}
            style={{ ...styles.iconContainer }}
          >
            <Icon name="delete" size={15} color="red" />
          </TouchableOpacity>
        </View>
      </View>
      {item.description && <Text>{item.description}</Text>}
    </View>
  );
};
export default TaskItem;

const styles = StyleSheet.create({
  taskListContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginBlock: 15,
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
  taskTitle: {
    width: "80%",
    // borderWidth: 1,
    // borderColor: "black",
    fontSize: 17,
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    borderRadius: "50%",
    backgroundColor: "lightgray",
    width: 30,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
