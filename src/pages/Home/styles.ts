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

  inputSection:{
    width: "90%",
    marginTop: -27
  },

  textInput:{
    backgroundColor: theme.color['gray-500'],
    height: 54
  }

});
