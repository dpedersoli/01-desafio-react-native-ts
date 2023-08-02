import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%"
  },

  header:{
    backgroundColor: theme.color['gray-700'],
    height: "20%",
    justifyContent: "center",
    alignItems: "center"
  },

  body:{
    backgroundColor: theme.color['gray-600'],
    height: "80%",
    alignItems: "center"
  },

  addNewTaskContainer:{
    width: 327,
    marginTop: -27,
    flexDirection: 'row',
    gap: 4
  },

  addNewTaskInput:{
    backgroundColor: theme.color['gray-500'],
    color: theme.color['gray-100'],
    height: 54,
    width: 271,
    borderRadius: 8,
    paddingLeft: 16,
  },

  addNewTaskButton:{
    backgroundColor: theme.color['blue-dark'],
    height: 52,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },

  taskCounterContainer:{
    flexDirection: 'row',
    width: "84%",
    justifyContent: 'space-between',
    marginTop: 32
  },

  createdTasksContainer:{
    flexDirection: 'row',
  },
  
  createdTasksText:{
    color: theme.color.blue,
    fontWeight: 'bold',
    width: 55
  },

  doneTasksContainer:{
    flexDirection: 'row',
  },

  doneTasksText:{
    color: theme.color.purple,
    fontWeight: 'bold',
    width: 80,
  },

  tasksCounterSpan:{
    backgroundColor: theme.color['gray-400'],
    color: theme.color['gray-200'],
    fontWeight: 'bold',
    fontSize: 12,
    paddingHorizontal: 4,
    borderRadius: 8,
    borderColor: theme.color['gray-400'],
    marginLeft: 8
  },

});
