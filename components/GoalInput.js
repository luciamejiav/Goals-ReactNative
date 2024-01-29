//rfc + tabulador
import { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

export default function GoalInput( {onNewGoal, visible}) {
    //declaramos el hook de estado de componente "newGoal"
    const [newGoal, setNewGoal] = useState("");

    function textChangeHandler(enteredText){
        setNewGoal(enteredText); //agregamos texto
    }

    function onPressHandler() {
        if(newGoal) {
            onNewGoal(newGoal)
        }
        setNewGoal(""); //cuando introduzcamos una palabra y demos al botón se vacía la celda
    }

    return (
        <Modal visible = {visible}> 
            <View style = {styles.inputcontainer}>
                <TextInput 
                    onChangeText={textChangeHandler} 
                    style = {styles.textInput} 
                    value={newGoal}
                    placeholder='Input your goals'
                />
                <Button 
                    title='Add Goal'
                    onPress={onPressHandler}  //manejador para añadir la meta
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputcontainer: {
        flex: 1, //sin esto la línea y el borde de abajo del rectangulo se juntan
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        borderBottomWidth: 1, 
        borderBottomColor: "#CCCCCC"
      }
})


