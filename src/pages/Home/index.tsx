import { Alert, FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Ionicons } from "@expo/vector-icons";
import { theme } from '../../global/styles/theme';
import { useState } from 'react';
import Logo from '../../assets/svg/logo';
import { Task } from '../../components/Task';

export function Home() {
  const [ inputBorderInitialState, setInputBorderInitialState] = useState()
  const [ inputBorderFocus, setInputBorderFocus] = useState()

  const [ list, setList ] = useState<string[]>(['valor'])
  const [ inputValue, setInputValue] = useState('')

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

  function handleAddNewTask() {
    if(list.includes(inputValue)){
      return Alert.alert(`Participante ${inputValue} existe", "Já existe um participante na lista com esse nome`) 
    }

    setList(prevState => [...prevState, inputValue])
    setInputValue('')
  }

  function handleTaskRemove(name: string){
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setList(list.filter(participant => participant !== name))
          Alert.alert("Participante deletado!")
        }
      },
      {
        text: 'Não',
        style: 'cancel' 
      }
    ]) 
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo/>
      </View> 

      <View style={styles.body}>
        <View style={styles.addNewTaskContainer}>
          <TextInput
            style={[styles.addNewTaskInput, inputBorderInitialState, inputBorderFocus]}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={theme.color['gray-300']}
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            onChangeText={setInputValue}
            value={inputValue}
          />
          <TouchableOpacity
            style={styles.addNewTaskButton}
            onPress={handleAddNewTask}
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
            <Text style={styles.tasksCounterSpan}>{list.length}</Text>
          </View>

          <View style={styles.doneTasksContainer}>
            <Text style={styles.doneTasksText}> Concluídas </Text>
            <Text style={styles.tasksCounterSpan}>0</Text>
          </View>
        </View>

        <FlatList
          style={styles.listContainer}
          data={list}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              content={item}
              onRemove={() => handleTaskRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.noTasksContainer}>
              <Ionicons
                name="document-text-outline"
                color={theme.color['gray-400']}
                size={56}
                style={ styles.icon }
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

