import React, { useContext } from 'react';
import { Context } from '../context/ToDoContext';
import { StyleSheet } from 'react-native';
import ToDoForm from '../components/ToDoForm';


const CreateToDoScreen = ({ navigation }) => {
    const { addToDo } = useContext(Context);
    return <ToDoForm onSubmit={(title, detail, id) => {
        addToDo(title, detail, () => navigation.navigate('Home', {id: id}));
    }} />
     
};

const styles = StyleSheet.create({});

export default CreateToDoScreen;