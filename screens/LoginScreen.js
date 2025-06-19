import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
  
  const navigation = useNavigation();

  const handleRegister = () => {
      navigation.navigate('Register'); // Example: if you had a signup screen
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />

      {/* This is the key change: Wrap your buttons in the buttonRow View */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      {/* Remove the extra <View /> that was closing the buttonRow prematurely */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    alignSelf: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  button: {
    // These styles will apply to both buttons
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
    width: 160,

    // Remove marginBottom from here, it's better handled by the buttonRow gap or margin on the buttonRow itself if you want space below the row.
    // flex: 1, // Add flex: 1 to make buttons take equal space
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row', // This makes children (your buttons) lay out horizontally
    justifyContent: 'space-around', // Distributes space evenly, or 'space-between'
    // You can also use 'center' if you want them grouped in the middle
    // alignItems: 'center', // Align items along the cross axis (vertically center if flexDirection is row)
    marginTop: 12, // Adds space above the button row
    marginBottom: 12, // Adds space below the button row
    gap: 12, // Adds space between the buttons (React Native 0.71+)
  },
});