import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface Props {
  content: string;
  taskStatus: boolean;
  onRemove: () => void;
  onStatus: () => void;
  onTaskCount: (task: boolean) => void;
}

export function Task({
  content,
  onRemove,
  taskStatus = false,
  onStatus,
  onTaskCount,
}: Props) {
  const [isTaskDone, setIsTaskDone] = useState(taskStatus);
  const [isTrashPressed, setIsTrashPressed] = useState(false);

  function handleTaskStatus() {
    onStatus();
    setIsTaskDone(!isTaskDone);
    onTaskCount(isTaskDone);
  }

  const removeTask = () => {
    onRemove();
    setIsTrashPressed(!isTrashPressed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleTaskStatus} activeOpacity={0.8}>
        <Ionicons
          name={!isTaskDone ? "ellipse-outline" : "checkmark-circle"}
          color={!isTaskDone ? theme.color.blue : theme.color["purple-dark"]}
          size={18}
        />
      </TouchableOpacity>

      {isTaskDone ? (
        <Text style={[styles.taskContent, styles.doneTask]}>{content}</Text>
      ) : (
        <Text style={styles.taskContent}>{content}</Text>
      )}

      <TouchableHighlight
        onPress={removeTask}
        style={styles.trashIconBackground}
        underlayColor={theme.color["gray-400"]}
      >
        <Ionicons
          name="trash-outline"
          color={isTrashPressed ? theme.color.danger : theme.color["gray-300"]}
          size={14}
        />
      </TouchableHighlight>
    </View>
  );
}
