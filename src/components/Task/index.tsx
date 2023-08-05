import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

interface Props {
  content: string
  onRemove: () => void
}

export function Task({content, onRemove}: Props) {
  const [ isTaskDone, setIsTaskDone ] = useState(false)
  const [ isTrashPressed, setIsTrashPressed ] = useState(false);
  
  function handleTaskStatus() {
    setIsTaskDone(!isTaskDone)
  }
  
  const changeTrashIconColor = () => {
    setIsTrashPressed(!isTrashPressed);
  };

  const removeTask = () => {
    onRemove();
    changeTrashIconColor();
  }  

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleTaskStatus}
        activeOpacity={0.8}
      >
        {
          isTaskDone ? 
          <Ionicons
            name="checkmark-circle"
            color={theme.color["purple-dark"]}
            size={18}
          />
          :
          <Ionicons
            name="ellipse-outline"
            color={theme.color.blue}
            size={18}
          />
        }
      </TouchableOpacity>

        {
          isTaskDone ?
          <Text style={[styles.taskContent, styles.doneTask]}>
            {content}
          </Text>
          :
          <Text style={styles.taskContent}>
            {content}
          </Text>
        }
      
      <TouchableHighlight
        onPress={removeTask}
        style={ styles.trashIconBackground }
        underlayColor={theme.color["gray-400"]}
      >
        <Ionicons
          name="trash-outline"
          color={isTrashPressed ? theme.color.danger : theme.color['gray-300'] }
          size={14}
        />
      </TouchableHighlight>
    </View>
  )
}