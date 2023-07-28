import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Ionicons } from "@expo/vector-icons";
import { theme } from '../../global/styles/theme';


export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo.png')}/>
      </View>

      <View style={styles.body}>
        <View style={styles.inputSection}>
          <TextInput
            style={styles.textInput}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={theme.color['gray-300']}
          />
          <TouchableOpacity style={styles.button}>
            <Ionicons
              name="add-circle-outline"
              size={20}
              color={theme.color['gray-100']}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

