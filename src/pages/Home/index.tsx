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
          <TextInput style={styles.textInput}/>
          <TouchableOpacity>
            <Ionicons
              name="md-checkmark"
              size={20}
              color={theme.color.danger}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

