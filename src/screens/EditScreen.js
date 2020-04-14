import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/ToDoContext';
import ToDoForm from '../components/ToDoForm';


const EditScreen = ({navigation, route, newToDo, detail }) => {
    const { state, editToDo } = useContext(Context);
    const item = state.find(i => {
        return i.id == route.params.id
    })

    return <ToDoForm 
        initialValues={{...item}}
        onSubmit={(title, detail, id) => {
            editToDo(id, title, detail, () => navigation.pop());
    }} />

};



const styles = StyleSheet.create({});

export default EditScreen;