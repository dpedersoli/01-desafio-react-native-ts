import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

import Logo from "../../assets/svg/logo";
import { Task } from "../../components/Task";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Home() {
  const [inputBorderInitialState, setInputBorderInitialState] = useState();
  const [inputBorderFocus, setInputBorderFocus] = useState();
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTaskChecked, setIsTaskChecked] = useState(false);
  const [taskDoneCounter, setTaskDoneCounter] = useState(0);

  function onFocus() {
    setInputBorderFocus({
      borderWidth: 1,
      borderColor: theme.color["purple-dark"],
    });
  }

  function onBlur() {
    setInputBorderFocus({
      borderWidth: 0,
    });
  }

  function handleAddNewTask() {
    if (list.includes(inputValue)) {
      return Alert.alert(
        `Participante ${inputValue} existe", "Já existe um participante na lista com esse nome`
      );
    }

    setList((prevState) => [...prevState, inputValue]);
    setInputValue("");
  }

  function handleTaskStatus() {
    setIsTaskChecked(!isTaskChecked);
  }

  function taskCounter(taskToCount: boolean) {
    if (!taskToCount) {
      setTaskDoneCounter(taskDoneCounter + 1);
    } else if (taskToCount) {
      setTaskDoneCounter(taskDoneCounter - 1);
    }
  }

  function handleTaskRemove(task: string) {
    setList(list.filter((item) => item !== task));

    if (taskDoneCounter >= list.length) {
      setTaskDoneCounter(taskDoneCounter - 1);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.body}>
        <View style={styles.addNewTaskContainer}>
          <TextInput
            style={[
              styles.addNewTaskInput,
              inputBorderInitialState,
              inputBorderFocus,
            ]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.color["gray-300"]}
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            onChangeText={setInputValue}
            value={inputValue}
          />
          <TouchableHighlight
            style={styles.addNewTaskButton}
            underlayColor={theme.color.blue}
            onPress={handleAddNewTask}
          >
            <Ionicons
              name="add-circle-outline"
              size={20}
              color={theme.color["gray-100"]}
            />
          </TouchableHighlight>
        </View>

        <View style={styles.taskCounterContainer}>
          <View style={styles.createdTasksContainer}>
            <Text style={styles.createdTasksText}> Criadas </Text>
            <Text style={styles.tasksCounterSpan}>{list.length}</Text>
          </View>

          <View style={styles.doneTasksContainer}>
            <Text style={styles.doneTasksText}> Concluídas </Text>
            <Text style={styles.tasksCounterSpan}>{taskDoneCounter}</Text>
          </View>
        </View>

        <FlatList
          style={styles.listContainer}
          data={list}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              content={item}
              onRemove={() => handleTaskRemove(item)}
              taskStatus={isTaskChecked}
              onStatus={handleTaskStatus}
              onTaskCount={taskCounter}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.noTasksContainer}>
              <Ionicons
                name="document-text-outline"
                color={theme.color["gray-400"]}
                size={56}
                style={styles.icon}
              />

              <Text style={[styles.noTasksText, styles.noTasksTextBold]}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.noTasksText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
