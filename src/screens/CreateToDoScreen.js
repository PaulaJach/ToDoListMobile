import React, { useContext, useState } from 'react';
import { Context } from '../context/ToDoContext';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


const CreateToDoScreen = ({ route, navigation }) => {
    const [newToDo, setNewToDo ] = useState('');
    const [ detail, setDetail ] = useState('');
    const { addToDo } = useContext(Context);

     return <View>
        <Text style={styles.label}>Enter new TODO:</Text>
        <TextInput style={styles.input} value={newToDo} onChangeText={(text) => setNewToDo(text) }/>
        <Text style={styles.label}>Type some details:</Text>
        <TextInput style={styles.input} value={detail} onChangeText={(text) => setDetail(text)} />
        <Button 
            title="add TODO"
            onPress ={() => {
                addToDo(newToDo, detail);
                navigation.navigate('Home');
            }}
            
            />
    </View>
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        margin: 5,
        padding: 5
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    }
});

export default CreateToDoScreen;