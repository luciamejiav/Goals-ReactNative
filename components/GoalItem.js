import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function GoalItem( {goal, onDeleteGoal} ) {
  return (
    <Pressable 
      android_ripple={{color: "#210644"}}
      style = {({pressed}) => pressed && styles.pressedItem} 
      onPress={() => {
        onDeleteGoal(goal.id) //borrar nota cuando la pulso
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
    },
    pressedItem: {
      opacity: 0.5
    }
  
  });
  
