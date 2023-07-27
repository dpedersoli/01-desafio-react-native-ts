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
    width: 327,
    marginTop: -27,
    flexDirection: 'row',
    gap: 4
  },

  textInput:{
    backgroundColor: theme.color['gray-500'],
    color: theme.color['gray-100'],
    height: 54,
    width: 271,
    borderRadius: 8,
    paddingLeft: 16,
  },

  button:{
    backgroundColor: theme.color['blue-dark'],
    height: 52,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },

});
