import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksScreen from './screens/TasksScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Define your screens here */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hides the header for the Login screen
        />
        <Stack.Screen
          name="Main" // This will be the name you use to navigate to this screen
          component={MainScreen}
          options={{ headerShown: false }} // Title for the header on the HomePage
        />
        <Stack.Screen
          name="Register" // This will be the name you use to navigate to this screen
          component={RegisterScreen}
          options={{ headerShown: false }} // Title for the header on the HomePage
        />
        {/* Add other screens here as needed */}
        <Stack.Screen
          name="Tasks" // This will be the name you use to navigate to this screen
          component={TasksScreen}
          options={{ headerShown: false }} // Title for the header on the HomePage
        />
        <Stack.Screen
          name="ModifyTask"
          component={ModifyTaskScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}