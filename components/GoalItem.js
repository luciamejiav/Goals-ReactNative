import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function GoalItem( {goal, onDeleteGoal} ) {
  return (
    <Pressable 
      onPress={() => {
        onDeleteGoal(goal.id) //borrar nota
      }}
    >
      <View style = {styles.goalItem}>
          {/*Comentario: añadimos las metas*/}
          <Text style = {styles.goalText}>{goal.text}</Text>  
      </View>
    </Pressable>
  )
}

const styles = new StyleSheet.create({
    goalItem: {
      padding: 20,
      backgroundColor: "#092FE0",
      marginBottom: 10,
      borderRadius: 12,
    },
    goalText: {
      color: "white"
    }
  
  });
  
