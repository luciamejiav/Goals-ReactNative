import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function App() {

  //declaramos el hook de estado de componente "newGoal"
  const [newGoal, setNewGoal] = useState("");
  const [myGoals, setMyGoals] = useState([]);

  function textChangeHandler(enteredText){
    setNewGoal(enteredText); //agregamos texto
    console.log(newGoal);
  }

  function addGoalHandler(){
    setMyGoals(myCurrentGoals => [...myCurrentGoals, newGoal]) //crea un nuevo array con las metas actuales y añade al final el newGoal, esto se llama destructuración
    console.log(myGoals)
  }

  return (
    <View style = {styles.container}>
      
      <View style = {styles.inputcontainer}>
        <TextInput 
          onChangeText={textChangeHandler} 
          style = {styles.textinput} 
          placeholder='Input your goals'
        />
        <Button 
          title='Add Goal'
          onPress={addGoalHandler}  //manejador para añadir la meta
        />
      </View>

      <View style = {styles.goalsContainer}>
        {myGoals.map(goal => {
          return (
            <Text>{goal}</Text> //añade las metas
          )
        })}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15
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
    borderWidth: 1, 
    width: "70%",
    padding: 10
  },

  goalsContainer: {
    flex:5
  }

});
