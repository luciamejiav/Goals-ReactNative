import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function App() {

  return (
    <View style = {styles.container}>
      <View style = {styles.inputcontainer}>
        <TextInput styles = {styles.textinput} placeholder='Input your goals'/>
        <Button title='Add Goal'/>
      </View>

      <View style = {styles.goalsContainer}>
        <Text>Your list of goals...</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16
  },

  inputcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1, 
    borderBottomColor: "#CCCCCC"
  },

  textinput: {
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1, 
    width: "70%",
    padding: 8
  },

  goalsContainer: {
    flex:5
  }

});
