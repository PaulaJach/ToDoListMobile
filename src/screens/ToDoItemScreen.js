import React, { useContext } from 'react';
import { Context } from '../context/ToDoContext';
import { View, Text, StyleSheet } from 'react-native';


const ToDoItemScreen = ({ route, navigation }) => {
    const { state } = useContext(Context);
   
    const item = state.find(i => {
        return i.id == route.params.id
    })

     return <View>
        <Text>{item.title}</Text>
        <Text>{item.detail}</Text>
    </View>
};



const styles = StyleSheet.create({});

export default ToDoItemScreen;