import { FC } from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import { Task } from "../types/task";

type DeleModalProps = {
  open: boolean;
  close: () => void;
  remove: (id: string) => void;
  data: Task;
};
const DeleteModal: FC<DeleModalProps> = ({ close, open, remove, data }) => {
  return (
    <Modal
      visible={open}
      transparent
      animationType="slide"
      onRequestClose={close}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text>Are you sure you want to delete {data?.title}?</Text>
          <View style={styles.buttons}>
            <Button title="Cancel" onPress={close} />
            <Button
              title="Yes"
              onPress={() => {
                remove(data?.id || "");
                close();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default DeleteModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#00000088",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  buttons: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
