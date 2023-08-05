import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 64,
    backgroundColor: theme.color['gray-500'],
    marginBottom: 8,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12
  },

  taskContent:{
    color: theme.color['gray-100']
  },

  doneTask:{
    textDecorationLine: 'line-through',
    color: theme.color['gray-300']
  },

  trashIconBackground:{
    borderRadius: 5,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },

  trashIcon:{
    
  },
  
});