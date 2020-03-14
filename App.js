import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from './src/context/ToDoContext';
import ToDoItemScreen from './src/screens/ToDoItemScreen';
import CreateToDoScreen from './src/screens/CreateToDoScreen';
import CreateButton from './src/components/CreateButton';


const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ 
              title: 'My ToDoList',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerRight: () => (
                <CreateButton/>
              ),

             }}
            />
          <Stack.Screen name="ToDoItem" component={ToDoItemScreen} />
          <Stack.Screen name="CreateToDo" component={CreateToDoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
