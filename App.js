import { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  //declaramos el hook de estado de componente "newGoal"
  const [myGoals, setMyGoals] = useState([]);

  function addGoalHandler(newGoalText){
    //crea un nuevo array con las metas actuales y añade al final el newGoal, esto se llama destructuración
    setMyGoals(myCurrentGoals => [...myCurrentGoals,
      { //añadimos objetos
        id: Date.now(),  //fecha actual
        text: newGoalText,

    }]);
  }

  return (
    <View style = {styles.container}>
      <GoalInput onNewGoal = {addGoalHandler}/> 

      <View style = {styles.goalsContainer}>
        {/*Podemos hacer un FlatList o un ScrollView*/}
        <FlatList
          data={myGoals}
          renderItem={(dataItem) => (
            <GoalItem key={dataItem.item.id} goal = {dataItem.item} />
          )}
        />
      </View>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    width: "70%",
    padding: 10
  },
  goalsContainer: {
    flex: 5,
  }

});
