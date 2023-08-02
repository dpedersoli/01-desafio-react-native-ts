import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Ionicons } from "@expo/vector-icons";
import { theme } from '../../global/styles/theme';
import { useState } from 'react';


export function Home() {
  const [ inputBorderInitialState, setInputBorderInitialState] = useState()
  const [ inputBorderFocus, setInputBorderFocus] = useState()

  function onFocus() {
    setInputBorderFocus({
      borderWidth: 1,
      borderColor: theme.color['purple-dark']
    })
  }

  function onBlur() {
    setInputBorderFocus({
      borderWidth: 0
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo.png')}/>
      </View> 

      <View style={styles.body}>
        <View style={styles.addNewTaskContainer}>
          <TextInput
            style={[styles.addNewTaskInput, inputBorderInitialState, inputBorderFocus]}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={theme.color['gray-300']}
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
          />
          <TouchableOpacity
            style={styles.addNewTaskButton}
            onPress={() => {}}
            activeOpacity={0.8}
          >
            <Ionicons
              name="add-circle-outline"
              size={20}
              color={theme.color['gray-100']}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.taskCounterContainer}>
          <View style={styles.createdTasksContainer}>
            <Text style={styles.createdTasksText}> Criadas </Text>
            <Text style={styles.tasksCounterSpan}> 0 </Text>
          </View>

          <View style={styles.doneTasksContainer}>
            <Text style={styles.doneTasksText}> Concluídas </Text>
            <Text style={styles.tasksCounterSpan}>0</Text>
          </View>
        </View>

        <View style={styles.noTasksContainer}>
          <Ionicons
            name="document-text-outline"
            color={theme.color['gray-400']}
            size={56}
          />

          <Text style={[styles.noTasksText, styles.noTasksTextBold]}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.noTasksText}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>

      </View>
    </View>
  );
}

