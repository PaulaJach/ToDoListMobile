import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';


const ToDoForm = ({onSubmit, initialValues,}) => {
    const [newToDo, setNewToDo ] = useState(initialValues.title);
    const [ detail, setDetail ] = useState(initialValues.detail);
    
    return <View>
    <Text style={styles.label}>Enter TODO:</Text>
    <TextInput style={styles.input} value={newToDo} onChangeText={(text) => setNewToDo(text) }/>
    <Text style={styles.label}>Type some details:</Text>
    <TextInput style={styles.input} value={detail} onChangeText={(text) => setDetail(text)} />
    <Button 
        title="save"
        onPress={() => onSubmit(newToDo, detail)}
        

        
        />
</View>
};  

ToDoForm.defaultProps = {
    initialValues: {
        newToDo: '',
        detail: ''
    }
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

export default ToDoForm;